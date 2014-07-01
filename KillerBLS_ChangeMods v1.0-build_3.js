/*
ChangeMods - this is a great script for Projects MCPE, with it you can make mods for MCPE without knowledge of JavaScript!
At the moment it does not do anything :)
*/

//Copyright(c) ChangeMods by KillerBLS all rights reserved

/*
Благодарность:
RusJJ - За FileLib
BeATz-UnKNoWN - За Alert Dialog Builder
*/
var sdcard = android.os.Environment.getExternalStorageDirectory();
 
var VERSION = "1.0-build_3"
 
var MRes = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftResource/";
 
var Option = {NAME: "name"};
 
function getOptionAttr(attr){
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
 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var File = java.io.File;
var FileReader = java.io.FileReader;
var ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;
var BufferedReader = java.io.BufferedReader;
var FOS = java.io.FileOutputStream;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var MediaPlayer = android.media.MediaPlayer();
 
var file = 
{
    select:function(dir, fileName)
    {
        return (new File(dir, fileName));
    },
    exists:function(selectedFile)
    {
        return selectedFile.exists();
    },
    create:function(selectedFile)
    {
        selectedFile.createNewFile();
        return selectedFile;
    },
    del:function(selectedFile)
    {
        selectedFile.delete();
    },
    read:function(selectedFile)
    {
        var readed = (new BufferedReader(new FileReader(selectedFile)));
        var data = new StringBuilder();
        var string;
        while((string = readed.readLine()) != null)
        {
            data.append(string);
            data.append("\n");
        }
        return data.toString();
    },
    readLine:function(selectedFile, line)
    {
        var readT = new file.read(selectedFile);
        var lineArray = readT.split("\n");
        return lineArray[line - 1];
    },
    readKey:function(selectedFile, key, keySeparator)
    {
        var isText = 0;
        var textR = new file.read(selectedFile);
        var splitTextR = textR.split("\n");
        for(var i = 0; i < splitTextR.length; i++)
        {
            var textRF = splitTextR[i].split(keySeparator);
            if(textRF[0] == key)
            {
                return textRF[1];
                    isText = 1;
                break;
            }
                if(!isText)
                {
                    return "[Unknown]";
                }
        }
    },
    write:function(selectedFile, text)
    {
        file.rewrite(selectedFile, (new file.read(selectedFile)) + text);
    },
    rewrite:function(selectedFile, text)
    {
        var writeFOS = new FOS(selectedFile);
        writeFOS.write(new String(text).getBytes());
    },
    writeKey:function(selectedFile, key, keyText, keySeparator)
    {
        var isText = 0;
        var textR = new file.read(selectedFile);
        var splitTextR = textR.split("\n");
        for(var i = 0; i < splitTextR.length; i++)
        {
            var textRF = splitTextR[i].split(keySeparator);
            if(textRF[0] == key)
            {
                 var splitWithKey = textR.split(key + keySeparator + new file.readKey(selectedFile, key));
                    file.rewrite(selectedFile, splitWithKey[0] + key + keySeparator + keyText + splitWithKey[1]);
                    isText = 1;
                break;
            }
        }
        if(!isText)
        {
            file.write(selectedFile, key + keySeparator + keyText);
        }
    },
    mPlay:function(musicPath)
    {
        MediaPlayer.setDataSource(musicPath);
        MediaPlayer.prepare();
        MediaPlayer.start();
    },
    mStop:function()
    {
        MediaPlayer.reset();
    }
};
 
function modTick()
{
ModPE.showTipMessage("ChangeMods 1.0-build_3");
}
 
function newLevel()
{
var SRes = android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftResource/";
var SC = new file.select(SRes, "ChangeMods.config");
file.create(SC);
var nomedia = new file.select(MRes, ".nomedia");
file.create(nomedia);
var SCText = new file.write(SC, "ChangeMods v1.0-build_3 by KillerBLS;  version = 1.0-build_3; create = true;  change = true; testmode = false;");
clientMessage("Спасибо за использования ChangeMods, " + ChatColor.GREEN + getOptionAttr("mp_username") + ChatColor.WHITE + "!");
clientMessage("Для работы нужен лицензионный ключ, введите его как команду");
}
//93P-6V4-99G-J84
function procCmd(cmd)
{
if(cmd == "93P-6V4-99G-J84")
{
print("Ключ активирован!");
print("Ключ активирован!");
clientMessage("ChangeMods 1.0-build_3 by" + ChatColor.GREEN + " KillerBLS");
var GUI;
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);
 
            var button = new android.widget.Button(ctx);
            button.setText("ChangeMods");
            button.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
var alert = new android.app.AlertDialog.Builder(ctx); 
alert.setTitle("ChangeMods"); 
 
var scroll = new android.widget.ScrollView(ctx); 
var layout = new android.widget.LinearLayout(ctx); 
layout.setOrientation(1);
 
var text = new android.widget.TextView(ctx); 
text.setText("  Напишите путь к папке со скриптом для редактирования, скрипт должен называться FCH1.js"); 
text.setTextColor(android.graphics.Color.WHITE);
text.setTextSize(15);
 
var hidetext = new android.widget.EditText(ctx); 
hidetext.setHint("/mnt/sdcard/..."); 
 
var params = new android.view.ViewGroup.LayoutParams(-2,-2); 
 
layout.addView(text,params); 
layout.addView(hidetext,params);
alert.setView(layout); 
 
alert.setPositiveButton("Редактировать", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
  //Ищем файл
var changepos1 = new file.select(hidetext.getText().toString(), "FCH1.js");
file.read(changepos1);
//Окно для редактирования
 
var alert2 = new android.app.AlertDialog.Builder(ctx); 
alert2.setTitle("ChangeMods"); 
 
var scroll2 = new android.widget.ScrollView(ctx); 
var layout2 = new android.widget.LinearLayout(ctx); 
layout2.setOrientation(1);
 
var note2 = new android.widget.TextView(ctx); 
note2.setText("Выберите функции которые нужно добавить"); 
note2.setTextColor(android.graphics.Color.WHITE);
note2.setTextSize(15);
//Вот сюда уже чекбоксы
 
var checked = false;
var button = new android.widget.CheckBox(ctx);
button.setText("Сообщение в чат 'Привет' при входе а мир");
button.setChecked(checked);
button.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked){
            checked = true;
            file.write(changepos1, "function newLevel() { clientMessage('Привет'); }");
        }else{
            checked = false;
            file.rewrite(changepos1, " ");
        }
    }
}));
//_________
 
var checked2 = false;
var button2 = new android.widget.CheckBox(ctx);
button2.setText("Сообщение в клиенте 'Привет' при входе в мир");
button2.setChecked(checked2);
button2.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked2){
            checked2 = true;
            file.write(changepos1, "function newLevel() { print('Привет'); }");
        }else{
            checked2 = false;
            file.rewrite(changepos1, " ");
        }
    }
}));
//_________
 
var checked3 = false;
var button3 = new android.widget.CheckBox(ctx);
button3.setText("Добавить сообщение 'Привет' на экран (пример у вас над инвентарем)");
button3.setChecked(checked3);
button3.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!checked3){
            checked3 = true;
            file.write(changepos1, "function modTick() { ModPE.showTipMessage('Привет'); }");
        }else{
            checked3 = false;
            file.rewrite(changepos1, " ");
        }
    }
}));
//_________
 
 
//_________
 
var params2 = new android.view.ViewGroup.LayoutParams(-2,-2); 
 
layout2.addView(note2,params2); 
layout2.addView(button,params2);
layout2.addView(button2,params2);
layout2.addView(button3,params2);
 
alert2.setView(layout2); 
 
alert2.setPositiveButton("Применить", new android.content.DialogInterface.OnClickListener(){ 
  onClick: function(viewarg){
//#########
      }});
 
alert2.setNegativeButton("Отменить", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){
   //#########
      }});
 
var dialog2 = alert2.create();
dialog2.show();
 
//-----------
      }});
 
alert.setNegativeButton("Отменить", new android.content.DialogInterface.OnClickListener(){ 
   onClick: function(viewarg){
print("Отменено");
      }});
 
var dialog = alert.create();
dialog.show();
                }
            }));
            layout.addView(button);
 
            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("Ошибка: " + err);
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
    }}));
}
}
