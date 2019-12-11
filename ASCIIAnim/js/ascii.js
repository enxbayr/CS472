window.onload = function () {
    var textArea = document.getElementById("textArea");
    var btnStart = document.getElementById("btnPCSt");
    var btnStop = document.getElementById("btnPCSp");
    var selAnim = document.getElementById("selAnim");
    var selSize = document.getElementById("selSize");
    var chBox = document.getElementById("chBox");

    var selectedAnim = selAnim.options[selAnim.selectedIndex].text;
    var selectedSize = selSize.options[selSize.selectedIndex].text;
    var playingAnim;
    var isPlaying = false;
    var currentFrameID=0;

    var frameSpeed = 250;

    btnStart.onclick = function () {
        btnStart.disabled = true;
        btnStop.disabled = false;
        selAnim.disabled = true;
        isPlaying = true;
        playAnim();
    };
    btnStop.onclick = function () {
        btnStart.disabled = false;
        btnStop.disabled = true;
        selAnim.disabled = false;
        isPlaying = false;
        stopAnim();
    };
    selAnim.onchange = function () {
        selectedAnim = selAnim.options[selAnim.selectedIndex].text;
        currentFrameID=0;
    };
    selSize.onchange = function () {
        let sizes = {"Tiny": "7pt",
                    "Small": "10pt",
                    "Medium": "12pt",
                    "Large": "16pt",
                    "Extra Large": "24pt",
                    "XXL": "32pt"};
        selectedSize = selSize.options[selSize.selectedIndex].text;
        textArea.style.fontSize=sizes[selectedSize];
    };
    chBox.onchange = function () {
        if (chBox.checked == true)
            frameSpeed = 50;
        else
            frameSpeed = 250;
        if(isPlaying==true){
            stopAnim();
            playAnim();
        }
    };
    function setFrame() {
        let frames = ANIMATIONS[selectedAnim].split("=====\n");
        textArea.value = frames[currentFrameID];
        if(currentFrameID==frames.length-1)
            currentFrameID=0;
        else
            currentFrameID++;
    }
    function playAnim() {
        playingAnim = setInterval(setFrame, frameSpeed);
    }

    function stopAnim(){
        clearInterval(playingAnim);
    }
};