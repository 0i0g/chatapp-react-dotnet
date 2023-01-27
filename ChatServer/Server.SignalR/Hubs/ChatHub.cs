using Microsoft.AspNetCore.SignalR;

namespace Server.SignalR.Hubs;

public class ChatHub : Hub
{
    public async Task SendMessage(string message)
    {
        await Clients.Others.SendAsync("ReceiveMessage", message);
    }
}