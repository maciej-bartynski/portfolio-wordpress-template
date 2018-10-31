import './canvas.scss';
import TweenMax from 'gsap/TweenMax';

var timelinez = new TimelineMax({repeat:-1});
let allCogs = document.querySelectorAll('.biggest-cog');
for (let i=0; i<allCogs.length; i++) {
    timelinez.to(allCogs[i], i+2, {
        rotation: 360,
        transformOrigin:"50% 50%",
        ease: Back.easeInOut,
        delay: i
    },0);
}

let ecog = document.querySelectorAll('.engine-cog');

let etlok = document.querySelector('.engine-tlok');
let ebelka = document.querySelector('.engine-belt');
let etimeline = new TimelineMax({repeat:-1});

etimeline.to(ecog[0], 3, {
    rotation: 360,
    transformOrigin:"50% 50%",
    ease: Power2.easeInOut,
}, 0);

etimeline.to(ecog[1], 3, {
    rotation: 360,
    transformOrigin:"50% 50%",
    ease: Power2.easeInOut,
}, 0);

etimeline.to(etlok, 1.5, {
    x: -40,
    transformOrigin:"50% 50%",
    ease: Power2.easeIn,
    onComplete: reverseThis
}, 0);

etimeline.to(ebelka, 1.5, {
    y: -80,
    transformOrigin:"50% 50%",
    ease: Power2.easeIn,
    onComplete: reverseThiss
}, 0);

function reverseThis(){
    let tween = TweenMax.to(etlok, 1.5, {
        x: -1,
        transformOrigin:"50% 50%",
        ease: Power2.easeOut,
    });
}

function reverseThiss(){
    let tween = TweenMax.to(ebelka, 1.5, {
        y: 0,
        transformOrigin:"50% 50%",
        ease: Power2.easeOut,
    });
}

