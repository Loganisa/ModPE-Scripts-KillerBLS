//Does not work

var GUI;
var cmd = ">/Command";
//var closeMSG = "Closed";
var id = [];
var count = [];
var split = " ";
var time = [];
var x,y,z;
var jump = []
var VERSION = "1.4";
var sdcard = android.os.Environment.getExternalStorageDirectory();


var ip = Server.getAddress();
var port = Server.getPort();

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
	if(cmd=="night") {
		Level.setTime(14000)
	} else if(cmd=="day") {
		Level.setTime(0)
	} else if(cmd=="gamemode 1") {
		Level.setGameMode(1)
	} else if(cmd=="gamemode 0") {
		Level.setGameMode(0)
	} else if(cmd=="heal") {
		Player.setHealth(20)
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You cured!");
	} else if(cmd=="give " + id + split + count) {
		Player.addItemInventory(id.toString(),count.toString())
	} else if(cmd=="Command") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Enter the command.");
	} else if(cmd=="kill") {
		Player.setHealth(0)
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You killed!");
	} else if(cmd=="god on") {
		Player.setHealth(99999999999)
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You god!");
	} else if(cmd=="god off") {
		Player.setHealth(20)
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] God Mode off!");
	} else if(cmd=="set time day") {
		Level.setTime(0)
	} else if(cmd=="set time night") {
		Level.setTime(14000)
	} else if(cmd=="set time " + time) {
		Level.setTime(time.toString())
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Time set to" + split + time);
	} else if(cmd=="vanish on") {
		Entity.setRenderType(getPlayerEnt(),1);
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Vanish on!");
	} else if(cmd=="vanish off") {
		Entity.setRenderType(getPlayerEnt(),3);
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Vanish off!");
	} else if(cmd=="tp " + x + split + y + split + z) {
		setPosition(getPlayerEnt(),x.toString(),y.toString(),z.toString());
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Teleported Player to" + split + x + split + y + split + z);
	} else if(cmd=="gm 1") {
		Level.setGameMode(1)
	} else if(cmd=="gm 0") {
		Level.setGameMode(0)
	} else if(cmd=="coords") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You coordinates -" + split + parseInt(getPlayerX()) + split + parseInt(getPlayerY()) + split + parseInt(getPlayerZ()));
	} else if(cmd=="jump " + jump) {
		setVelY(getPlayerEnt(),jump.toString());
	} else if(cmd=="commands list") {
		var list = new file.select(sdcard, "Console_Commands.txt");
		file.create(list);
		file.write(list,"[Console] Commands: commands list, get ip, gm 1/0, give, coords, tp, set time, night/day, vanish on/off, jump, help, info, vk, creative/survival, KillerBLS, y0y0y0, WiZARDHAX, 0x10c-zone, god on/off, kill, gamemode 1/0, heal.");
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Commands list saved to sdcard!");
	} else if(cmd=="info") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Console Made by KillerBLS, This Public Beta, version" + split + ChatColor.GREEN + VERSION);
	} else if(cmd=="vk") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] http://vk.com/y0_PhilDawggg");
	} else if(cmd=="creative") {
		Level.setGameMode(1)
	} else if(cmd=="survival") {
		Level.setGameMode(0)
	} else if(cmd=="KillerBLS") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Made by" + split + ChatColor.GREEN + "KillerBLS");
	} else if(cmd=="y0y0y0") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] y0 PhilDawggg!!");
	} else if(cmd=="WiZARDHAX") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] " + ChatColor.PINK + "www." + ChatColor.GREEN + "WiZARD" + ChatColor.RED + "HAX" + ChatColor.PINK + ".com");
	} else if(cmd=="0x10c-zone") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] http://0x10c-zone.ru/!");
	} else if(cmd=="") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Enter the command.");
	} else if(cmd=="help") {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] At the moment, does not have a subsidiary Directions.");
	} else if(cmd=="get ip") {
		getIp();
	}
}

function newLevel(){
	clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Console optimized for your device!");
	clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] So as you can write commands and chatting!");
	clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Enter ''/commands list'' to get a list of available commands.");
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
            	setcmd.setHint(cmd); 

            	var params = new android.view.ViewGroup.LayoutParams(-2,-2); 

            	layout.addView(note,params); 
            	layout.addView(setcmd,params);

            	alert.setView(layout); 

            	alert.setPositiveButton("Apply", new android.content.DialogInterface.OnClickListener(){ 
            	  onClick: function(viewarg){
                //console();
                clientMessage(setcmd.getText().toString());
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
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 5, 50);
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

function getIp() {
	if(ip==null) {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] Log in to the server for information.");
	} else {
		clientMessage("[" + ChatColor.GREEN + "Console" + ChatColor.WHITE + "] You play the" + split + ip + port);
	}
}
