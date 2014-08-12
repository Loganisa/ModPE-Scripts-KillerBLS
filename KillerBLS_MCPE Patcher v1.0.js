var params = new android.view.ViewGroup.LayoutParams(-2,-2); 
var GUI;
var menu;
var exitUI;
var split = " ";
var mess = false;
var comm = false;
var play = false;
var ent = false;
var blocks = false;
var items = false;
var world = false;
var messpatch = " ";
var messpatchCn = " ";
var commandspatch = " ";
var b = false;
var c = false;
var j = false;
var worldpatch = " ";
var setpatchMM = " ";
 
function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
 
function newLevel(){
clientMessage("This Alpha Patcher!!   (Made by KillerBLS)");
var _0x4479=["\x4D\x43\x50\x45\x20\x50\x61\x74\x63\x68\x65\x72\x20\x62\x79\x20\x4B\x69\x6C\x6C\x65\x72\x42\x4C\x53"];
print(_0x4479[0]);
print(_0x4479[0]);
print(_0x4479[0]);
print(_0x4479[0]);
print(_0x4479[0]);
print(_0x4479[0]);
print(_0x4479[0]);
print(_0x4479[0]);
print(_0x4479[0]);
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
            var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("Patcher");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                    exit();
                }
            }));
            layout.addView(menuBtn);
 
            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
}
 
function mainMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var menuLayout = new android.widget.LinearLayout(ctx);
            var menuScroll = new android.widget.ScrollView(ctx);
            var menuLayout1 = new android.widget.LinearLayout(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);
 
            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);
 
            var textpatch = new android.widget.TextView(ctx);
            textpatch.setTextSize(25);
            textpatch.setText("MCPE Patcher");
            textpatch.setGravity(android.view.Gravity.CENTER);
            menuLayout.addView(textpatch);
             
            var textpatch1 = new android.widget.TextView(ctx);
            textpatch1.setTextSize(21);
            textpatch1.setText("Patch Your Game!");
            textpatch1.setGravity(android.view.Gravity.CENTER);
            menuLayout.addView(textpatch1);
             
            var button = new android.widget.Button(ctx);
            button.setText("Patch Message");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                var aMessage = new android.app.AlertDialog.Builder(ctx); 
                aMessage.setTitle("Message Patch"); 
 
                var sMessage = new android.widget.ScrollView(ctx); 
                var layout = new android.widget.LinearLayout(ctx); 
                layout.setOrientation(1);
 
                var msg1 = new android.widget.TextView(ctx); 
                msg1.setText("Message When You Click on the Bed"); 
                msg1.setTextColor(android.graphics.Color.WHITE);
                msg1.setTextSize(18);
                 msg1.setGravity(android.view.Gravity.CENTER);
 
                var setmessage = new android.widget.EditText(ctx); 
                setmessage.setHint("You can only sleep at night"); 
 
                var msg1c = new android.widget.TextView(ctx); 
                msg1c.setText("Message When You Click on the NRC Block"); 
                msg1c.setTextColor(android.graphics.Color.WHITE);
                msg1c.setTextSize(18);
                 msg1c.setGravity(android.view.Gravity.CENTER);
 
                var setmessageCn = new android.widget.EditText(ctx); 
                setmessageCn.setHint("Not the correct pattern!");
 
                layout.addView(msg1,params); 
                layout.addView(setmessage,params);
                layout.addView(msg1c,params);
                layout.addView(setmessageCn,params);
 
                aMessage.setView(layout); 
 
                aMessage.setPositiveButton("Apply Patch", new android.content.DialogInterface.OnClickListener(){ 
				onClick: function(viewarg){
                    mess = true;
                     
                     clientMessage("Patched to - " + setmessage.getText().toString());
                      
                     clientMessage("Patched to - " + setmessageCn.getText().toString());
                    clientMessage("Write /disMessagePatch to disable patch");
                     
                    messpatch = setmessage.getText().toString();
                    messpatchCn = setmessageCn.getText().toString();
                      }});
 
                aMessage.setNegativeButton("Close", new android.content.DialogInterface.OnClickListener(){ 
                   onClick: function(viewarg){
                      }});
 
                var dMessage = aMessage.create();
                     dMessage.show();
                }
            }));
            menuLayout.addView(button);
             
            var button0 = new android.widget.Button(ctx);
            button0.setText("Patch Commands");
            button0.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                var aCommands = new android.app.AlertDialog.Builder(ctx); 
                aCommands.setTitle("Commands Patch"); 
 
                var sCommands = new android.widget.ScrollView(ctx); 
                var layout = new android.widget.LinearLayout(ctx); 
                layout.setOrientation(1);
 
                var msg2 = new android.widget.TextView(ctx); 
                msg2.setText("Create your Command"); 
                msg2.setTextColor(android.graphics.Color.WHITE);
                msg2.setTextSize(18);
 
                var setcommands = new android.widget.EditText(ctx); 
                setcommands.setHint("Your new Command without the ''/''"); 
                 
                 var msg2c = new android.widget.TextView(ctx); 
                msg2c.setText("Action in the Writing Command"); 
                msg2c.setTextColor(android.graphics.Color.WHITE);
                msg2c.setTextSize(18);
                 
                 var buttoncor = new android.widget.Button(ctx);
            buttoncor.setText("Coordinates");
            buttoncor.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    c = true;
                    j = false;
                    b = false;
                }
            }));
             
            var buttonjum = new android.widget.Button(ctx);
            buttonjum.setText("High Jump");
            buttonjum.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    j = true;
                    c = false;
                    b = false;
                }
            }));
             
            var buttonboo = new android.widget.Button(ctx);
            buttonboo.setText("Explode");
            buttonboo.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    b = true;
                    c = false;
                    j = false;
                }
            }));
                layout.addView(msg2,params); 
                layout.addView(setcommands,params);
                 
layout.addView(msg2c,params);
             
layout.addView(buttoncor,params);
 
layout.addView(buttonjum,params);
 
layout.addView(buttonboo,params);
 
                aCommands.setView(layout); 
 
                aCommands.setPositiveButton("Apply Patch", new android.content.DialogInterface.OnClickListener(){ 
                  onClick: function(viewarg){
                    comm = true;
                    commandspatch = setcommands.getText().toString();
                    clientMessage("Write /disCommandsPatch to disable patch");
                      }});
 
                aCommands.setNegativeButton("Close", new android.content.DialogInterface.OnClickListener(){ 
                   onClick: function(viewarg){
                      }});
 
                var dCommands = aCommands.create();
                    dCommands.show();
                }
            }));
            menuLayout.addView(button0);
             
            var button1 = new android.widget.Button(ctx);
            button1.setText("Patch Player");
            button1.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                 var aPlayer = new android.app.AlertDialog.Builder(ctx); 
                aPlayer.setTitle("Player Patch"); 
 
                var sPlayer = new android.widget.ScrollView(ctx); 
                var layout = new android.widget.LinearLayout(ctx); 
                layout.setOrientation(1);
 
                var msg3 = new android.widget.TextView(ctx); 
                msg3.setText("Patch Player Model"); 
                msg3.setTextColor(android.graphics.Color.WHITE);
                msg3.setTextSize(18);
                 
                 var binvis = new android.widget.Button(ctx);
binvis.setText("Invisible Player Model");
binvis.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        Entity.setRenderType(getPlayerEnt(),1);
            Entity.setSneaking(getPlayerEnt(),false);
    }
}));
 
var bnat = new android.widget.Button(ctx);
bnat.setText("Natural Player Model");
bnat.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        Entity.setRenderType(getPlayerEnt(),3);
            Entity.setSneaking(getPlayerEnt(),false);
    }
}));
 
var bsne = new android.widget.Button(ctx);
bsne.setText("Sneak Player Model");
bsne.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        Entity.setRenderType(getPlayerEnt(),3);     Entity.setSneaking(getPlayerEnt(),true);
    }
}));
 
layout.addView(msg3,params);
layout.addView(bnat,params);
layout.addView(binvis,params); 
layout.addView(bsne,params);
 
                aPlayer.setView(layout); 
 
                aPlayer.setPositiveButton("Apply Patch", new android.content.DialogInterface.OnClickListener(){ 
                  onClick: function(viewarg){
                    play = true;
                    clientMessage("Write /disPlayerPatch to disable patch");
                      }});
 
                var dPlayer = aPlayer.create();
                    dPlayer.show();
                }
            }));
            menuLayout.addView(button1);
             
            var button2 = new android.widget.Button(ctx);
            button2.setText("Patch Entity");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("We Develop...");
                }
            }));
            menuLayout.addView(button2);
             
            var button3 = new android.widget.Button(ctx);
            button3.setText("Patch Blocks");
            button3.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("We Develop...");
                }
            }));
            menuLayout.addView(button3);
             
            var button4 = new android.widget.Button(ctx);
            button4.setText("Patch Items");
            button4.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage("We Develop...");
                }
            }));
            menuLayout.addView(button4);
             
            var button5 = new android.widget.Button(ctx);
            button5.setText("Patch World");
            button5.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    var aWorld = new android.app.AlertDialog.Builder(ctx); 
                aWorld.setTitle("World Patch"); 
 
                var sWorld = new android.widget.ScrollView(ctx); 
                var layout = new android.widget.LinearLayout(ctx); 
                layout.setOrientation(1);
 
                var msg4 = new android.widget.TextView(ctx); 
                msg4.setText("Ability to Change the Time"); 
                msg4.setTextColor(android.graphics.Color.WHITE);
                msg4.setTextSize(18);
                 
                 var buttonda = new android.widget.Button(ctx);
            buttonda.setText("Set Time Day");
            buttonda.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Level.setTime(0);
                }
            }));
             
            var buttonni = new android.widget.Button(ctx);
            buttonni.setText("Set Time Night");
            buttonni.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    Level.setTime(14000);
                }
            }));
             
            var msg4c = new android.widget.TextView(ctx); 
                msg4c.setText("Enter your Temporary Value"); 
                msg4c.setTextColor(android.graphics.Color.WHITE);
                msg4c.setTextSize(18);
                 
                 var settime = new android.widget.EditText(ctx); 
                settime.setHint("0/14000");
 
layout.addView(msg4,params);
layout.addView(buttonda,params);
layout.addView(buttonni,params);
layout.addView(msg4c,params);
layout.addView(settime,params);
 
                aWorld.setView(layout); 
 
                aWorld.setPositiveButton("Apply Patch", new android.content.DialogInterface.OnClickListener(){ 
                  onClick: function(viewarg){
                    world = true;
                    clientMessage("Write /disWorldPatch to disable patch");
                 worldpatch = settime.getText().toString();
                 if(worldpatch=="")
                 {
                 //print("Error");
                 }
                 if(worldpatch==!"")
                 {
                 Level.setTime(worldpatch.toString());
                 }
                      }});
                       
                      aWorld.setNegativeButton("Close", new android.content.DialogInterface.OnClickListener(){ 
                   onClick: function(viewarg){
                      }});
 
                var dWorld = aWorld.create();
                    dWorld.show();
                }
            }));
            menuLayout.addView(button5);
             
            var button6 = new android.widget.Button(ctx);
            button6.setText("Patch Manually");
            button6.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    clientMessage(ChatColor.RED + "Caution! " + ChatColor.WHITE + "Your every wrong action detrimental to the game!");
                    clientMessage("This feature is not completed yet, and may begin!");
                    var alert = new android.app.AlertDialog.Builder(ctx); 
alert.setTitle("Hard Patch"); 
 
var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);
 
var note = new android.widget.TextView(ctx); 
note.setText("Caution! Your every wrong action detrimental to the game!"); 
note.setTextColor(android.graphics.Color.RED);
note.setTextSize(18);
 
var setpatch = new android.widget.EditText(ctx); 
setpatch.setHint("000000 0F 45 92 55 3C 00"); 
 
layout.addView(note,params); 
layout.addView(setpatch,params);
 
alert.setView(layout); 
 
alert.setPositiveButton("Patch", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
  var setpatchM = setpatch.getText().toString();
  setpatchMM = setpatchM.toString();
  if(setpatchMM)
  {
  clientMessage(ChatColor.RED + "Error!!");
  clientMessage(ChatColo.RED + ".");
  }
      }});
 
alert.setNegativeButton("Close", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){
      }});
 
var dialog = alert.create();
dialog.show();
                }
            }));
            menuLayout.addView(button6);
 
            var cr = new android.widget.TextView(ctx); 
                cr.setText("Made by KillerBLS"); 
             
                cr.setTextSize(20);
                 cr.setGravity(android.view.Gravity.CENTER);
                 
             menuLayout.addView(cr);
                 
            menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
 
        }catch(error){
            print("Error: " + error);
        }
    }}));
}
 
function exit(){
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var xLayout = new android.widget.LinearLayout(ctxe);
 
            var xButton = new android.widget.Button(ctxe);
            xButton.setText("X");
            xButton.setTextColor(android.graphics.Color.WHITE);
            xButton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    exitUI.dismiss();
                    menu.dismiss();
                }
            }));
            xLayout.addView(xButton);
 
            exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
            exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            exitUI.showAtLocation(ctxe.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(exception){
            print(exception);
        }
    }}));
}
 
function useItem(x,y,z,itemid,blockid,side)
{
    if(mess==true) {
        if(blockid==26) {
            preventDefault();
            clientMessage(messpatch.toString());
        }
        if(blockid==247) {
            preventDefault();
            clientMessage(messpatchCn.toString());
        }
    }
}
 
function procCmd(cmd)
{
    if(cmd=="disMessagePatch")
    {
        mess = false;
        clientMessage("Message Patch off");
    }
    if(cmd=="disCommandsPatch")
    {
        comm = false;
        j = false;
        b = false;
        c = false;
        commandspatch = " ";
        clientMessage("Commands Patch off");
    }
    if(comm==true) {
            if(cmd==commandspatch.toString())
    {
      if(b==true) {
      Level.explode(getPlayerX(),getPlayerY(),getPlayerZ(),3.0);
      }
      if(j==true) {
      setVelY(getPlayerEnt(),5.0);
      }
      if(c==true) {
      clientMessage("(X Y Z) You position: " + parseInt(getPlayerX()) + split + parseInt(getPlayerY()) + split + parseInt(getPlayerZ()));
      }
      if(c==false&&j==false&&b==false)
      {
      clientMessage("No action is selected when you run.");
      }
    }
    }
    if(cmd=="disPlayerPatch")
    {
    play = false;   Entity.setRenderType(getPlayerEnt(),3);
    Entity.setSneaking(getPlayerEnt(),false);
    clientMessage("Player Patch off");
    }
    if(cmd=="disWorldPatch")
    {
    world = false;
    Level.setTime(100);
            clientMessage("World Patch off");
    }
}
 
function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
        }
        if(menu != null){
            menu.dismiss();
            menu = null;
        }
        if(exitUI != null){
            exitUI.dismiss();
            exitUI = null;
        }
    }}));
    play = false;
comm = false;
mess = false;
ent = false;
items = false;
world = false;
blocks = false;
messpatch = " ";
messpatchCn = " ";
commandspatch = " ";
worldpatch = " ";
b = false;
j = false;
c = false;
setpatchMM = " ";
print("All patches are turned off!");
}
