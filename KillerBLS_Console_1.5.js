//Does not work ConsoleUI :(

var GUI;
var t_cmd = ">/Command";
//var closeMSG = "Closed";
var split = " ";
var VERSION = "1.5";
var sdcard = android.os.Environment.getExternalStorageDirectory();


/*var ip = Server.getAddress();
var port = Server.getPort();*/

var File = java.io.File;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var MediaPlayer = android.media.MediaPlayer();

var file = 
{
    select:function(dir, fileName)
    {
        return (new File(dir, fileName));
    },
    exists:function(selectedFile)
    {
        return selectedFile.exists();
    },
    create:function(selectedFile)
    {
        selectedFile.createNewFile();
        return selectedFile;
    },
    del:function(selectedFile)
    {
        selectedFile.delete();
    },
    read:function(selectedFile)
    {
        var readed = (new BufferedReader(new FileReader(selectedFile)));
        var data = new StringBuilder();
        var string;
        while((string = readed.readLine()) != null)
        {
            data.append(string);
            data.append("\n");
        }
        return data.toString();
    },
    readLine:function(selectedFile, line)
    {
        var readT = new file.read(selectedFile);
        var lineArray = readT.split("\n");
        return lineArray[line - 1];
    },
    readKey:function(selectedFile, key, keySeparator)
    {
        var isText = 0;
        var textR = new file.read(selectedFile);
        var splitTextR = textR.split("\n");
		for(var i = 0; i < splitTextR.length; i++)
		{
			var textRF = splitTextR[i].split(keySeparator);
			if(textRF[0] == key)
			{
			    return textRF[1];
                    isText = 1;
				break;
			}
                if(!isText)
                {
                    return "[Unknown]";
                }
		}
    },
    write:function(selectedFile, text)
    {
        file.rewrite(selectedFile, (new file.read(selectedFile)) + text);
    },
    rewrite:function(selectedFile, text)
    {
        var writeFOS = new FOS(selectedFile);
        writeFOS.write(new String(text).getBytes());
    },
    writeKey:function(selectedFile, key, keyText, keySeparator)
    {
        var isText = 0;
        var textR = new file.read(selectedFile);
        var splitTextR = textR.split("\n");
		for(var i = 0; i < splitTextR.length; i++)
		{
			var textRF = splitTextR[i].split(keySeparator);
			if(textRF[0] == key)
			{
			     var splitWithKey = textR.split(key + keySeparator + new file.readKey(selectedFile, key));
                    file.rewrite(selectedFile, splitWithKey[0] + key + keySeparator + keyText + splitWithKey[1]);
                    isText = 1;
				break;
			}
		}
        if(!isText)
        {
            file.write(selectedFile, key + keySeparator + keyText);
        }
    },
    mPlay:function(musicPath)
    {
        MediaPlayer.setDataSource(musicPath);
        MediaPlayer.prepare();
        MediaPlayer.start();
    },
    mStop:function()
    {
        MediaPlayer.reset();
    }
};

function procCmd(cmd) {
	var cmd = cmd.split(" ");
	if(cmd[0]=="night") {
		Level.setTime(14000)
	} else if(cmd[0]=="day") {
		Level.setTime(0)
	} else if(cmd[0]=="gamemode") {
		if(cmd[1]=="1") {
		Level.setGameMode(1)
		}
		if(cmd[1]=="0") {
	        Level.setGameMode(0)
		}
	} else if(cmd[0]=="heal") {
		Player.setHealth(20)
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You cured!");
	} else if(cmd[0]=="give") {
		Player.addItemInventory(cmd[1].toString(),cmd[2].toString());
	} else if(cmd[0]=="Command") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Enter the command.");
	} else if(cmd[0]=="kill") {
		Player.setHealth(0)
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You killed!");
	} else if(cmd[0]=="god") {
		if(cmd[1]=="on") {
		Player.setHealth(99999999999);
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You god!");
		}
		if(cmd[1]=="off") {
		Player.setHealth(20);
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] God Mode off!");
		}
	} else if(cmd[0]=="set") {
		if(cmd[1]=="time") {
			if(cmd[2]=="day") {
			Level.setTime(0)	
			}
			if(cmd[2]=="night") {
			Level.setTime(14000)	
			}
		}
	} else if(cmd[0]=="set") {
		if(cmd[1]=="time") {
		Level.setTime(cmd[2].toString())
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Time set to" + split + cmd[2].toString());
		}
	} else if(cmd[0]=="vanish") {
		if(cmd[1]=="on") {
		Entity.setRenderType(getPlayerEnt(),1);
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Vanish on!");	
		}
                if(cmd[1]=="off") {
                Entity.setRenderType(getPlayerEnt(),3);
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Vanish off!");
                }
	} else if(cmd[0]=="tp") {
		setPosition(getPlayerEnt(),cmd[1].toString(),cmd[2].toString(),cmd[3].toString());
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Teleported Player to" + split + cmd[1].toString() + split + cmd[2].toString() + split + cmd[3].toString());
	} else if(cmd[0]=="gm") {
		if(cmd[1]=="1") {
		Level.setGameMode(1)	
		}
		if(cmd[1]=="0") {
		Level.setGameMode(0)	
		}
	} else if(cmd[0]=="coords") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You coordinates -" + split + parseInt(getPlayerX()) + split + parseInt(getPlayerY()) + split + parseInt(getPlayerZ()));
	} else if(cmd[0]=="jump") {
		setVelY(getPlayerEnt(),cmd[1].toString());
	} else if(cmd[0]=="commands") {
		var list = new file.select(sdcard, "Console_Commands.txt");
		file.create(list);
		file.write(list,"[Console] Commands: commands, get ip, gm 1/0, give, coords, tp, set time, night/day, vanish on/off, jump, help, info, vk, creative/survival, KillerBLS, y0y0y0, WiZARDHAX, 0x10c-zone, god on/off, kill, gamemode 1/0, heal.");
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Commands list saved to sdcard!");
	} else if(cmd[0]=="info") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Console Made by KillerBLS, This Public Beta, version" + split + ChatColor.GREEN + VERSION);
	} else if(cmd[0]=="vk") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Creater - http://vk.com/y0_PhilDawggg");
	} else if(cmd[0]=="creative") {
		Level.setGameMode(1)
	} else if(cmd[0]=="survival") {
		Level.setGameMode(0)
	} else if(cmd[0]=="KillerBLS") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Made by" + split + ChatColor.GREEN + "KillerBLS");
	} else if(cmd[0]=="y0y0y0") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] y0 PhilDawggg!!");
	} else if(cmd[0]=="WiZARDHAX") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] " + ChatColor.PINK + "www." + ChatColor.GREEN + "WiZARD" + ChatColor.RED + "HAX" + ChatColor.PINK + ".com");
	} else if(cmd[0]=="0x10c-zone") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] http://0x10c-zone.ru/!");
	} else if(cmd[0]=="") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Enter the command.");
	} else if(cmd[0]=="help") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] At the moment, does not have a subsidiary Directions.");
	} else if(cmd[0]=="get") {
		if(cmd[1]=="ip") {
		//getIp();
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Function is not working because of the stupidity developer :)");
		}
	}
}

function newLevel(){
	clientMessage("");
	clientMessage("");
	clientMessage("");
	clientMessage("");
	clientMessage("");
	clientMessage("");
	clientMessage("");
	clientMessage("");
	clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Console optimized for your device!");
	clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] So as you can write commands and chatting!");
	clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Enter ''/commands'' to get a list of available commands.");
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

            var consoleUIthread = new android.widget.Button(ctx);
            consoleUIthread.setText("Console");
            consoleUIthread.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
            	
            	var alert = new android.app.AlertDialog.Builder(ctx); 
            	alert.setTitle("Console"); 

            	var scroll = new android.widget.ScrollView(ctx); 
            	var layout = new android.widget.LinearLayout(ctx); 
            	layout.setOrientation(1);

            	var note = new android.widget.TextView(ctx); 
            	note.setText("Enter the commands available."); 
            	note.setTextColor(android.graphics.Color.WHITE);
            	note.setTextSize(18);

            	var setcmd = new android.widget.EditText(ctx); 
            	var set_cmd = setcmd.split(" ");
            	setcmd.setHint(t_cmd); 

            	var params = new android.view.ViewGroup.LayoutParams(-2,-2); 

            	layout.addView(note,params); 
            	layout.addView(setcmd,params);

            	alert.setView(layout); 

            	alert.setPositiveButton("Apply", new android.content.DialogInterface.OnClickListener(){ 
            	  onClick: function(viewarg){
                //console();
                clientMessage(setcmd.getText().toString());
                Server.sendChat(setcmd.getText().toString());
            	      }});

            	alert.setNegativeButton("Close", new android.content.DialogInterface.OnClickListener(){ 
            	   onClick: function(viewarg){
            		//print(closeMSG);
            	      }});

            	var dialog = alert.create();
            	dialog.show();
                }
            }));
            layout.addView(consoleUIthread);

            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 5, 90);
        }catch(err){
            print("Error in Console: " + err);
        }
    }}));
}

function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
        }
    }}));
}

/*function getIp() {
	if(ip==null) {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Log in to the server for information.");
	} else {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You play the" + split + ip + port);
	}
}*/
