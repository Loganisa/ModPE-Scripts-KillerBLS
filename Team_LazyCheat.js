var Option = {NAME: "name"};

function getOptionAttr(attr){
var sdcard = android.os.Environment.getExternalStorageDirectory();
var mcpeDir = new java.io.File(sdcard.getAbsolutePath(), "games/com.mojang/");
var optionsDir = new java.io.File(mcpeDir, "minecraftpe/");
var optionsFile = new java.io.File(optionsDir, "options.txt");
var br = new java.io.BufferedReader(new java.io.FileReader(optionsFile));
var str, prop;
var ln = new Array();

while((str = br.readLine()) != null){

ln.push(str);

}

i = ln.join().replace(",", ":");
prop = i.split(":");

return prop[prop.indexOf(attr) + 1];

}

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
var Ypos=0;
var Zpos=0;
var i=1;
var e=1;
var Xdiff=0;
var Ydiff=0;
var Zdiff=0;
var sprint =false;
var br =false;
var sup =false;
var w=0;
var menu=false;
var nuker=false;
var nofail=false;


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
						print ("Shift on");
						Entity.setSneaking(getPlayerEnt(), true);
					}
					else if(sneak == true)
					{
						sneak = false;
						print ("Shift off");
						Entity.setSneaking(getPlayerEnt(),false);
					}
		break;
case 2:
if(sprint == false)
					{
   sprint = true;   
    print ("Speed on");
				}
else if(sprint == true)
					{
sprint = false;
    print ("Speed off");				}
break;
case 3:
if(sup == false)
					{
   sup = true;   
    print ("SuperJump on");
				}
else if(sup == true)
					{
sup = false;
    print ("SuperJump off");				}
break;
case 4:
if(br == false)
					{
   br = true;   
Block.setLightLevel(0, 15);
    print ("FullBright on");
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
else if(br == true)
					{
br = false;
Block.setLightLevel(0, 0);
Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ(),1);
Level.setTile(getPlayerX()-1, getPlayerY(), getPlayerZ(),1);
Level.setTile(getPlayerX()+1, getPlayerY(), getPlayerZ(),1);
Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ()+1,1);
Level.setTile(getPlayerX(), getPlayerY(), getPlayerZ()-1,1);	
    print ("FullBright off");
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX()-1, getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX()+1, getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ()+1);
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ()-1);	
			}
break;
case 5:
if(nofail == false)
		{	
nofail=true;		
Player.setHealth(30000);
    print ("GodMod on"); 
}
else if(nofail == true)
					{

nofail = false;
Player.setHealth(20);
    print ("GodMod off"); 		}
break;
case 6:
makeGui (1, "Shift", 100, 40, 0, 160, 0, 0, 0, 1);
makeGui (2, "Speed", 100, 50, 0, 0, 0, 0, 0, 2);
makeGui (7, "2", 120, 70, 0, 240, 0, 0, 0, 7);
makeGui (8, "Nuker", 80, 70, 0, 80, 0, 0, 0, 8);
deleteGui (6);
break;
case 7:
deleteGui (1);
deleteGui (2);
deleteGui (3);
deleteGui (4);
deleteGui (5);
deleteGui (6);
deleteGui (7);
deleteGui (8);
makeGui (9, "Cancel", 120, 70, 0, 240, 0, 0, 0, 9);
makeGui (3, "SuperJump", 120, 60, 0, 0, 0, 0, 0, 3);
makeGui (4, "FullBrignt", 120, 70, 0, 80, 0, 0, 0, 4);
makeGui (5, "GodMod", 100, 50, 0, 160, 0, 0, 0, 5);
break;
case 8:
if(nuker == false)
					{
   nuker = true;   
    print ("Nuker on");
				}
else if(nuker == true)
					{
nuker = false;
    print ("Nuker off");				}
break;
case 9:
deleteGui (1);
deleteGui (2);
deleteGui (3);
deleteGui (4);
deleteGui (5);
deleteGui (7);
deleteGui (8);
deleteGui (9);
makeGui (6, "Menu", 120, 70, 0, 0, 0, 0, 0, 6);
break;
}
}
function newLevel()
{
clientMessage("Welcome, " + ChatColor.GREEN + getOptionAttr("mp_username") + ChatColor.WHITE + "!");
makeGui (6, "Menu", 120, 70, 0, 0, 0, 0, 0, 6);
}
function leaveGame()
{
deleteGui (1);
deleteGui (2);
deleteGui (3);
deleteGui (4);
deleteGui (5);
deleteGui (6);
deleteGui (7);
deleteGui (8);
deleteGui (9);
} 


function modTick()
{
nuke();
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
if(sup == true)
{
if(e==1)
      {
        Ypos=getPlayerY();
        
        e = e + 1;
      }
      else if(e==3)
      {
        e=1;
        Ydiff=getPlayerY()-Ypos;setVelY(getPlayerEnt(),Ydiff);
        
        Ydiff=0;
        
      }
  if(e!=1)
  {
  e= e+ 1;
  }
}

}
function nuke()
{
if(nuker==true)
{

Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX()-1, getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX()+1, getPlayerY(), getPlayerZ());
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ()+1);
Level.destroyBlock(getPlayerX(), getPlayerY(), getPlayerZ()-1);
Level.destroyBlock(getPlayerX(), getPlayerY()-1, getPlayerZ());
Level.destroyBlock(getPlayerX()-1, getPlayerY()-1, getPlayerZ());
Level.destroyBlock(getPlayerX()+1, getPlayerY()-1, getPlayerZ());
Level.destroyBlock(getPlayerX(), getPlayerY()-1, getPlayerZ()+1);
Level.destroyBlock(getPlayerX(), getPlayerY()-1, getPlayerZ()-1);

}
}

 function attackHook(attacker, victim)
{

var x = Entity.getX(victim);
var y = Entity.getY(victim);
var z = Entity.getZ(victim);

setTile(x, y+1, z, 11);
{

Level.destroyBlock(x, y+1, z, false)
}

}

function procCmd(cmd) {
	if(cmd == "day") { 
		Level.setTime(0); 
	} else if (cmd == "night") { 
		Level.setTime(14000); 
	} 
	else if(cmd == "survival") { 
		Level.setGameMode(0); 
	} else if (cmd == "creative") { 
		Level.setGameMode(1); 
	}
	else if(cmd == "heal") { 
		Player.setHealth(20); 
	}
}
