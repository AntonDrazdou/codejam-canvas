
let canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

canvas.width = 512;
canvas.height = 512;

ctx.fillStyle = '#00000f';
ctx.fillRect(0, 0, 512, 512);

let tool4x4 = document.querySelector('.circle_button_4x4');
tool4x4.addEventListener('click', () => {
let arr = [];
    fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
    .then(response => response.json())
    .then(result => arr = result)
    .then(result => Draw1(result));


let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d'); 
canvas.width = 512;
canvas.higth = 512;
function Draw1(){
    for (let i = 0; i < arr.length; i++) {
     for (let u = 0; u < arr.length; u++) {
        context.fillStyle = `#${arr[i][u]}`;
        context.fillRect(i*128, u*128, 128, 128);
     }
}
}
});

let tool32x32 = document.querySelector('.circle_button_32x32');
tool32x32.addEventListener('click', () => {
let arr1 = [];
    fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
    .then(response => response.json())
    .then(result => arr1 = result)
    .then(result => Draw2(result));


let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d'); 
canvas.width = 512;
canvas.higth = 512;
function Draw2(){
    for (let i = 0; i < arr1.length; i++) {
        for (let u = 0; u < arr1.length; u++) {
            context.fillStyle = `rgba(${arr1[i][u]})`;
            context.fillRect(i*32/2, u*32/2, 32, 32);
                 }
         }
}
});
let titleElem = document.querySelector('.circle_button_Image');
                    titleElem.addEventListener('click', () => {
                        canvas.width = 512;
                        canvas.height = 512;
                        let img = new Image();
                        img.onload = function () {
                        ctx.drawImage(img, img.width / 2, img.height / 2);
                        };
                        img.src = 'img/rsscool.jpg';
                                        })

