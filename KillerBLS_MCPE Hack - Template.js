var GUI;
var menu;
var exitUI;
 
function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
    }
    //Add menu button
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
             var layout = new android.widget.LinearLayout(ctx);
             layout.setOrientation(1);
             var menuBtn = new android.widget.Button(ctx);
             menuBtn.setText('[GUI]');
             menuBtn.setTextColor(android.graphics.Color.RED); //Color
    menuBtn.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    mainMenu();
    exit();
    }
    }));
    layout.addView(menuBtn);
     
    GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
    GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 90, 0);
    }catch(err){
    print('An error occured: ' + err);
    }
    }}));
 
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
    //--------Add Title--------//
    var name = new android.widget.TextView(ctx);
            name.setTextSize(26);
            name.setText("MyHack v1.0");//Title
           name.setTextColor(android.graphics.Color.RED); //Color
            name.setGravity(android.view.Gravity.CENTER);
  
           menuLayout.addView(name);
    //--------Add Buttons-------//
    var button = new android.widget.Button(ctx);
    button.setText('Button');
    button.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    //Your code...
    }
    }));
    menuLayout.addView(button);
     
    var button1 = new android.widget.Button(ctx);
    button1.setText('Button 1');
    button1.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    //Your code...
    }
    }));
    menuLayout.addView(button1);
     
    var button2 = new android.widget.Button(ctx);
    button2.setText('Button 2');
    button2.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    //Your code...
    }
    }));
    menuLayout.addView(button2);
     
    var button3 = new android.widget.Button(ctx);
    button3.setText('Button 3');
    button3.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    //Your code...
    }
    }));
    menuLayout.addView(button3);
     
    //--------Add CheckBox--------//
    var checked4 = false; //Nice
    var button4 = new android.widget.CheckBox(ctx);
    button4.setText('Button 4');
    button4.setChecked(checked4);
    button4.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    if(!checked4){
    checked4 = true;
    //Your code
    }else{
    checked4 = false;
    //Your code
    }
    button4.setChecked(checked4);
    }
    }));
    menuLayout.addView(button4);
     
    var checked5 = false;
    var button5 = new android.widget.CheckBox(ctx);
    button5.setText('Button 5');
    button5.setChecked(checked5);
    button5.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    if(!checked5){
    checked5 = true;
    //Your code
    }else{
    checked5 = false;
    //Your code
    }
    button5.setChecked(checked5);
    }
    }));
    menuLayout.addView(button5);
     
    //More buttons...
    menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
    menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
    menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
    }catch(error){
    print('An error occured: ' + error);
    }
    }}));
    }
    //Exit button
function exit(){
    var ctxe = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctxe.runOnUiThread(new java.lang.Runnable({ run: function(){
    try{
    var xLayout = new android.widget.LinearLayout(ctxe);
    var xButton = new android.widget.Button(ctxe);
    xButton.setText('X');//Text
    xButton.setTextColor(android.graphics.Color.WHITE);
    xButton.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
    exitUI.dismiss(); //Close
    menu.dismiss(); //Close
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
 
//End
