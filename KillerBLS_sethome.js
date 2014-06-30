var hX=getPlayerX();
var hY=getPlayerY();
var hZ=getPlayerZ();

function procCmd(cmd)
{
if(cmd=="sethome")
{
hX=getPlayerX();
hY=getPlayerY();
hZ=getPlayerZ();
clientMessage("<server>" + ChatColor.GREEN + " Home set" + ChatColor.WHITE + "!"):
} else {
if(cmd=="home")
{
setPosition(getPlayerEnt(), hX,hY+1,hZ);
}
}
}
