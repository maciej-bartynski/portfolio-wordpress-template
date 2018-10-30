class CellsSlider {
    constructor(movingItem, movingWrapper, switcherItem) {
        this.movingItem = movingItem; //
        this.tilts = movingItem.querySelectorAll('.slider25vw--item');//
        this.movingWrapper = movingWrapper;
        this.switcherItem = switcherItem;//
        this.cogItems = this.setCogsAmount(); //
       
        this.stepsArray = this.setAvailablePositions();//
        this.noSlide = null;//
        this.ifOnlyOneTilt();//
        this.currentPosition = 0;//
        this.autoDirection = 1; //

        this.timer = null; //
        this.tictactoe = 15000; //
           
        this.initAutoSlide();//
        this.clickDispatcher();//
        this.swipeEventDispatcher();//
    }

    //hide switcher if only one item
    ifOnlyOneTilt() {
        if (this.tilts.length <= 1) {
            this.switcherItem.style.display = "none";
            this.noSlide = true;
        }
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

    //slider width
    setSliderWidth(nums) {
        let newWid = nums.length * 100 + 'vw';
        document.querySelector('style').textContent +=
            `@media screen and (max-width: 899px){ .slider25vw--slider{ width: ${newWid}}`;
    }

    //cogs amoutn
    setCogsAmount() {
        for (let i=0; i<this.tilts.length;i++){
            let cog = document.createElement('IMG');
            cog.setAttribute('src', 'bluish/media/svg-animation/kompasXcog.svg');
            cog.classList.add('slideswitch-cog');
            let box = document.createElement('DIV');
            box.classList.add('slideswitch--item');
            box.appendChild(cog);
            this.switcherItem.appendChild(box);
        }
        return this.switcherItem.querySelectorAll('.slideswitch-cog');
    }

    //autoslide
    initAutoSlide() {
        if (!this.noSlide){
            this.timer = setInterval(() => {
                this.moveSlider(this.autoDirection);
            }, this.tictactoe);
        }
    }

    //counting animation (cog)
    countingAnimationOnTimerItem(i) {
        for (let j = 0; j < this.cogItems.length; j++) {
            this.cogItems[j].classList.remove('cog-is-animated');
        }
        this.cogItems[i].classList.add('cog-is-animated');
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
        this.countingAnimationOnTimerItem(this.currentPosition);
    }

    //events
    clickDispatcher() {
        if (this.noSlide){
            return;
        };
       
        let amount = this.cogItems.length;
        for (let i=0; i<amount;i++){
            this.cogItems[i].addEventListener('click', (e) => {
                    clearInterval(this.timer);
                    this.currentPosition = i;
                    this.moveSlider();
                    this.timer = setInterval(() => {    
                        this.moveSlider(this.autoDirection);
                    }, this.tictactoe);
                    
            })
        }
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
                this.moveSlider(-1);
                this.timer = setInterval(() => {
                    this.moveSlider(this.autoDirection);
                }, this.tictactoe);            
            } else if (touchStarted - touchEnded < -20) {
                clearInterval(this.timer);
                this.moveSlider(1);
                this.timer = setInterval(() => {
                    this.moveSlider(this.autoDirection);
                }, this.tictactoe);          
            } else {
                return;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let section = document.querySelector('.slider25vw--wrapper');
    let slider = section.querySelector('.slider25vw--slider');
    let switcher = section.querySelector('.slider25vw--switcher');
    var slide = new CellsSlider(slider, section, switcher);
});



