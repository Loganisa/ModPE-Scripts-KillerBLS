var blood = "Big Base64 code...";

var GUI0;
var GUI1;
var GUI2;
var GUI3;
 
var AUTHOR = "KillerBLS & ZmeY2100";
var MODNAME = "Realistic Blood Mod";
var VERSION = "1.0 Alpha";
 
var split = " ";
 
function newLevel(){
clientMessage(ChatColor.DARK_RED + MODNAME + split + "by" + split + AUTHOR + "\n" + ChatColor.DARK_RED + "Version:" + split + VERSION);
}
 
function attackHook(attacker,victim)
{
var mob = victim;
 
Level.addParticle(ParticleType.redstone,Entity.getX(mob),Entity.getY(mob)+1.1,Entity.getZ(mob),0,0,0,2);
 
Level.addParticle(ParticleType.redstone,Entity.getX(mob)-0.5,Entity.getY(mob)+1,Entity.getZ(mob),0,0,0,2);
 
Level.addParticle(ParticleType.redstone,Entity.getX(mob)+0.5,Entity.getY(mob)+1,Entity.getZ(mob),0,0,0,2);
 
Level.addParticle(ParticleType.redstone,Entity.getX(mob),Entity.getY(mob)+1,Entity.getZ(mob)+0.5,0,0,0,2);
 
Level.addParticle(ParticleType.redstone,Entity.getX(mob),Entity.getY(mob)+1,Entity.getZ(mob)-0.5,0,0,0,2);
}
 
var min = 0;
var light = 0;
var med = 0;
var max = 0;
 
function modTick()
{
if(Entity.getHealth(getPlayerEnt())==20)
{
min = 0;
light = 0;
med = 0;
max = 0;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    if(GUI0!=null)
    {
    GUI0.dismiss();
    }
    if(GUI1!=null)
    {
    GUI1.dismiss();
    }
    if(GUI2!=null)
    {
    GUI2.dismiss();
    }
    if(GUI3!=null)
    {
    GUI3.dismiss();
    }
    }
    }));
}
if(Entity.getHealth(getPlayerEnt())==19)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==18)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==17)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==16&&min==0)
{
minBlood();
min = 1;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==15)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==14)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==13)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==12)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==11)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==10&&light==0)
{
lightBlood();
light = 1;
min = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==9)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==8)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==7)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==6&&med==0)
{
medBlood();
med = 1;
min = 0;
light = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==5)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==4)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==3)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
if(Entity.getHealth(getPlayerEnt())==2&&max==0)
{
maxBlood();
max = 1;
min = 0;
light = 0;
med = 0;
}
if(Entity.getHealth(getPlayerEnt())==1)
{
min = 0;
light = 0;
med = 0;
max = 0;
}
}
 
function minBlood()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    if(GUI0!=null)
    {
    GUI0.dismiss();
    }
    if(GUI1!=null)
    {
    GUI1.dismiss();
    }
    if(GUI2!=null)
    {
    GUI2.dismiss();
    }
    if(GUI3!=null)
    {
    GUI3.dismiss();
    }
    }
    }));
     var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
             
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI2 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
}
 
function lightBlood()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    if(GUI0!=null)
    {
    GUI0.dismiss();
    }
    if(GUI1!=null)
    {
    GUI1.dismiss();
    }
    if(GUI2!=null)
    {
    GUI2.dismiss();
    }
    if(GUI3!=null)
    {
    GUI3.dismiss();
    }
    }
    }));
     var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI3 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
     var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
             
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI2 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
}
 
function medBlood()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    if(GUI0!=null)
    {
    GUI0.dismiss();
    }
    if(GUI1!=null)
    {
    GUI1.dismiss();
    }
    if(GUI2!=null)
    {
    GUI2.dismiss();
    }
    if(GUI3!=null)
    {
    GUI3.dismiss();
    }
    }
    }));
     var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI1 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
 
     var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI3 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
             
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI2 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
}
 
function maxBlood()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    if(GUI0!=null)
    {
    GUI0.dismiss();
    }
    if(GUI1!=null)
    {
    GUI1.dismiss();
    }
    if(GUI2!=null)
    {
    GUI2.dismiss();
    }
    if(GUI3!=null)
    {
    GUI3.dismiss();
    }
    }
    }));
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI0 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI0.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI0.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI1 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI3 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
             
var image = android.util.Base64.decode(blood, 0); 
var img = new android.widget.ImageView(ctx);
            img.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(image, 0, image.length));
layout.addView(img);
 
            GUI2 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
}
