import $ from 'jquery';

class BigSlider {
    constructor(){
        this.tiltSection = $('.slider25vw--wrapper');
        this.listSection = $('.tools04_list--wrapper');
        this.listSectionTitle = $('.tools04_list--title');
        
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
        $(this.tilt).click((e)=>{
            this.setTitleAndList(e);
            this.listSection.slideDown();
            this.tiltSection.slideUp();
        })
    }

    //methods
    setTitleAndList(e){
        let title = ($(e.currentTarget).find('.tools_name')).text();
        this.listSectionTitle.text('Related to '.concat(title));
        //send request;
        //load spinner
        //set title

       
    }
}

var action = new BigSlider();