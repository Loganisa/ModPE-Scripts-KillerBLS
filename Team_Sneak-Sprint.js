var sneak=false;
var guictx = new Array(1000);
var newgui = new Array(1000);
var guibutton = new Array(1000);
var screenx = 1280;
var screeny = 720;
var textsize = 18;
var guiremoved = true;

var buttonsize = 1;
var buttonposition = 1;
var digui = null;
var Xpos=0;
var Zpos=0;
var i=1;
var Xdiff=0;
var Zdiff=0;
var sprint =false;

function getscreensize ()
{
	var screenres = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	screenres.runOnUiThread(new java.lang.Runnable({run: function(){
	screenx = screenres.getWindowManager().getDefaultDisplay().getWidth();
	screeny = screenres.getWindowManager().getDefaultDisplay().getHeight();
	}}));	
}

function dip2px(ctx, dips)
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function makeGui(gui, text, sizex, sizey, posx, posy, left, top, colour, buttonfunction)
{
	guictx[gui] =
		com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	guictx[gui].runOnUiThread(new java.lang.Runnable({run: function(){
			try
			{
				var layout = new android.widget.
				RelativeLayout(guictx  [gui]);
				if (text.equals(""))
				{
				}
				else
			    {
					guibutton[gui] = new android.widget.Button(guictx[gui]);
					guibutton [gui].setTextSize (18 / ((1280 / screenx) / (textsize / 18)));
			    	guibutton[gui].setText(text);
					if (buttonfunction != 0)
					{
						guibutton[gui].setOnClickListener(new android.view.View.OnClickListener ({onClick: function(viewarg){
							clicklazy(buttonfunction,gui);
						        }
					}
					 ));
					 }
					layout.addView(guibutton [gui]);
					}
					newgui[gui] = new android.widget.PopupWindow(layout,dip2px (guictx [gui], 48), dip2px (guictx [gui],48));
			    	if (colour == 1)
					{
						newgui[gui].setBackgroundDrawable (new android.graphics.drawable.ColorDrawable (android.graphics.Color.BLUE));
					}
					else
			    	if (colour == 2)
					{
				    	newgui[gui].
						setBackgroundDrawable
						(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
					}
					else
			    	if (colour == 3)
					{
				    	newgui[gui].
						setBackgroundDrawable
						(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
					}
					else
					{
						newgui[gui].setBackgroundDrawable (new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
					}
					var flags;
				    var bx = 0;
					var by = 0;
					if (left == 1 && top == 1)
					{
						flags = android.view.Gravity.TOP | android.view.Gravity.LEFT;
				    	bx = dip2px(guictx[gui], posx);
						by = dip2px(guictx[gui],posy);
					}
					else
					if (left == 1 && top == 0)
					{
						flags =
						android.view.Gravity.BOTTOM | android.view.Gravity.LEFT;
						bx = dip2px(guictx[gui], posx);
						by = dip2px(guictx[gui], posy);
					}
					else
					if (left == 0 && top == 1)
					{
						flags = android.view.Gravity.TOP | android.view.Gravity.RIGHT;
						bx = dip2px(guictx[gui], posx);
						by = dip2px(guictx[gui], posy);
					}
					else
					{
						flags = android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT;
						bx = dip2px(guictx[gui], posx);
				    	by = dip2px(guictx[gui], posy);
				    }
				    bx /= (1280 / screenx);
				    by /= (720 / screeny);
			    	newgui[gui].setWidth(dip2px (guictx[gui], sizex)); 
			    	newgui[gui].setHeight(dip2px (guictx[gui], sizey));
					newgui[gui].showAtLocation(guictx [gui].getWindow ().getDecorView (), flags, bx, by);
			}
		    catch(err)
			{
				print ("Failed to show button.");
			}
			}}));
}

function deleteGui(gui)
{
	guictx[gui] =
		com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	guictx[gui].runOnUiThread(new java.lang.Runnable(
														{
	  run:												function()
														{
														if (newgui[gui] !=
															null)
														{
														newgui[gui].dismiss();
														newgui[gui] = null;}
														}
														}
							  ));
}
function clicklazy(buttonfunction, gui)
{
	switch (buttonfunction)
	{
	case 1:					if(sneak == false)
					{
						sneak = true;
						clientMessage("Sneak on");
						Entity.setSneaking(getPlayerEnt(), true);
					}
					else if(sneak == true)
					{
						sneak = false;
						clientMessage("Sneak off");
						Entity.setSneaking(getPlayerEnt(),false);
					}
		break;
case 2:
if(sprint == false)
					{
   sprint = true;   
clientMessage("Sprint on");
				}
else if(sprint == true)
					{
sprint = false;
clientMessage("Sprint off");				}
break;
}
}
function newLevel()
{
makeGui (1, "Sneak", 80, 40, 0, 80, 0, 0, 0, 1);
makeGui (2, "Sprint", 90, 50, 0, 0, 0, 0, 0, 2);
}
function leaveGame()
{
deleteGui (1);
deleteGui (2);
}

function modTick()
{
if(sprint == true)
{
if(i==1)
      {
        Xpos=getPlayerX();
        Zpos=getPlayerZ();
        i = i + 1;
      }
      else if(i==3)
      {
        i=1;
        Xdiff=getPlayerX()-Xpos;
        Zdiff=getPlayerZ()-Zpos;
        setVelX(getPlayerEnt(),Xdiff);
        setVelZ(getPlayerEnt(),Zdiff);
        Xdiff=0;
        Zdiff=0;
      }
  if(i!=1)
  {
  i = i + 1;
  }
}
}
