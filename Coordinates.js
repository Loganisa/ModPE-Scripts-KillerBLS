var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var textSize = 20;
var countdown = 10;

function newLevel()
{
    ctx.runOnUiThread(new java.lang.Runnable()
    { 
    run: function(){ try{ 
	
	GUI = new android.widget.PopupWindow(); 
	var Layout = new android.widget.GridLayout(ctx); 
          var CorX = new android.widget.TextView(ctx);
var CorXt;
          CorX.setTextSize(textSize);
          var CorY = new android.widget.TextView(ctx);
var CorYt;
          CorY.setTextSize(textSize);
          var CorZ = new android.widget.TextView(ctx);
var CorZt;
          CorZ.setTextSize(textSize);
	
                 Layout.addView(CorX);          
                 Layout.addView(CorY);
                 Layout.addView(CorZ);
         
CorXt = parseInt(getPlayerX()); CorYt = parseInt(getPlayerY());CorZt = parseInt(getPlayerZ());

         CorX.setText(" X: " +CorXt+ " ");
         CorY.setText(" Y: " +CorYt+ " ");
         CorZ.setText(" Z: " +CorZt+ " ");


	  GUI.setContentView(Layout);
	  GUI.setWidth(android.widget.GridLayout.LayoutParams.WRAP_CONTENT);
	  GUI.setHeight(android.widget.GridLayout.LayoutParams.WRAP_CONTENT);	
	GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 64);
	}catch(Problem)
	{
	print("Error: " +Problem);
	}
	}
	});
}
function modTick()
{
countdown--;
if(countdown == 0)
{
leaveGame(); 
newLevel();
countdown = 10;
} 
}
function leaveGame()
{
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){if(GUI != null){ GUI.dismiss(); GUI = null;}}}));	
}
