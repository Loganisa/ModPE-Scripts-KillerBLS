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
var EditText = android.widget.EditText;
var CompoundButton = android.widget.CompoundButton;
var SeekBar = android.widget.SeekBar;
var ProgressBar = android.widget.ProgressBar;
var ToggleButton = android.widget.ToggleButton;
var Toast = android.widget.Toast;
var FrameLayout = android.widget.FrameLayout;

//Graphics and View
var Typeface = android.graphics.Typeface;
var Color = android.graphics.Color;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Gravity = android.view.Gravity;
var BitmapFactory = android.graphics.BitmapFactory;
var ViewGroup = android.view.ViewGroup;
var GradientDrawable = android.graphics.drawable.GradientDrawable;
var Bitmap = android.graphics.Bitmap;
var Canvas = android.graphics.Canvas;
var Paint = android.graphics.Paint;
var Path = android.graphics.Path;
var LinearGradient = android.graphics.LinearGradient;
var Shader = android.graphics.Shader;
var MotionEvent = android.view.MotionEvent;
var PorterDuff = android.graphics.PorterDuff;
var BitmapDrawable = android.graphics.drawable.BitmapDrawable;
var StateListDrawable = android.graphics.drawable.StateListDrawable;
var ViewTreeObserver = android.view.ViewTreeObserver;
var TranslateAnimation = android.view.animation.TranslateAnimation;
var Animation = android.view.animation.Animation;
var ClipDrawable = android.graphics.drawable.ClipDrawable;
var LightingColorFilter = android.graphics.LightingColorFilter;

//Other
var Environment = android.os.Environment;
var File = java.io.File;
var FileOutputStream = java.io.FileOutputStream;
var Runnable = java.lang.Runnable;
var Base64 = android.util.Base64;
var AlertDialog.Builder = android.app.AlertDialog.Builder;
var DialogInterface = android.content.DialogInterface;
var DataOutputStream = java.io.DataOutputStream;
var BufferedReader = java.io.BufferedReader;
var Thread = java.lang.Thread;
var TypedValue = android.util.TypedValue;
var Byte = java.lang.Byte;
var Context = android.content.Context;
var Handler = android.os.Handler;
var TextWatcher = android.text.TextWatcher;
var FileWriter = java.io.FileWriter;
var InputStreamReader = java.io.InputStreamReader;
var SpannableStringBuilder = android.text.SpannableStringBuilder;
var ImageSpan = android.text.style.ImageSpan;
var Spannable = android.text.Spannable;
var StringBuffer = java.lang.StringBuffer;
var Html = android.text.Html;
var ZipFile = java.util.zip.ZipFile;
var ByteBuffer = java.nio.ByteBuffer;
var MediaPlayer = android.media.MediaPlayer;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;

//Web
var URL = java.net.URL;
var WebView = android.webkit.WebView;
var MalformedURLException = java.net.MalformedURLException;

//BlockLauncher and Mozilla JavaScript
var ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;
var Utils = net.zhuoweizhang.mcpelauncher.Utils;
var PatchManager = net.zhuoweizhang.mcpelauncher.PatchManager;
var ScriptableObject = org.mozilla.javascript.ScriptableObject;



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
