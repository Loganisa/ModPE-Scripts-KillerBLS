/*Made by KillerBLS*/

var GUI;
var zoom = 20;
var zoomst = 70;
var GUI2;

function newLevel(){
	clientMessage(ChatColor.GOLD + " OptifinePE" + ChatColor.GRAY + " Mod by " + ChatColor.RED + "KillerBLS");
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout2 = new android.widget.LinearLayout(ctx);
            layout2.setOrientation(1);
            
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
            
            var button2 = new android.widget.Button(ctx);
            button2.setText("Options");
            button2.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
            	
            	var alert = new android.app.AlertDialog.Builder(ctx); 
            	alert.setTitle("Options"); 

            	var scroll = new android.widget.ScrollView(ctx); 
            	var layout3 = new android.widget.LinearLayout(ctx); 
            	layout3.setOrientation(1);

            	var note = new android.widget.TextView(ctx); 
            	note.setText(" Small Zoom <--> Large Zoom"); 
            	note.setTextColor(android.graphics.Color.WHITE);
            	note.setTextSize(18); 
            	
            	var sbpProgress = 0;
            	var sbp = new android.widget.SeekBar(ctx);
            	sbp.setMax(7);
            	sbp.setProgress(sbpProgress);
            	sbp.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
            	{  
            	onStopTrackingTouch: function(view)
            	{
            	sbpProgress=sbp.getProgress();
            	if(sbpProgress==0)
            	{
            	zoom = 70;
            	}
            	if(sbpProgress==1)
            	{
            	zoom = 60;
            	}
            	if(sbpProgress==2)
            	{
            	zoom = 50;
            	}
            	if(sbpProgress==3)
            	{
            	zoom = 40;
            	}
            	if(sbpProgress==4)
            	{
                zoom = 30;
            	}
            	if(sbpProgress==5)
            	{
                zoom = 20;
            	}
            	if(sbpProgress==6)
            	{
                zoom = 10;
            	}
            	if(sbpProgress==7)
            	{
                zoom = 5;
            	}
            	}  
            	});
            	layout3.addView(sbp);

            	var params = new android.view.ViewGroup.LayoutParams(-2,-2); 

            	layout3.addView(note,params); 

            	alert.setView(layout3); 

            	alert.setPositiveButton("Save Options", new android.content.DialogInterface.OnClickListener(){ 
            	  onClick: function(viewarg){
            		clientMessage("The settings are saved!");
            	      }});

            	var dialog = alert.create();
            	dialog.show();
            	
                }
            }));
            layout2.addView(button2);
            
            var checked = false;
            var button = new android.widget.CheckBox(ctx);
            button.setText("Zoom");
            button.setChecked(checked);
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(!checked){
                        checked = true;
                        ModPE.setFov(zoom.toString())
                    }else{
                        checked = false;
                        ModPE.setFov(zoomst.toString())
                    }
                    button.setChecked(checked);
                }
            }));
            layout.addView(button);

            GUI2 = new android.widget.PopupWindow(layout2, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 5, 40);
            
            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 5, 5);
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
        } else if(GUI2 != null){
            GUI2.dismiss();
            GUI2 = null;
        }
    }}));
}

Block.defineBlock(2, "Grass",["grass",2],2,5);
