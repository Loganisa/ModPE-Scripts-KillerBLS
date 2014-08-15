var GUI;
var t = false;
var u = false;
var d = false;
var f = false;
var b = false;
var l = false;
var r = false;
var tick = false;
var mob;
 
//U D F B L R
 
function newLevel(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var button = new android.widget.Button(ctx);
            button.setText("U");
            button.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function(view, event){
                    switch(event.getAction()){
                        case 0:
                            u = true;
                                                       d = false;
                            f = false;
                            b = false;
                            l = false;
                            r = false;
                            break;
                        case 1:
                            u = false;
                            break;
                    }
                    return true;
                }
            }));
            layout.addView(button);
 
 
 
 
            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("Error: " + err);
        }
    }}));
     
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
                        var button1 = new android.widget.Button(ctx);
            button1.setText("D");
            button1.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function(view, event){
                    switch(event.getAction()){
                        case 0:
                            u = false;
                                                       d = true;
                            f = false;
                            b = false;
                            l = false;
                            r = false;
                            break;
                        case 1:
                            d = false;
                            break;
                    }
                    return true;
                }
            }));
            layout.addView(button1);
 
 
 
 
            GUI1 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 80);
        }catch(err){
            print("Error: " + err);
        }
    }}));
     
            var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
var button2 = new android.widget.Button(ctx);
            button2.setText("F");
            button2.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function(view, event){
                    switch(event.getAction()){
                        case 0:
                            u = false;
                                                       d = false;
                            f = true;
                            b = false;
                            l = false;
                            r = false;
                            break;
                        case 1:
                            f = false;
                            break;
                    }
                    return true;
                }
            }));
            layout.addView(button2);
 
 
 
 
            GUI2 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 150);
        }catch(err){
            print("Error: " + err);
        }
    }}));
     
                var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
    var button3 = new android.widget.Button(ctx);
            button3.setText("B");
            button3.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function(view, event){
                    switch(event.getAction()){
                        case 0:
                            u = false;
                                                       d = false;
                            f = false;
                            b = true;
                            l = false;
                            r = false;
                            break;
                        case 1:
                            b = false;
                            break;
                    }
                    return true;
                }
            }));
            layout.addView(button3);
 
 
 
 
            GUI3 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 220);
        }catch(err){
            print("Error: " + err);
        }
    }}));
     
                    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
var button4 = new android.widget.Button(ctx);
            button4.setText("L");
            button4.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function(view, event){
                    switch(event.getAction()){
                        case 0:
                            u = false;
                                                       d = false;
                            f = false;
                            b = false;
                            l = true;
                            r = false;
                            break;
                        case 1:
                            l = false;
                            break;
                    }
                    return true;
                }
            }));
            layout.addView(button4);
 
 
 
 
            GUI4 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 290);
        }catch(err){
            print("Error: " + err);
        }
    }}));
     
                        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
var button5 = new android.widget.Button(ctx);
            button5.setText("R");
            button5.setOnTouchListener(new android.view.View.OnTouchListener({
                onTouch: function(view, event){
                    switch(event.getAction()){
                        case 0:
                            u = false;
                                                       d = false;
                            f = false;
                            b = false;
                            l = false;
                            r = true;
                            break;
                        case 1:
                            r = false;
                            break;
                    }
                    return true;
                }
            }));
            layout.addView(button5);
 
 
 
 
            GUI5 = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 360);
        }catch(err){
            print("Error: " + err);
        }
    }}));
    }
 
function attackHook(attacker,victim)
{
preventDefault();
rideAnimal(attacker,victim);
t = true;
tick = true;
mob = victim;
}
 
function modTick()
{
if(tick==true)
{
if(t==true&&u==true)
{
setVelY(mob,0.5);
}
if(t==true&&d==true)
{
setVelY(mob,-0.5);
}
if(t==true&&f==true)
{
setVelZ(mob,0.5);
setVelY(mob,0.01);
}
if(t==true&&b==true)
{
setVelZ(mob,-0.5);
setVelY(mob,0.01);
}
if(t==true&&l==true)
{
setVelX(mob,0.5);
setVelY(mob,0.01);
}
if(t==true&&r==true)
{
setVelX(mob,-0.5);
setVelY(mob,0.01);
}
if(r==false&&f==false&&l==false&&b==false&&d==false&&u==false)
{
setVelX(mob,0);
setVelY(mob,0);
setVelZ(mob,0);
}
}
}
 
function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
        }
                if(GUI1 != null){
            GUI1.dismiss();
            GUI1 = null;
        }
                if(GUI2 != null){
            GUI2.dismiss();
            GUI2 = null;
        }
                if(GUI3 != null){
            GUI3.dismiss();
            GUI3 = null;
        }
                if(GUI4 != null){
            GUI4.dismiss();
            GUI4 = null;
        }
                if(GUI5 != null){
            GUI5.dismiss();
            GUI5 = null;
        }
    }}));
}
