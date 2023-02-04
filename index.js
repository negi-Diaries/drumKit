console.log("this is working");

let drums = document.querySelectorAll('.drum');

for(let i=0; i < drums.length; i++){
    drums[i].addEventListener('click', ()=>{
         let buttonElement = drums[i].innerHTML;
         makeSound(buttonElement);
         buttonAnimation(buttonElement);
    })
}

document.addEventListener('keydown', (event)=>{
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            let audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;      

        case "a":
            let audio1 = new Audio('sounds/kick-bass.mp3')     
            audio1.play();
            break;
        case "s":
            let audio2 = new Audio('sounds/snare.mp3')     
            audio2.play();
            break;
        case "d":
            let audio3 = new Audio('sounds/tom-1.mp3')    
            audio3.play();
            break;
        case "j":
            let audio4 = new Audio('sounds/tom-2.mp3')    
            audio4.play();
            break;
        case "k":
            let audio5 = new Audio('sounds/tom-3.mp3')    
            audio5.play();
            break;
        case "l":
            let audio6 = new Audio('sounds/tom-4.mp3')    
            audio6.play();
            break;

        default:
            console.log(buttonElement);
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
    
}







//  let w = document.querySelector('.w');
//  let a = document.querySelector('.a')
//  let s = document.querySelector('.s')
//  let d = document.querySelector('.d');
//  let j = document.querySelector('.j');
//  let k = document.querySelector('.k');
//  let l = document.querySelector('.l');
//  console.log(w,a,s,d,j,k,l);

//  w.addEventListener('click', ()=>{
//     let audio = new Audio('sounds/crash.mp3')
//     audio.play();
//  });

//  a.addEventListener('click', ()=>{
//     let audio1 = new Audio('sounds/kick-bass.mp3')
//     audio1.play();
//  })
// s.addEventListener('click', ()=>{
//     let audio2 = new Audio('sounds/snare.mp3')
//     audio2.play();
// })
// d.addEventListener('click', ()=>{
//     let audio3 = new Audio('sounds/tom-1.mp3')
//     audio3.play();
// })
// j.addEventListener('click', ()=>{
//     let audio4 = new Audio('sounds/tom-2.mp3')
//     audio4.play();
// })
//  k.addEventListener('click', ()=>{
//     let audio5 = new Audio('sounds/tom-3.mp3')
//     audio5.play();
//  })
// l.addEventListener('click', ()=>{
//     let audio6 = new Audio('sounds/tom-4.mp3')
//     audio6.play();
// })
