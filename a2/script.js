const $ = document.querySelector.bind(document);

const div1 = $('#div1');
const div2 = $('#div2');
const div3 = $('#div3');
const div4 = $('#div4');
function btn1Clicked(){
    div1.className = 'special';
}
function btn2Clicked(){
    div2.className = 'special super';
}
function btn3Clicked(){
    div3.className = 'color';
}
function btn4Clicked(){
    div4.className = 'color';

}
function btn5Clicked(){
    div5.className = 'color';
}
function btn6Clicked(){
    div5.className = 'back';
}