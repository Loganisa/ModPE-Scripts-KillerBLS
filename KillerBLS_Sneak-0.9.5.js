var GUI;
 
function newLevel(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
            var btn = new android.widget.Button(ctx);
            btn.setText("Sneak");
            btn.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function(view, event){
                    switch(event.getAction()){
                        case 0:
Entity.setSneaking(getPlayerEnt(),true);
                            break;
                        case 1:
                            Entity.setSneaking(getPlayerEnt(),false);
                            break;
                    }
                    return true;
                }
            }));
            layout.addView(btn);
 
            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 5, 90);
        }catch(err){
            print("An error occured: " + err);
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
