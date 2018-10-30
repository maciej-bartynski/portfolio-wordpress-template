import $ from 'jquery';

class FixedContact {
    constructor(){
        this.contactWrapper = $('#contact07_contact--wrapper');
        this.contactPositioner = $('#contact07_contact--wrapper .contact07_contact--positioner');
        this.contactSwitcher = $('#contact07_contact--wrapper .contact07_contact--switcher');
        this.contactCloser = $('#contact07_contact--wrapper .contact07_contact--closer');
        this.staticEl = document.querySelector('#contact07');
        this.staticPosition = null;

        this.onScrollDispatcher();
        this.clickDispatcher();
    }

    //events

    onScrollDispatcher(){
        window.addEventListener('scroll', (e)=>{
            this.staticPosition = this.staticEl.offsetTop;
            if((this.staticPosition - 100 < window.pageYOffset + window.innerHeight) ||
                (window.pageYOffset < window.innerHeight/2) ){
                this.contactWrapper.removeClass('isFixed');
                this.contactPositioner.fadeIn();
            } else {
                this.contactWrapper.addClass('isFixed');
            }
        });
    }

    clickDispatcher(){
        this.contactCloser.click((e)=>{
            this.contactSwitcher.fadeIn();
            this.contactPositioner.css('display', 'none');      
        });

        this.contactSwitcher.click((e)=>{
            this.contactSwitcher.css('display', 'none'); 
            this.contactPositioner.fadeIn();
        });
    }
}

let onScroll = new FixedContact;