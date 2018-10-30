import $ from 'jquery';

class BigSlider {
    constructor(){
        this.tiltSection = $('.slider25vw--wrapper');
        this.listSection = $('.tools04_list--wrapper');
        
        this.back = $('.tools04_list--wrapper .tools04_list--button');
        this.tilt = $('.tools--cell');

        this.tiltClickDispatcher();
        this.backClickDispatcher();
    }

    //events
    backClickDispatcher(){
        $(this.back).click(() => {
            this.tiltSection.slideDown();
            this.listSection.slideUp();
        })
    }

    tiltClickDispatcher(){
        $(this.tilt).click(()=>{
            this.listSection.slideDown();
            this.tiltSection.slideUp();
        })
    }

    //methods
}

var action = new BigSlider();