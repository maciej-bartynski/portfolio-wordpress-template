class TiltSlider {
    constructor(movingItem, movingWrapper, switcherItem, widthClass) {
        this.movingItem = movingItem;
        this.tilts = movingItem.querySelectorAll('.slider100vw--item');
        this.movingWrapper = movingWrapper;
        this.switcherItem = switcherItem;
        this.timerItem = switcherItem.querySelector('#slideswitch-niddle');
        this.angleLeft = switcherItem.querySelector('.slideswitch-left');
        this.angleRight = switcherItem.querySelector('.slideswitch-right');
        this.leftCounter = switcherItem.querySelector('.left-into-left');
        this.rightCounter = switcherItem.querySelector('.left-into-right');
        this.widthClass=widthClass;

        this.stepsArray = this.setAvailablePositions();
        this.noSlide = null;
        this.ifOnlyOneTilt();
        this.currentPosition = 0;
        this.autoDirection = 1;

        this.toTheLeft = null;
        this.toTheRight = null;

        this.timer = null;
        this.tictactoe = 15000;

        this.timeGo = 'add-animation';
        this.timeStop = 'switch-animation';

        
        this.clickDispatcher();
        this.initAutoSlide();
        this.swipeEventDispatcher();
    }

    //chow mus left
    tiltsLeft() {
        let all = this.stepsArray.length;
        this.toTheRight = (all - this.currentPosition) - 1;
        this.toTheLeft = this.currentPosition;

        this.leftCounter.innerText = this.toTheLeft;
        this.rightCounter.innerText = this.toTheRight;
    }

    //autoslide
    initAutoSlide() {
        if (!this.noSlide){
            this.timer = setInterval(() => {
                this.switchingAnimationOnTimerItem();
                this.moveSlider(this.autoDirection);
            }, this.tictactoe);
        }
    }

    //events
    clickDispatcher() {
        if (this.noSlide){
            return;
        };
        this.countingAnimationOnTimerItem();
        this.angleLeft.addEventListener('click',
            (e) => {
                clearInterval(this.timer);
                this.switchingAnimationOnTimerItem();
                this.moveSlider(-1);
                this.timer = setInterval(() => {
                    this.switchingAnimationOnTimerItem();
                    this.moveSlider(this.autoDirection);
                }, this.tictactoe);
            }
        )
        this.angleRight.addEventListener('click',
            (e) => {
                clearInterval(this.timer);
                this.switchingAnimationOnTimerItem();
                this.moveSlider(1);
                this.timer = setInterval(() => {
                    this.switchingAnimationOnTimerItem();
                    this.moveSlider(this.autoDirection);
                }, this.tictactoe);
            }
        )
    }

    countingAnimationOnTimerItem() {
        this.timerItem.classList.remove(this.timeStop);
        this.timerItem.classList.add(this.timeGo);
    }

    switchingAnimationOnTimerItem() {
        this.timerItem.classList.remove(this.timeGo);
        this.timerItem.classList.add(this.timeStop);
        setTimeout(() => {
            this.countingAnimationOnTimerItem()
        }, 500);
    }

    //positions
    setAvailablePositions() {
        let childrenAmount = this.tilts.length;
        let arrayOfSteps = [];
        for (let i = 0; i < childrenAmount; i++) {
            arrayOfSteps.push((i * -100) + 'vw');
        }
        this.setSliderWidth(arrayOfSteps);
        return arrayOfSteps;
    }

    //hide switcher if only one item
    ifOnlyOneTilt(){
        if (this.tilts.length <= 1){
            this.switcherItem.style.display ="none";
            this.noSlide = true;
        }
    }

    //slider width
    setSliderWidth(nums) {
        let newWid = nums.length * 100 + 'vw';
        this.movingItem.classList.add(this.widthClass);
        document.querySelector('style').textContent +=
            `@media screen and (max-width: 899px){ .${this.widthClass}{ width: ${newWid}}`;
    }
    //move on click
    moveSlider(direction = null) {
        this.currentPosition = this.currentPosition + direction;

        this.currentPosition > this.stepsArray.length - 1 ?
            this.currentPosition = this.stepsArray.length - 1 :
            this.currentPosition;

        this.currentPosition < 0 ?
            this.currentPosition = 0 :
            this.currentPosition;

        this.autoDirection = this.currentPosition === 0 ? 1 : this.autoDirection;
        this.autoDirection = this.currentPosition === this.stepsArray.length - 1 ? -1 : this.autoDirection;

        this.movingItem.style.left = this.stepsArray[this.currentPosition];
        this.tiltsLeft();
    }

    //move on swipe
    swipeEventDispatcher() {
        var touchEnded, touchStarted;
        
        this.movingItem.addEventListener('touchstart', e => handleTouchStart(e), false);
        this.movingItem.addEventListener('touchend', e => handleTouchEnd(e), false);

        const handleTouchStart = (e) => {
            touchStarted = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            touchEnded = e.changedTouches[0].clientX;
            
            if (touchStarted - touchEnded > 20) {
                clearInterval(this.timer);
                this.switchingAnimationOnTimerItem();
                this.moveSlider(-1);
                this.timer = setInterval(() => {
                    this.switchingAnimationOnTimerItem();
                    this.moveSlider(this.autoDirection);
                }, this.tictactoe);            
            } else if (touchStarted - touchEnded < -20) {
                clearInterval(this.timer);
                this.switchingAnimationOnTimerItem();
                this.moveSlider(1);
                this.timer = setInterval(() => {
                    this.switchingAnimationOnTimerItem();
                    this.moveSlider(this.autoDirection);
                }, this.tictactoe);          
            } else {
                return;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let section = document.querySelector('.slider100vw--wrapper');
    let allSliders = section.querySelectorAll('.slider100vw--slider');
    let allSwitchers = section.querySelectorAll('.slider100vw--switcher');

    for (let i = 0; i<allSliders.length; i++){
        let widthClass = 'slider100vw--slider'.concat(i);
        var slide = new TiltSlider(allSliders[i], section, allSwitchers[i], widthClass)
    }
});



