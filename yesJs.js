import anime from "animejs/lib/anime.es.js";

// DOM Manipulations
const container = document.querySelector('.container');

for(let i = 1; i<= 100; i++){
    const hearts = document.createElement('div');
    hearts.classList.add('heart');
    container.appendChild(hearts);
}

const animateNew = ()=>{
    const text = document.querySelectorAll('#RK')[0];
    console.log(text, "-----------> animateNew");
    anime({
        targets: '.heart',
        translateX: function(){
            return anime.random(-700, 700);
        },
        translateY: function(){
            return anime.random(-500, 500);
        },
        rotate: 45,
        scale: function(){
            return anime.random(1, 5);
        },
        easing: 'easeInOutBack',
        // duration: 2500,
        delay: anime.stagger(10),
        // complete: rk,
    }) 
}

const rk = () =>{
    const newElem = document.createElement('img')
    newElem.src="rk.png"
    newElem.id = "RK"
    newElem.style.position = 'absolute'
    newElem.style.top = '20%'
    newElem.style.left='40%'
    document.body.appendChild(newElem)
    animateNew()
}

const animationHearts = () =>{
    anime({
        targets: '.heart',
        translateX: function(){
            return anime.random(-700, 700);
        },
        translateY: function(){
            return anime.random(-500, 500);
        },
        rotate: 45,
        scale: function(){
            return anime.random(1, 5);
        },
        easing: 'easeInOutBack',
        duration: 2500,
        delay: anime.stagger(10),
        complete: rk,
    }) 
    anime({
        targets: '.heart',
        translateX: function(){
            return anime.random(-700, 700);
        },
        translateY: function(){
            return anime.random(-500, 500);
        },
        rotate: 45,
        scale: function(){
            return anime.random(1, 5);
        },
        easing: 'easeInOutBack',
        duration: 2500,
        delay: anime.stagger(10),
        complete: animationHearts,
    }) 
    
};

animationHearts();