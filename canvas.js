import './canvas.scss';
import TweenMax, { TimelineMax } from 'gsap/TweenMax';

var EngineTimeline = new TimelineMax({repeat: -1});
var regularCogsTimeline = new TimelineMax({repeat: -1});
var wireCogsTimeline = new TimelineMax({repeat: -1});
var clocksTimeline = new TimelineMax({repeat: -1});
var machinaShake = new TimelineMax({repeat: -1});

//engine
var engineWheel = document.querySelector('#engine-wheel');
var engineInnercorb = document.querySelector('#engine-innercorb');
var engineWheelcorb = document.querySelector('#engine-wheelcorb');
var engineCorbhandler = document.querySelector('#engine-corbhandler');
var engineTlok = document.querySelector('#engine-tlok');
var finalLight = document.querySelector('#final-light');
var drutlight = document.querySelectorAll('.drut');

//small engine

var smallEngCogs = document.querySelectorAll('.small-engine-cog');
var smallEngCorb = document.querySelectorAll('.small-engine-corb');
var smallEngTlok = document.querySelectorAll('.small-engine-tlok');

//clocks
var bigC = document.querySelector('#big-clock');
var smallC = document.querySelector('#small-clock');

//regular cogs
var regCog = document.querySelectorAll('.regular-cog');

//wire-cogs
var wireCogs = document.querySelectorAll('.wire-cog');

//whole machina

var machinaWhole = document.querySelector('#machina-whole');
var machinaCar = document.querySelector('#machina-car');
var machinaGround = document.querySelector('#machina-ground');
var carWheels = document.querySelectorAll('.machina-car-wheel');

//paper plane

var paperPlane = document.querySelector('#paper-plane');
var paperHand = document.querySelector('#paper-hand');
var paperBox = document.querySelector('#paper-box');
var paperContainer = document.querySelector('#paper-container');

//engine

function engineTlokGo(){
    let tween = TweenMax.to(engineTlok, 1.5, {
        x: -20,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

function engineTlokBack(){
    let tween = TweenMax.to(engineTlok, 1.5, {
        x: 0,
        transformOrigin:"50% 50%",
        ease: Power1.easeOut,
    });
    return tween;
}

function engineCorbhandlerGo(){
    let tween = TweenMax.to(engineCorbhandler, 1.5, {
        x: -20,
        transformOrigin:"50% 50%",
        ease: Power1.easeNone,
    });
    return tween;
}

function engineCorbhandlerBack(){
    let tween = TweenMax.to(engineCorbhandler, 1.5, {
        x: 0,
        transformOrigin:"50% 50%",
        ease: Power1.easeOut,
    });
    return tween;
}


function engineWheelA(){
    let tween = TweenMax.to(engineWheel, 3, {
        rotation: 360,
        transformOrigin:"50% 50%",
        ease: Power1.easeInOut,
    });
    return tween;
}

function engineWheelcorbReverse(){
    let tween = TweenMax.to(engineInnercorb,1.5, {
        rotation: -145,
        transformOrigin:"0% 50%",
        ease: Power1.easeIn,
    });
    return tween;
}

function engineWheelcorbReverseB(){
    let tween = TweenMax.to(engineInnercorb,1.5, {
        rotation: -360,
        transformOrigin:"0% 50%",
        ease: Power1.easeOut,
    });
    return tween;
}

function engineWheelcorbDegree(){
    let tween = TweenMax.to(engineWheelcorb, 3, {
        rotation: 360,
        transformOrigin:"5% -190%",
        ease: Power1.easeInOut,
    });
    return tween;
}

EngineTimeline.add(engineWheelA(), 0);
EngineTimeline.add(engineWheelcorbDegree(),0);
EngineTimeline.add(engineCorbhandlerGo(),0);
EngineTimeline.add(engineWheelcorbReverse(),0);
EngineTimeline.add(engineTlokGo(),0);
EngineTimeline.add(engineWheelcorbReverseB(),1.5);
EngineTimeline.add(engineTlokBack(),1.5);
EngineTimeline.add(engineCorbhandlerBack(),1.5);

//regular cogs

for (let i=0;i<regCog.length;i++){
    function regularCogsRotation(){
        let cog = regCog[i];
        let tween = TweenMax.to(cog, i+3, {
            rotation: 360,
            transformOrigin:"50% 50%",
            delay: i,
            ease: Back.easeInOut,
        });
        return tween;
    }
    regularCogsTimeline.add(regularCogsRotation(),0);
}

//wire-cogs

for (let i=0;i<wireCogs.length;i++){
    function wireCogsRotation(){
        let cog = wireCogs[i];
        let tween = TweenMax.to(cog, 3, {
            rotation: 360,
            transformOrigin:"50% 50%",
            ease: Linear.easeNone,
        });
        return tween;
    }
    wireCogsTimeline.add(wireCogsRotation(),0);
}


// vertical-box-elevator
var boxElevTimeline = new TimelineMax({repeat:-1});
var boxElev = document.querySelectorAll('.vertical-box-elevator');
for(let i=0;i<boxElev.length;i++){
    let box = boxElev[i];
    function boxElevUp1 () {
        let tween = TweenMax.to(box, 1, {
            y: -40-i*2,
            transformOrigin:"50% 50%",
            ease: Power1.easeInOut,
            delay: i
        });
        return tween;
    }
    function boxElevDown1 () {
        let tween = TweenMax.to(box, 0.5, {
            y: -25+(i*2),
            transformOrigin:"50% 50%",
            ease: Power1.easeOut,
            delay: i
        });
        return tween;
    }
    function boxElevUp2 () {
        let tween = TweenMax.to(box, 1, {
            y: -80-(i*2),
            transformOrigin:"50% 50%",
            ease: Power1.easeInOut,
            delay: i
        });
        return tween;
    }
    function boxElevDown2 () {
        let tween = TweenMax.to(box, 0.3, {
            y: -55+(i*2),
            transformOrigin:"50% 50%",
            ease: Power1.easeOut,
            delay: i
        });
        return tween;
    }
    function boxElevUp3 () {
        let tween = TweenMax.to(box, 1, {
            y: -200-(i*2),
            transformOrigin:"50% 50%",
            ease: Power1.easeInOut,
            delay: i
        });
        return tween;
    }
    function boxElevDown3 () {
        let tween = TweenMax.to(box, 1, {
            y: 0,
            transformOrigin:"50% 50%",
            ease: Power1.easeOut,
        });
        return tween;
    }
    boxElevTimeline.add(boxElevUp1, 0);
    boxElevTimeline.add(boxElevDown1, 1);
    boxElevTimeline.add(boxElevUp2, 1.5);
    boxElevTimeline.add(boxElevDown2, 2.5);
    boxElevTimeline.add(boxElevUp3, 2.8);
    boxElevTimeline.add(boxElevDown3, 3.8);
}

//clocks

function bigClockA (clock) {
    let tween = TweenMax.to(clock, 5, {
        rotation: 90,
        transformOrigin:"50% 50%",
        ease: Power1.easeNone,
    });
    return tween;
}

function bigClockShake (clock, num) {
    if (num){
        let tweenA = TweenMax.to(clock, 0.3, {
            rotation: 85,
            transformOrigin:"50% 50%",
            ease: Linear.easeNone,
        });
        return tweenA;
    } else {
        let tweenB = TweenMax.to(clock, 0.3, {
            rotation: 95,
            transformOrigin:"50% 50%",
            ease: Linear.easeNone,
        });
        return tweenB;
    }
}

function bigClockReturn(clock){
    let tween = TweenMax.to(clock, 0.8, {
        rotation: 0,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

//diods
var controls = document.querySelectorAll('.engine-control');

function controlLights(i){
    let tween = TweenMax.to(controls[i], 1.66, {
        opacity: 1,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
} 

//engine-line
var eline=document.querySelector('#engine-line');

function lineLight(){
    let tween = TweenMax.to(eline, 5, {
        height: 114,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
} 

//clockcog

var clockCog = document.querySelector('#clock-cog');
function clockCogActive() {
    let tween = TweenMax.to(clockCog, 6, {
        rotation: 360,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

//powerlines

let powerLines = document.querySelectorAll('.clock-cog-powerlines');
let timeIs = 4;
for (let i = 5; i>-1; i--){
    function powerLineOn() {
        let tween = TweenMax.to(powerLines[i], 0.5, {
            rotation: 180,
            transformOrigin:"50% 50%",
            ease: Linear.easeNone,
        });
        return tween;
    }
    clocksTimeline.add(powerLineOn(),timeIs);
    timeIs = timeIs + 0.5;
}

//small engine

var cog1;
var cog2;

for (let i = 0; i<2; i++){
    let cogfunc = function smallEngineCogsOn() {
        let tween = TweenMax.to(smallEngCogs[i], 0.5, {
            rotation: 360,
            transformOrigin:"50% 50%",
            ease: Linear.easeOut,
            onComplete: smallEngCogsReverse
        });
        function smallEngCogsReverse(){
            TweenMax.to(smallEngCogs[i], 0.5, {
                rotation: 0,
                transformOrigin:"50% 50%",
                ease: Linear.easeOut,
            });
        }
        return tween;
    }
    i===0?cog1=cogfunc:cog2=cogfunc;
}

function smallEngineCorbGo() {
    let tween = TweenMax.to(smallEngCorb, 0.25, {
        x: -40,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
        onComplete: smallEngineCorbBack
    });
    return tween;
}

function smallEngineCorbBack() {
    let tween = TweenMax.to(smallEngCorb, 0.25, {
        x: 0,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

function smallEngineTlokGo() {
    let tween = TweenMax.to(smallEngTlok, 0.25, {
        y: 10,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
        onComplete: smallEngineTlokBack
    });
    return tween;
}

function smallEngineTlokBack() {
    let tween = TweenMax.to(smallEngTlok, 0.25, {
        y: 0,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

function finalLightOn() {
    let tween = TweenMax.to(finalLight, 0.5, {
        strokeWidth: 0.5, 
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

function finalLightOff() {
    let tween = TweenMax.to(finalLight, 0.5, {
        strokeWidth: 4, 
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

for (let i=0; i<drutlight.length;i++){
    let dr = drutlight[i];
    function finalDrutOn() {
        let tween = TweenMax.to(dr, 0.5, {
            strokeWidth: 0.5, 
            transformOrigin:"50% 50%",
            ease: Linear.easeNone,
        });
        return tween;
    }
    function finalDrutOff() {
        let tween = TweenMax.to(dr, 0.5, {
            strokeWidth: 4, 
            transformOrigin:"50% 50%",
            ease: Linear.easeNone,
        });
        return tween;
    }
    clocksTimeline.add(finalDrutOn(), 7.5);
    clocksTimeline.add(finalDrutOff(), 8);
    clocksTimeline.add(finalDrutOn(), 8.5);
    clocksTimeline.add(finalDrutOff(), 9);
    clocksTimeline.add(finalDrutOn(), 9.5);
}

clocksTimeline.add(finalLightOn(), 7.5);
clocksTimeline.add(finalLightOff(), 8);
clocksTimeline.add(finalLightOn(), 8.5);
clocksTimeline.add(finalLightOff(), 9);
clocksTimeline.add(finalLightOn(), 9.5);

clocksTimeline.add(bigClockA(bigC), 0);
clocksTimeline.add(bigClockA(smallC), 0);
clocksTimeline.add(bigClockShake(bigC,1), 5);
clocksTimeline.add(bigClockShake(bigC,0), 5.3);
clocksTimeline.add(bigClockShake(bigC,1), 5.6);
clocksTimeline.add(bigClockShake(bigC,0), 5.9);
clocksTimeline.add(bigClockShake(bigC,1), 6.2);
clocksTimeline.add(bigClockShake(bigC,0), 6.5);
clocksTimeline.add(bigClockShake(bigC,1), 6.8);
clocksTimeline.add(bigClockShake(bigC,0), 7.1);
clocksTimeline.add(bigClockShake(bigC,1), 7.4);
clocksTimeline.add(bigClockShake(bigC,0), 7.7);
clocksTimeline.add(bigClockShake(bigC,1), 8);
clocksTimeline.add(bigClockShake(bigC,0), 8.3);
clocksTimeline.add(bigClockShake(bigC,1), 8.6);
clocksTimeline.add(bigClockShake(bigC,0), 8.9);
clocksTimeline.add(bigClockReturn(bigC), 9.2);
clocksTimeline.add(bigClockReturn(smallC), 9.2);

clocksTimeline.add(controlLights(0), 0);
clocksTimeline.add(controlLights(1), 1.5);
clocksTimeline.add(controlLights(2), 3);

clocksTimeline.add(lineLight(),0);

clocksTimeline.add(clockCogActive(),4);

clocksTimeline.add(cog1,7);
clocksTimeline.add(cog2,7);
clocksTimeline.add(cog2,8);
clocksTimeline.add(cog1,8);
clocksTimeline.add(cog1,9);
clocksTimeline.add(cog2,9);

clocksTimeline.add(smallEngineCorbGo,7);
clocksTimeline.add(smallEngineCorbGo,7.5);
clocksTimeline.add(smallEngineCorbGo,8);
clocksTimeline.add(smallEngineCorbGo,8.5);
clocksTimeline.add(smallEngineCorbGo,9);
clocksTimeline.add(smallEngineCorbGo,9.5);

clocksTimeline.add(smallEngineTlokGo,7);
clocksTimeline.add(smallEngineTlokGo,7.5);
clocksTimeline.add(smallEngineTlokGo,8);
clocksTimeline.add(smallEngineTlokGo,8.5);
clocksTimeline.add(smallEngineTlokGo,9);
clocksTimeline.add(smallEngineTlokGo,9.5);


//machina whole

//shake
function machinaShakeStart() {
    let tween = TweenMax.to(machinaWhole, 0.1, {
        x: -2, 
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
        onComplete: ()=> {opositeShake(0, 2)}
    });
    return tween;
}

function opositeShake(count, dir) {
    if(count >= 25){
        return;
    }
    let tween = TweenMax.to(machinaWhole, 0.1, {
        x: dir, 
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
        onComplete: ()=>{opositeShake(++count, -1*dir)}
    });
}

//stand up
function machinaStandUp() {
    let tween = TweenMax.to(machinaWhole, 0.5, {
        y: -10,
        rotation: 1, 
        transformOrigin:"100% 100%",
        ease: Power1.easeInOut,
        
    });
    return tween;
}

function opositeStand(){
    let tween = TweenMax.to(machinaWhole, 0.5, {
        y: -20,
        rotation: -2, 
        transformOrigin:"0 100%",
        ease: Power1.easeInOut,
        
    });
    return tween;
}

function constantStand(){
    let tween = TweenMax.to(machinaWhole, 0.5, {
        y: -30,
        rotation: 0, 
        transformOrigin:"50% 50%",
        ease: Power1.easeInOut,
    });
    return tween;
}

//machina roll, car roll
function machinaRollGo(machinaElemenet) {
    let tween = TweenMax.to(machinaElemenet, 1, {
        x: -30,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

function machinaRollBack(machinaElemenet){
    let tween = TweenMax.to(machinaElemenet, 1.5, {
        x: 30,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

function machinaRollFin(machinaElemenet){
    let tween = TweenMax.to(machinaElemenet, 1, {
        x: 0,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
    });
    return tween;
}

//car rotation

function carWheelsGo(i) {
    let tween = TweenMax.to(carWheels[i],1, {
        rotation: -23,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
        
    });
    return tween;
}

function carWheelsBack(i) {
    let tween = TweenMax.to(carWheels[i],1.5, {
        rotation: 23,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
        
    });
    return tween;
}

function carWheelsFin(i) {
    let tween = TweenMax.to(carWheels[i],1, {
        rotation: 0,
        transformOrigin:"50% 50%",
        ease: Linear.easeNone,
        
    });
    return tween;
}

//machina sit
function machinaSitDown() {
    let tween = TweenMax.to(machinaWhole, 0.5, {
        y: 15,
        x: 0,
        rotation: -3,
        transformOrigin:"0 100%",
        ease: Back.easeInOut,
    });
    return tween;
}

function machinaFinalSitDown() {
    let tween = TweenMax.to(machinaWhole, 0.5, {
        y: 0,
        x: 0,
        rotation: 0,
        transformOrigin:"0 100%",
        ease: Back.easeInOut,
    });
    return tween;
}

//plane throw
function paperContainerUp(){
    let tween = TweenMax.to(paperContainer, 0.5, {
        y: -150,
        transformOrigin:"50% 50%",
        ease: Back.easeInOut,
        
    });
    return tween;
}

function paperContainerDown(){
    let tween = TweenMax.to(paperContainer, 0.5, {
        y: 0,
        transformOrigin:"50% 50%",
        ease: Back.easeInOut,
        
    });
    return tween;
}

function paperBoxMotion(){
    let tween = TweenMax.to(paperBox, 0.75, {
        rotation: 360,
        transformOrigin:"50% 100%",
        ease: Back.easeInOut,
        
    });
    return tween;
}

function paperPlaneGo(){
    let tween = TweenMax.to(paperPlane, 1.5, {
        x: 400,
        y: -10,
        rotation: -35,
        transformOrigin:"50% 50%",
        ease: Power1.easeInOut,
        
    });
    return tween;
}

function paperPlaneGoFurther(){
    let tween = TweenMax.to(paperPlane, 1, {
        x: 600,
        y: 30,
        rotation: 20,
        transformOrigin:"50% 50%",
        ease: Power1.easeInOut,
        
    });
    return tween;
}

function paperPlaneGoFin(){
    let tween = TweenMax.to(paperPlane, 1, {
        x: 700,
        y: -10,
        rotation: -20,
        opacity: 0,
        transformOrigin:"50% 50%",
        ease: Power1.easeInOut,
        
    });
    return tween;
}



machinaShake.add(machinaShakeStart(), 5);
machinaShake.add(machinaStandUp(), 8.5);
machinaShake.add(opositeStand(), 9);
machinaShake.add(constantStand(), 9.5);
machinaShake.add(machinaRollGo(machinaWhole), 10);
machinaShake.add(machinaRollBack(machinaWhole), 11);
machinaShake.add(machinaRollFin(machinaWhole), 12.5);
machinaShake.add(machinaRollGo(machinaCar), 10);
machinaShake.add(machinaRollBack(machinaCar), 11);
machinaShake.add(machinaRollFin(machinaCar), 12.5);
machinaShake.add(machinaSitDown(), 13.5);

machinaShake.add(carWheelsGo(0), 10)
machinaShake.add(carWheelsBack(0), 11)
machinaShake.add(carWheelsFin(0), 12.5)

machinaShake.add(carWheelsGo(1), 10)
machinaShake.add(carWheelsBack(1), 11)
machinaShake.add(carWheelsFin(1), 12.5)

machinaShake.add(paperContainerUp(), 14);
machinaShake.add(paperBoxMotion(), 14.5);
machinaShake.add(paperPlaneGo(), 14.75);

machinaShake.add(paperPlaneGoFurther(), 16.25);
machinaShake.add(paperPlaneGoFin(), 17.25);
machinaShake.add(paperContainerDown(), 18.25);

machinaShake.add(machinaFinalSitDown(), 18.75);