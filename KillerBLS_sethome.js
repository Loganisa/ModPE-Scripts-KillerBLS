var hX=getPlayerX();
var pY=getPlayerY();
var pZ=getPlayerZ();

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
