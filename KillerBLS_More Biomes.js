var GUI;
var menu;
var exitUI;
 
function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
 
function newLevel(){
    print("More Biomes v2");
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
            var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("Biomes");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                }
            }));
            layout.addView(menuBtn);
 
            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(err){
            print(" " + err);
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
//Gold
            var checked = false;
var button = new android.widget.CheckBox(ctx);
button.setText("Gold Biome");
button.setChecked(checked);
button.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked){
            checked = true;
            print("Reenter to world");
            print("Reenter to world");
   Block.defineBlock(2, "Grass", ["gold_ore",0],2,5);
   Block.defineBlock(1, "Stone", ["gold_ore",0],1,5);
   Block.defineBlock(3, "Dirt", ["gold_ore",0],3,5);
        }else{
            checked = false;
            print("Canceled");
           Block.defineBlock(2, "Grass", ["grass",3],2,5);
           Block.defineBlock(1,"Stone",["stone",0],1,5);
           Block.defineBlock(3, "Dirt", ["dirt",0],3,5);
        }
    }
}));
menuLayout.addView(button);
 
            //Iron ore
            var checked2 = false;
var button2 = new android.widget.CheckBox(ctx);
button2.setText("Iron Biome");
button2.setChecked(checked2);
button2.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked2){
            checked2 = true;
            print("Reenter to world");
            print("Reenter to world");
            Block.defineBlock(2, "Grass", ["iron_ore",0],2,5);
            Block.defineBlock(1, "Stone", ["iron_ore",0],1,5);
            Block.defineBlock(3, "Dirt", ["iron_ore",0],3,5);
        }else{
            checked2 = false;
            print("Canceled");
            Block.defineBlock(2, "Grass", ["grass",3],2,5);
            Block.defineBlock(1, "Stone", ["stone",0],1,5);
            Block.defineBlock(3, "Dirt", ["dirt",0],3,5);
        }
    }
}));
menuLayout.addView(button2);
 
//Coal
 
var checked3 = false;
var button3 = new android.widget.CheckBox(ctx);
button3.setText("Coal Biome");
button3.setChecked(checked3);
button3.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked3){
            checked3 = true;
            print("Reenter to world");
            print("Reenter to world");
            Block.defineBlock(2, "Grass", ["coal_ore",0],2,5);
            Block.defineBlock(1, "Stone", ["coal_ore",0],1,5);
            Block.defineBlock(3, "Dirt", ["coal_ore",0],3,5);
        }else{
            checked3 = false;
            print("Canceled");
            Block.defineBlock(2, "Grass", ["grass",3],2,5);
            Block.defineBlock(1, "Stone", ["stone",0],1,5);
            Block.defineBlock(3, "Dirt", ["dirt",0],3,5);
        }
    }
}));
menuLayout.addView(button3);
 
//Red Stone
 
var checked4 = false;
var button4 = new android.widget.CheckBox(ctx);
button4.setText("Red Stone Biome");
button4.setChecked(checked4);
button4.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked4){
            checked4 = true;
            print(" Reenter to world");
            print(" Reenter to world ");
            Block.defineBlock(2, "Grass", ["redstone_ore",0],2,5);
            Block.defineBlock(2, "Stone", ["redstone_ore",0],1,5);
            Block.defineBlock(3, "Dirt", ["redstone_ore",0],3,5);
        }else{
            checked4 = false;
            print("Canceled");
            Block.defineBlock(2, "Grass", ["grass",3],2,5);
            Block.defineBlock(1, "Stone", ["stone",0],1,5);
            Block.defineBlock(3, "Dirt", ["dirt",0],3,5);
        }
    }
}));
menuLayout.addView(button4);
 
//Diamond ore
 
var checked6 = false;
var button6 = new android.widget.CheckBox(ctx);
button6.setText("Diamond Biome");
button6.setChecked(checked6);
button6.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked6){
            checked6 = true;
            print(" Reenter to world ");
            print(" Reenter to world ");
            Block.defineBlock(2, "Grass", ["diamond_ore",0],2,5);
            Block.defineBlock(1, "Stone", ["diamond_ore",0],1,5);
            Block.defineBlock(3, "Dirt", ["diamond_ore",0],3,5);
        }else{
            checked6 = false;
            print("Canceled");
            Block.defineBlock(2, "Grass", ["grass",3],2,5);
            Block.defineBlock(1, "Stone", ["stone",0],1,5);
            Block.defineBlock(3, "Dirt", ["dirt",0],3,5);
        }
    }
}));
menuLayout.addView(button6);
 
//Lapis Lazuli
 
var checked7 = false;
var button7 = new android.widget.CheckBox(ctx);
button7.setText("Lapis Lazuli Biome");
button7.setChecked(checked7);
button7.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked7){
            checked7 = true;
            print(" Reenter to world ");
            print(" Reenter to world ");
            Block.defineBlock(2, "Grass", ["lapis_ore",0],2,5);
            Block.defineBlock(1, "Stone", ["lapis_ore",0],1,5);
            Block.defineBlock(3, "Dirt", ["lapis_ore",0],3,5);
        }else{
            checked7 = false;
            print("Canceled");
            Block.defineBlock(2, "Grass", ["grass",3],2,5);
            Block.defineBlock(1, "Stone", ["stone",0],1,5);
            Block.defineBlock(3, "Dirt", ["dirt",0],3,5);
        }
    }
}));
menuLayout.addView(button7);
 
            menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print(" " + error);
        }
    }}));
}
 
function exit(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var xlayout = new android.widget.LinearLayout(ctx);
 
            var xbutton = new android.widget.Button(ctx);
            xbutton.setText("X");
            xbutton.setTextColor(android.graphics.Color.WHITE);
            xbutton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
 
                    exitUI.dismiss();
 
                    menu.dismiss();
                }
            }));
            menuLayout.addView(xbutton);
 
            exitUI = new android.widget.PopupWindow(xlayout, dip2px(40), dip2px(40));
            exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            exitUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
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

