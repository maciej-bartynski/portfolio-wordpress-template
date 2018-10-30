import $ from 'jquery';

export class MobileMenu {
    constructor(){
        this.switch = $('.navbar_mobile-switch');
        this.openIco = $('.navbar_mobile-switch .open');
        this.closeIco = $('.navbar_mobile-switch .close');
        this.menu = $('.navbar01--container');
        this.menuContainer = $('.navbar01--positioner');
        this.isOpen = false;
        this.clickDispatcher = this.clickDispatcher.bind(this);
        this.clickDispatcher();
        this.scrollDispatcher();
    }

//events
    clickDispatcher(){
        let its = this;
        this.switch.click(()=>{
            if (its.isOpen){
                its.isOpen=false;
                its.openIconShow();
                its.showMenu();
            } else if (!its.isOpen) {
                its.isOpen = true;
                its.closeIconShow();
                its.closeMenu();
            }
        })
    }

    scrollDispatcher(){
        $(window).scroll(() => {
            if ($(window).scrollTop()>160){
                this.menuContainer.addClass('fixed');
            } else {
                this.menuContainer.removeClass('fixed');
            }
        })
    }

    //methods
    closeIconShow(){
        this.openIco.toggleClass('toggle');
        this.closeIco.toggleClass('toggle');
    }
    openIconShow() {
        this.closeIco.toggleClass('toggle');
        this.openIco.toggleClass('toggle');
    }
    showMenu(){
        this.menu.removeClass('show');
    }
    closeMenu() {
        this.menu.addClass('show');
    }

}


