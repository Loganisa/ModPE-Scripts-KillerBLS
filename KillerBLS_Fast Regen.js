var rations = 19;

function modTick()
{
rations++;
Player.setHealth(rations.toString());
rations--;
}
