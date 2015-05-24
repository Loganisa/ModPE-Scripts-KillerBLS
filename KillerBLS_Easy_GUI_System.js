//Activity
var this = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

//Widgets
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var ImageView = android.widget.ImageView;

//Graphics and View
var Typeface = android.graphics.Typeface;
var Color = android.graphics.Color;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Gravity = android.view.Gravity;
var BitmapFactory = android.graphics.BitmapFactory;

//Other
var Environment = android.os.Environment;
var File = java.io.File;
var FileOutputStream = java.io.FileOutputStream;
var Runnable = java.lang.Runnable;
var Base64 = android.util.Base64;

/******************************
***Example - Creating Button***
*******************************/

var GUI;
function newLevel(){
    this.runOnUiThread(new Runnable({ run: function(){
        try{
            var layout = new LinearLayout(this);
            layout.setOrientation(1);

            var button = new Button(this);
            button.setText("Button");
            button.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    //Your Code;
                }
            }));
            layout.addView(button);

            GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            GUI.showAtLocation(this.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
        }catch(err){
            print("An error occured: " + err);
        }
    }}));
}

function leaveGame(){
    this.runOnUiThread(new Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
        }
    }}));
}

/******************************
****Example - Creating Menu****
*******************************/

var GUI;
var menu;
var exitUI;

function dip2px(dips){
    return Math.ceil(dips * this.getResources().getDisplayMetrics().density);
}

function newLevel(){
    this.runOnUiThread(new Runnable({ run: function(){
        try{
            var layout = new LinearLayout(this);
            layout.setOrientation(1);

            var menuBtn = new Button(this);
            menuBtn.setText("Menu");
            menuBtn.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                }
            }));
            layout.addView(menuBtn);

            GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            GUI.showAtLocation(this.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
        }catch(err){
            print("An error occured: " + err);
        }
    }}));
}

function mainMenu(){
    this.runOnUiThread(new Runnable({ run: function(){
        try{
            var menuLayout = new LinearLayout(this);
            var menuScroll = new ScrollView(this);
            var menuLayout1 = new LinearLayout(this);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);

            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);

            var button = new Button(this);
            button.setText("Button");
            button.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    //Your Code
                }
            }));
            menuLayout.addView(button);

            //Add more buttons in this section

            menu = new PopupWindow(menuLayout1, this.getWindowManager().getDefaultDisplay().getWidth()/2, this.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
            menu.showAtLocation(this.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
        }catch(error){
            print("An error occured: " + error);
        }
    }}));
}

function exit(){
    this.runOnUiThread(new Runnable({ run: function(){
        try{
            var xLayout = new LinearLayout(this);
            var xButton = new Button(this);
            xButton.setText("x");
            xButton.setTextColor(Color.WHITE);
            xButton.setOnClickListener(new View.OnClickListener({
                onClick: function(viewarg){
                    exitUI.dismiss();
                    menu.dismiss();
                }
            }));
            xLayout.addView(xButton);

            exitUI = new PopupWindow(xLayout, dip2px(40), dip2px(40));
            exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            exitUI.showAtLocation(this.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
        }catch(exception){
            print(exception);
        }
    }}));
}

function leaveGame(){
    this.runOnUiThread(new Runnable({ run: function(){
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
