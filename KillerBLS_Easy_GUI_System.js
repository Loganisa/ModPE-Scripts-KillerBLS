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
