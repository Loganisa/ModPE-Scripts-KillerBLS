 var Name = "TheScriptImporter";
 var Code = "function modTick() { clientMessage('Spam!!!'); }" 
 function newLevel()
 {
 var ctx = com.mojang.minecraftpe.MainActivity.get();
 ctx.runOnUiTh0hread(new java.io.lang.Runnable({run: function()
 {try
 {var patchesFolder=ctx.getDir("modscripts",0);
 var scriptFile=new java.io.File(patchesFolder, Name + ".js");
 var printWriter=new java.io.printWriter(scriptFile);
 printWriter.write(Code);
 printWriter.flush();
 printWriter.close();
 net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(ScriptFile, false);
 net.zhuoweizhang.mcpelauncher.ScriptManager.setEnabled(ScriptFile, true);
 }catch(e){
 clientMessage("Oops... We failed: "+e);
 }
 }}));
 }
