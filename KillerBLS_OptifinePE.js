/*Made by KillerBLS*/

var GUI;

function newLevel(){
 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
 ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
 try{
 var layout = new android.widget.LinearLayout(ctx);
 layout.setOrientation(1);

var switched = false;
var button = new android.widget.Switch(ctx);
button.setText("Button");
button.setChecked(switched);
button.setOnClickListener(new android.view.View.OnClickListener({
 onClick: function(viewarg){
 if(!switched){
 switched = true;
 ModPE.setFov(20)
 }else{
 switched = false;
 ModPE.setFov(70)
 }
 button.setChecked(switched);
 }
}));
layout.addView(button);

 GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
 GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 5, 65);
 }catch(err){
 print("Error: " + err);
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

Block.defineBlick(2, "Grass",["grass",3],2,5);
