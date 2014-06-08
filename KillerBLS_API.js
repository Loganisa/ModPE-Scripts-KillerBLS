//API
var ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;

function set(slot,id,amount,damage)
{
ScriptManager.nativeSetInventorySlot(slot+9,id,amount,damage);
}

function procCmd(cmd)
{
var data = cmd.split(" ");
if(data[0]=="set")
set(parseInt(data[1])),parseInt(data[2]),parseInt(data[3]),parseInt(data[4]));
}
