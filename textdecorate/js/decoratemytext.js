window.onload = function () {
    var textArea = document.getElementById("tAreaDec");
    var btnDec = document.getElementById("btnDec");
    var btnIA = document.getElementById("btnIA");
    var btnMal = document.getElementById("btnMal");
    var checkBox = document.getElementById("chBox");

    textArea.style.fontSize = '12pt';

    function increaseSize() {
        let size = parseInt(textArea.style.fontSize);
        size += 2;
        textArea.style.fontSize = size + 'pt';
    }

    function isVowel(x) {
        var result;
        result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U"
            || x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
        return result;
    }

    btnDec.onclick = function changeSize() {
        setInterval(increaseSize, 500);
    };
    btnIA.onclick = function pigLatin() {
        let words = textArea.value.split(' ');
        let newwords = '';
        words.forEach(word => {
            if(isVowel(word.charAt(0))){
                newwords+=word.substring(1,word.length) + "ay" + ' ';
            }
            else{
                newwords+=word.substring(1,word.length) + word.substring(0,1) + "ay" + ' ';
            }
        });
        textArea.value=newwords;
    };
    btnMal.onclick = function malco() {
        let words = textArea.value.split(' ');
        let newwords = '';
        words.forEach(word => {
            if(word.length >= 5){
                newwords+='Malkovitch ';
            }
            else{
                newwords+=word + ' ';
            }
        });
        textArea.value=newwords;
    };
    checkBox.onchange = function changeWeight() {
        if (checkBox.checked == true) {
            textArea.style.fontWeight = 'bold';
            textArea.style.textDecoration = 'underline';
            textArea.style.color = "green";
            document.getElementById('body').style.backgroundImage = "url('https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        } else {
            textArea.style.fontWeight = 'normal';
            textArea.style.textDecoration = 'none';
            textArea.style.color = 'black';
            document.getElementById('body').style.backgroundImage = "none";
        }
    }
};