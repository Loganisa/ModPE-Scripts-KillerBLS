var GUI;
var GUI2;
var menu;
var exitUI;
var fullbright = false;
var criticals = false;
var onlyday = false;
var spammer = false;
var regen = false;
 
function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
 
function newLevel(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
            var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("GUI");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                    exit();
                }
            }));
            layout.addView(menuBtn);
 
            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 15, 30);
        }catch(err){
            print("An error occured: " + err);
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
             
var maker = new android.widget.TextView(ctx);
            maker.setTextSize(25);
            maker.setText("M1necraftHaxPE Alpha 1.0");
            maker.setGravity(android.view.Gravity.CENTER);
            menuLayout.addView(maker);
             
var reg = new android.widget.Button(ctx);
            reg.setText("Register");
       reg.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
          clientMessage("/register 123098y0y0y0777wizard1337");
                }
            }));
            menuLayout.addView(reg);
             
var log = new android.widget.Button(ctx);
            log.setText("Login");
            log.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
          clientMessage("/login 123098y0y0y0777wizard1337");
                }
            }));
            menuLayout.addView(log);
             
var server = new android.widget.Button(ctx);
            server.setText("Join Server");
            server.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var alert = new android.app.AlertDialog.Builder(ctx); 
alert.setTitle("Join Server"); 
 
var scroll = new android.widget.ScrollView(ctx); 
var layout2 = new android.widget.LinearLayout(ctx); 
layout2.setOrientation(1);
 
var note = new android.widget.TextView(ctx); 
note.setText("Может не работать!!"); 
note.setTextColor(android.graphics.Color.WHITE);
note.setTextSize(15);
 
var ip = new android.widget.EditText(ctx); 
ip.setHint("Ip server.     "); 
 
var params = new android.view.ViewGroup.LayoutParams(-2,-2); 
 
layout2.addView(note,params);
layout2.addView(ip,params);
 
alert.setView(layout2); 
 
alert.setPositiveButton("Join", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
  Server.joinServer(ip.getText().toString(),"19132");
      }});
 
alert.setNeutralButton("Close",new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
      }});
 
var dialog = alert.create();
dialog.show();
                }
            }));
            menuLayout.addView(server);
             
var checked0 = false;
var button0 = new android.widget.CheckBox(ctx);
button0.setText("Full Bright");
button0.setChecked(checked0);
button0.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked0){
            checked0 = true;
         fullbright = true;
Block.setLightLevel(0, 15);
Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ(),1);
Level.setTile(getPlayerX()-1, getPlayerY(), getPlayerZ(),1);
Level.setTile(getPlayerX()+1, getPlayerY(), getPlayerZ(),1);
Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ()+1,1);
Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ()-1,1);
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX()-1, getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX()+1, getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ()+1);
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ()-1);
        }else{
            checked0 = false;
         fullbright = false;
Block.setLightLevel(0, 0);
Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ(),1);
Level.setTile(getPlayerX()-1, getPlayerY(), getPlayerZ(),1);
Level.setTile(getPlayerX()+1, getPlayerY(), getPlayerZ(),1);
Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ()+1,1);
Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ()-1,1);    
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX()-1, getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX()+1, getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ()+1);
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ()-1); 
        }
        button0.setChecked(checked0);
    }
}));
menuLayout.addView(button0);
 
var checked1 = false;
var button1 = new android.widget.CheckBox(ctx);
button1.setText("God Mode");
button1.setChecked(checked1);
button1.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked1){
            checked1 = true;
        Player.setHealth(32000)
        }else{
            checked1 = false;
        Player.setHealth(20)
        }
        button1.setChecked(checked1);
    }
}));
menuLayout.addView(button1);
 
var checked2 = false;
var button2 = new android.widget.CheckBox(ctx);
button2.setText("Criticals");
button2.setChecked(checked2);
button2.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked2 && !criticals){
            checked2 = true;
            criticals = true;
        }else{
            checked2 = false;
            criticals = false;
        }
        button2.setChecked(checked2);
    }
}));
menuLayout.addView(button2);
 
var checked3 = false;
var button3 = new android.widget.CheckBox(ctx);
button3.setText("X-Ray");
button3.setChecked(checked3);
button3.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked3){
            checked3 = true;
            clientMessage("Destroy Block");
            Block.defineBlock(1, "Stone", ["fx",0],1,0,5);
      Block.defineBlock(2, "Grass", ["fx",0],2,0,5);
      Block.defineBlock(3, "Dirt", ["fx",0],3,0,5);
      Block.defineBlock(5, "Wood Plancs", ["fx",0],5,0,5);
           Block.defineBlock(12, "Sand", ["fx",0],12,0,5);
      Block.defineBlock(13, "Gravel", ["fx",0],13,0,5);
      Block.defineBlock(24, "Sand Stone", ["fx",0],24,0,5);
      Block.defineBlock(80, "Snow Block", ["fx",0],80,0,5);
      Block.setDestroyTime(1,0.1);
      Block.setDestroyTime(2,0.1);
      Block.setDestroyTime(3,0.1);
      Block.setDestroyTime(5,0.2);
      Block.setDestroyTime(12,0.1);
      Block.setDestroyTime(13,0.1);
      Block.setDestroyTime(24,0.2);
      Block.setDestroyTime(80,0.1);
      Block.defineBlock(15, "Iron ore", ["iron_ore",0],15,5);
      Block.defineBlock(16, "Coal ore", ["coal_ore",0],16,5);
      Block.defineBlock(21, "Lapis Lazuli", ["lapis_ore",0],21,5);
      Block.defineBlock(14, "Gold ore", ["gold_ore",0],14,5);
      Block.defineBlock(56, "Diamond ore", ["diamond_ore",0],56,5);
      Block.defineBlock(73, "Red Stone ore", ["redstone_ore",0],73,5);
      Level.destroyBlock(getPlayerX(), getPlayerY()-1, getPlayerZ());
        }else{
            checked3 = false;
            clientMessage("Destroy Block");
            Block.defineBlock(1, "Stone", ["stone",0],1,5);
            Block.defineBlock(2, "Grass", ["grass",3],2,5);
            Block.defineBlock(3, "Dirt", ["dirt",0],3,5);
            Block.defineBlock(5, "Wood Planks", ["planks",0],5,5);
            Block.defineBlock(7, "Bedrock", ["bedrock",0],7,5);
            Block.defineBlock(12, "Sand", ["sand",0],12,5);
            Block.defineBlock(13, "Gravel", ["gravel",0],13,5);
            Block.defineBlock(24, "Sand stone", ["sandstone",0],24,5);
            Block.defineBlock(80, "Snow Block", ["snow",0],80,5);
            Level.destroyBlock(getPlayerX(), getPlayerY()-1, getPlayerZ());
        }
 button3.setChecked(checked3);
    }
}));
menuLayout.addView(button3);
 
var checked4 = false;
var button4 = new android.widget.CheckBox(ctx);
button4.setText("Only Day");
button4.setChecked(checked4);
button4.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked4 && !onlyday){
            checked4 = true;
            onlyday = true;
        }else{
            checked4 = false;
            onlyday = false;
        }
        button4.setChecked(checked4);
    }
}));
menuLayout.addView(button4);
 
var checked5 = false;
var button5 = new android.widget.CheckBox(ctx);
button5.setText("Sneak");
button5.setChecked(checked5);
button5.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked5){
            checked5 = true;
            Entity.setSneaking(getPlayerEnt(),true);
        }else{
            checked5 = false;
            Entity.setSneaking(getPlayerEnt(),false);
        }
        button5.setChecked(checked5);
    }
}));
menuLayout.addView(button5);
 
var checked6 = false;
var button6 = new android.widget.CheckBox(ctx);
button6.setText("Spammer");
button6.setChecked(checked6);
button6.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked6 && !spammer){
            checked6 = true;
            spammer = true;
        }else{
            checked6 = false;
            spammer = false;
        }
        button6.setChecked(checked6);
    }
}));
menuLayout.addView(button6);
 
var b7 = new android.widget.Button(ctx);
            b7.setText("Glide x1");
       b7.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
        setVelY(getPlayerEnt(),0.5);
                }
            }));
            menuLayout.addView(b7);
             
var checked8 = false;
var button8 = new android.widget.CheckBox(ctx);
button8.setText("Creative/Survival");
button8.setChecked(checked8);
button8.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked8){
            checked8 = true;
            Level.setGameMode(1)
        }else{
            checked8 = false;
            Level.setGameMode(0)
        }
        button8.setChecked(checked8);
    }
}));
menuLayout.addView(button8);
 
var checked9 = false;
var button9 = new android.widget.CheckBox(ctx);
button9.setText(" PVP/PVE Regen");
button9.setChecked(checked9);
button9.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked9 && !regen){
            checked9 = true;
            regen = true;
        }else{
            checked9 = false;
            regen = false;
        }
        button9.setChecked(checked9);
    }
}));
menuLayout.addView(button9);
 
var checked10 = false;
var button10 = new android.widget.CheckBox(ctx);
button10.setText("Invisible");
button10.setChecked(checked10);
button10.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked10){
            checked10 = true;
         Entity.setRenderType(getPlayerEnt(),1);
        }else{
            checked10 = false;
            Entity.setRenderType(getPlayerEnt(),3);
        }
        button10.setChecked(checked10);
    }
}));
menuLayout.addView(button10);
 
var b8 = new android.widget.Button(ctx);
            b8.setText("Night");
       b8.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
        Level.setTime(14000)
                }
            }));
            menuLayout.addView(b8);
             
            var b9 = new android.widget.Button(ctx);
            b9.setText("Day");
       b9.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
        Level.setTime(0)
                }
            }));
            menuLayout.addView(b9);
             
var make = new android.widget.TextView(ctx);
            make.setTextSize(25);
            make.setText("Made by KillerBLS");
            make.setGravity(android.view.Gravity.CENTER);
            menuLayout.addView(make);
             
            //����� ������� ������ ������...
 
            menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
             
        }catch(error){
            print("An error occured: " + error);
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
}
 
function attackHook(attacker,victim)
{
if(criticals)
{
Entity.setHealth(victim,0);
} else {
if(regen)
{
Entity.setHealth(attacker,20);
}
}
}
 
function modTick() {
if(onlyday) {
Level.setTime(0)
} else {
if(spammer) {
clientMessage("SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!! SPAM!!");
}
}
}
