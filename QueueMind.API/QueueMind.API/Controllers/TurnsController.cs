using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QueueMind.API.Data;
using QueueMind.API.Models;
using QueueMind.API.Patterns.State;
using QueueMind.API.Patterns.Observer;

namespace QueueMind.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class TurnsController : ControllerBase
{
    private readonly AppDbContext _context;

    public TurnsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetTurns()
    {
        return Ok(await _context.Turns.ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTurn(int id)
    {
        var turn = await _context.Turns.FindAsync(id);
        if (turn == null) return NotFound();

        return Ok(turn);
    }

    [HttpPost]
    public async Task<IActionResult> CreateTurn(Turn turn)
    {
        turn.created_at = DateTime.Now;
        turn.status = "pending";

        _context.Turns.Add(turn);
        await _context.SaveChangesAsync();

        var manager = new TurnManager();
        manager.Attach(new NotificationService());
        manager.Attach(new DisplayBoard());

        manager.Notify(turn);

        return Ok(turn);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTurn(int id, Turn turn)
    {
        var existing = await _context.Turns.FindAsync(id);
        if (existing == null) return NotFound();

        existing.status = turn.status;
        existing.called_at = turn.called_at;
        existing.finished_at = turn.finished_at;

        await _context.SaveChangesAsync();

        return Ok(existing);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTurn(int id)
    {
        var turn = await _context.Turns.FindAsync(id);
        if (turn == null) return NotFound();

        _context.Turns.Remove(turn);
        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpPut("{id}/next")]
    public async Task<IActionResult> Next(int id)
    {
        var turn = await _context.Turns.FindAsync(id);

        if (turn == null)
            return NotFound();

        if (turn.status == "cancelled" || turn.status == "finished")
            return BadRequest("No se puede avanzar un turno finalizado o cancelado");

        var state = TurnStateFactory.GetState(turn.status);

        var newStatus = state.HandleNext(turn);

        if (newStatus == "called")
            turn.called_at = DateTime.Now;

        if (newStatus == "finished")
            turn.finished_at = DateTime.Now;

        turn.status = newStatus;

        await _context.SaveChangesAsync();

        return Ok(turn);
    }

    [HttpPut("{id}/cancel")]
    public async Task<IActionResult> Cancel(int id)
    {
        var turn = await _context.Turns.FindAsync(id);

        if (turn == null)
            return NotFound();

        var state = TurnStateFactory.GetState(turn.status);

        turn.status = state.HandleCancel(turn);

        await _context.SaveChangesAsync();

        return Ok(turn);
    }
}