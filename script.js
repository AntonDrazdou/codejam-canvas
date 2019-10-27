// let toolRssImage = document.querySelector('.color_tools_button');
// toolRssImage.addEventListener('click', () => {
//   canvas.width = 512;
//   canvas.height = 512;

//   let img = new Image();

//   img.onload = function () {
//     ctx.drawImage(img, img.width / 2, img.height / 2);
//   };

//   img.src = '/images/canvas/image.png';

// });
//                let titleElem = document.querySelector('.circle_button_4x4');
//                 titleElem.addEventListener('click', () => {
//                     titleElem.classList.toggle('main__click-down');
//                     listElems.classList.toggle('main__collapse-open');
//                 })
//                 let titleElem = document.querySelector('.circle_button_32x32');
//                 titleElem.addEventListener('click', () => {
//                     titleElem.classList.toggle('main__click-down');
//                     listElems.classList.toggle('main__collapse-open');
//                 })
//                 let titleElem = document.querySelector('.circle_button_Image');
//                 titleElem.addEventListener('click', () => {
//                     canvas.width = 512;
//                     canvas.height = 512;
//                     let img = new Image();
//                     img.onload = function () {
//                     ctx.drawImage(img, img.width / 2, img.height / 2);
//                     };
//                     img.src = './img';
//                                     })

// let url1 = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
// let url2 = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';
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



// let arr = [
//   for (let i = 0; i < arr.length; i++) {
//        for (let u = 0; u < arr.length; u++) {
//        context.fillStyle = `rgba(${arr[i][u]})`;
//       context.fillRect(i*32/2, u*32/2, 32, 32);
//         }
//     }
