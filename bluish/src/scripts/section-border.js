import jquery from 'jquery';
import TweenMax, {
    TimelineMax
} from 'gsap/TweenMax';

class CrashTest {
    constructor(){
        this.setState=this.setState.bind(this);
        this.switcher = jquery('#section-border-projekty_switcher');
        this.eagleOne = jquery('#section-border-projekty_item-01 img');
        this.eagleTwo = jquery('#section-border-projekty_item-02 img');
        this.smash = new TimelineMax({repeat: 0, onComplete: this.setState});
        this.smash.pause(true);
        this.isPaused = true;

        this.animationBuild();
        this.clickDispatcher()
    }
    //events
    clickDispatcher(){
        this.switcher.click(()=>{         
            if (this.isPaused){
                this.isPaused=false;
                this.canRepeat=false;
                this.smash.resume();
                return;
            } 
            if (this.canRepeat){
                this.canRepeat=false;
                this.smash.restart();
            }
        });
    }
    //methods
    setState(){
        this.canRepeat=true;
    }

    animationBuild(){
        let eagleOneCrashArgs = {
            right: -1,
            transformOrigin: '0 0',
            ease: Back.easeIn,
        }
        let eagleTwoCrashArgs = {
            left: -1,
            transformOrigin: '0 0',
            ease: Back.easeIn,
        }
        let eagleOneBackArgs = {
            right: '50%',
            transformOrigin: '0 0',
            ease: Linear.easeNone,
        }
        let eagleTwoBackArgs = {
            left: '50%',
            transformOrigin: '0 0',
            ease: Linear.easeNone,
        }
        let tween1 = TweenMax.to(this.eagleOne, 0.35, eagleOneCrashArgs);
        let tween2 = TweenMax.to(this.eagleTwo, 0.35, eagleTwoCrashArgs);
        let tween3 = TweenMax.to(this.eagleOne, 2, eagleOneBackArgs);
        let tween4 = TweenMax.to(this.eagleTwo, 2, eagleTwoBackArgs);
        this.smash.add(tween1, 0);
        this.smash.add(tween2, 0);
        this.smash.add(tween3, 0.5);
        this.smash.add(tween4, 0.5);
    }
}

let crashThem = new CrashTest;

class Eater {
    constructor(){
        this.setState=this.setState.bind(this);
        this.switcher = jquery('#section-border-tools_switcher');
        this.eagleOne = jquery('#section-border-tools_item-01');
        this.eat = new TimelineMax({repeat: 0, onComplete: this.setState});
        this.eat.pause(true);
        this.isPaused = true;

        this.animationBuild();
        this.clickDispatcher()
    }
    //events
    clickDispatcher(){
        this.switcher.click(()=>{         
            if (this.isPaused){
                this.isPaused=false;
                this.canRepeat=false;
                this.eat.resume();
                return;
            } 
            if (this.canRepeat){
                this.canRepeat=false;
                this.eat.restart();
            }
        });
    }
    //methods
    setState(){
        this.canRepeat=true;
    }

    animationBuild(){
        let eagleOneGo = {
            right: '100%',
            transformOrigin: '50% 50%',
            ease: Linear.easeNone,
        }
        let eagleOneRotate = {
            rotation: 180,
            transformOrigin: '50% 50%',
            ease: Linear.easeNone,
        }
        let eagleOneBack = {
            right: 0,
            transformOrigin: '50% 50%',
            ease: Linear.easeNone,
        }
        let eagleOneRotateBack = {
            rotation: 360,
            transformOrigin: '50% 50%',
            ease: Linear.easeNone,
        }
        let tween1 = TweenMax.to(this.eagleOne, 1.5, eagleOneGo);
        let tween2 = TweenMax.to(this.eagleOne, 0.5, eagleOneRotate);
        let tween3 = TweenMax.to(this.eagleOne, 1.5, eagleOneBack);
        let tween4 = TweenMax.to(this.eagleOne, 0.5, eagleOneRotateBack);
        this.eat.add(tween1, 0);
        this.eat.add(tween2, 1.5);
        this.eat.add(tween3, 2);
        this.eat.add(tween4, 3.5);
    }
}

let eatThem = new Eater;

class Reverser {
    constructor(){
        this.setState=this.setState.bind(this);
        this.section = jquery('#section-border-searchfor--dummy-content');
        this.eagleOne = jquery('#section-border-searchfor_item-01');
        this.reverseIt = new TimelineMax({repeat: 0, onComplete: this.setState});
        this.reverseIt.pause(true);
        this.isPaused = true;
        this.isRotated=false;

        this.animationBuild();
        this.clickDispatcher()
    }
    //events
    clickDispatcher(){

        let sectionSlideDown = () => {
            if (!this.isRotated){
                this.section.css('transform', 'rotate(180deg)');
                this.isRotated = true;
            } else {
                this.section.css('transform', 'none');
                this.isRotated = false;
            }
            this.section.slideDown(500);
        }

        let sectionSlideUp = ()=>{
            this.section.slideUp(500, sectionSlideDown);
        }

        this.eagleOne.click(()=>{         
            if (this.isPaused){
                this.isPaused=false;
                this.canRepeat=false;
                this.reverseIt.resume();
                sectionSlideUp();
                return;
            } 
            if (this.canRepeat){
                this.canRepeat=false;
                this.reverseIt.restart();
                sectionSlideUp();
            }
        });
    }
    //methods
    setState(){
        this.canRepeat=true;
    }

    animationBuild(){
        let eagleOneRotate = {
            rotation: 360,
            transformOrigin: '50% 50%',
            ease: Linear.easeNone,
        }
        let tween1 = TweenMax.to(this.eagleOne, 1, eagleOneRotate);
        let tween2 = TweenMax.to(this.eagleOne, 1, eagleOneRotate);
        this.reverseIt.add(tween1, 0);
        this.reverseIt.add(tween2, 1);
    }
}

let reverseThem = new Reverser;

class Blinker {
    constructor(){
        this.setState=this.setState.bind(this);
        this.section = jquery('#section-border-questions--dummy-content');
        this.eagleOne = jquery('#section-border-questions_item-01');
        this.blinkIt = new TimelineMax({repeat: 0, onComplete: this.setState});
        this.blinkIt.pause(true);
        this.isPaused = true;
        this.isRotated=false;

        this.animationBuild();
        this.clickDispatcher()
    }
    //events
    clickDispatcher(){

        this.eagleOne.click(()=>{         
            if (this.isPaused){
                this.isPaused=false;
                this.canRepeat=false;
                this.blinkIt.resume();
                return;
            } 
            if (this.canRepeat){
                this.canRepeat=false;
                this.blinkIt.restart();
            }
        });
    }
    //methods
    setState(){
        this.canRepeat=true;
    }

    animationBuild(){
        let sectionBlinkOne = {
            opacity: 0.5,
            transformOrigin: '50% 50%',
            ease: Back.easeInOut,
        }
        let sectionBlinkTwo = {
            opacity: 0.75,
            transformOrigin: '50% 50%',
            ease: Back.easeInOut,
        }
        let sectionBlinkThree = {
            opacity: 0.15,
            transformOrigin: '50% 50%',
            ease: Back.easeInOut,
        }
        let sectionBlinkFour = {
            opacity: 1,
            transformOrigin: '50% 50%',
            ease: Back.easeInOut,
        }
        let tween1 = TweenMax.to(this.section, 0.25, sectionBlinkOne);
        let tween2 = TweenMax.to(this.section, 0.25, sectionBlinkTwo);
        let tween3 = TweenMax.to(this.section, 0.25, sectionBlinkThree);
        let tween4 = TweenMax.to(this.section, 0.25, sectionBlinkFour);
        this.blinkIt.add(tween1, 0);
        this.blinkIt.add(tween2, 0.25);
        this.blinkIt.add(tween3, 0.5);
        this.blinkIt.add(tween4, 0.75);

        let eagleOneBlinkOne = {
            rotation: 180,
            transformOrigin: '50% 50%',
            ease: Back.easeInOut,
        }
        let eagleOneBlinkTwo = {
            rotation: 70,
            transformOrigin: '50% 50%',
            ease: Back.easeInOut,
        }
        let eagleOneBlinkThree = {
            rotation: 280,
            transformOrigin: '50% 50%',
            ease: Back.easeInOut,
        }
        let eagleOneBlinkFour = {
            rotation: 0,
            transformOrigin: '50% 50%',
            ease: Back.easeInOut,
        }
        let tween5 = TweenMax.to(this.eagleOne, 0.25, eagleOneBlinkOne);
        let tween6 = TweenMax.to(this.eagleOne, 0.25, eagleOneBlinkTwo);
        let tween7 = TweenMax.to(this.eagleOne, 0.25, eagleOneBlinkThree);
        let tween8 = TweenMax.to(this.eagleOne, 0.25, eagleOneBlinkFour);
        this.blinkIt.add(tween5, 0);
        this.blinkIt.add(tween6, 0.25);
        this.blinkIt.add(tween7, 0.5);
        this.blinkIt.add(tween8, 0.75);
    }
}

let blinkThem = new Blinker;

class Magneter {
    constructor(){
        this.setState=this.setState.bind(this);
        this.switcher = jquery('#section-border-contact_switcher');
        this.eagleOne = jquery('#section-border-contact_item-01');
        this.eagleTwo = jquery('#section-border-contact_item-02');
        this.eagleThree = jquery('#section-border-contact_item-03');
        this.magnetIt = new TimelineMax({repeat: 0, onComplete: this.setState});
        this.magnetIt.pause(true);
        this.isPaused = true;
        this.isRotated=false;

        this.animationBuild();
        this.clickDispatcher()
    }
    //events
    clickDispatcher(){

        this.switcher.click(()=>{         
            if (this.isPaused){
                this.isPaused=false;
                this.canRepeat=false;
                this.magnetIt.resume();
                return;
            } 
            if (this.canRepeat){
                this.canRepeat=false;
                this.magnetIt.restart();
            }
        });
    }
    //methods
    setState(){
        this.canRepeat=true;
    }

    animationBuild(){
        let eagleOneGo = {
            left: '15%',
            transformOrigin: '50% 50%',
            ease: Back.easeOut,
        }
        let eagleThreeGo = {
            left: '40%',
            transformOrigin: '50% 50%',
            ease: Back.easeOut,
        }
        let eagleOneGoFurther = {
            left: '30%',
            transformOrigin: '50% 50%',
            ease: Back.easeOut,
        }
        let eagleThreeGoFurther = {
            left: '50%',
            transformOrigin: '50% 50%',
            ease: Back.easeOut,
        }
        let eagleOneGoBack = {
            left: '50px',
            transformOrigin: '50% 50%',
            ease: Linear.easeNone,
        }
        //
        let eagleTwoGo = {
            right: '20%',
            transformOrigin: '50% 50%',
            ease: Back.easeOut,
        }
        let eagleThreeGoBack = {
            left: '45%',
            transformOrigin: '50% 50%',
            ease: Back.easeOut,
        }
        let eagleTwoGoFurther = {
            right: '40%',
            transformOrigin: '50% 50%',
            ease: Back.easeOut,
        }
        let eagleThreeGoBackFurther = {
            left: '250px',
            transformOrigin: '50% 50%',
            ease: Back.easeOut,
        }
        let eagleTwoGoBack = {
            right: '50px',
            transformOrigin: '50% 50%',
            ease: Linear.easeNone,
        }
        
        let tween1 = TweenMax.to(this.eagleOne, 1, eagleOneGo);
        let tween2 = TweenMax.to(this.eagleThree, 1, eagleThreeGo);
        let tween3 = TweenMax.to(this.eagleOne, 0.75, eagleOneGoFurther);
        let tween4 = TweenMax.to(this.eagleThree, 0.75, eagleThreeGoFurther);
        let tween5 = TweenMax.to(this.eagleOne, 1.5, eagleOneGoBack);
        let tween6 = TweenMax.to(this.eagleTwo, 1, eagleTwoGo);
        let tween7 = TweenMax.to(this.eagleThree, 1, eagleThreeGoBack);
        let tween8 = TweenMax.to(this.eagleTwo, 1, eagleTwoGoFurther);
        let tween9 = TweenMax.to(this.eagleThree, 1, eagleThreeGoBackFurther);
        let tween10 = TweenMax.to(this.eagleTwo, 1, eagleTwoGoBack);
       
        this.magnetIt.add(tween1, 0);
        this.magnetIt.add(tween2, 0.4);
        this.magnetIt.add(tween3, 1.5);
        this.magnetIt.add(tween4, 1.75);
        this.magnetIt.add(tween5, 2.5);
        this.magnetIt.add(tween6, 3.5);
        this.magnetIt.add(tween7, 4);
        this.magnetIt.add(tween8, 4.75);
        this.magnetIt.add(tween9, 5.1);
        this.magnetIt.add(tween10, 6);
    }
}

let magnetThem = new Magneter;