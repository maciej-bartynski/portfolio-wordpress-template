import $ from 'jquery';

class Background {
    constructor(){
        this.bg = $('.animation-panel');
        this.head = $('#header02');
        this.windo = $(window);
        this.position = this.head.position().top + this.head.offset().top + this.head.outerHeight(true);
        this.bgClass='fixed-background';

        this.animationToBg = false;
        this.bgAdded = false;

        this.machina = $('#machina-wrapper');
        this.secondMachina=$('#second-machina-wrapper');
        this.counter=false;
        this.timer;

        this.scrollDispatcher();

        this.closerTimer;
    }
    //events
    scrollDispatcher(){
        window.addEventListener('scroll', ()=>{
            
            if (this.windo.scrollTop() > this.position) {
                this.animationToBg = true;
                clearTimeout(this.closerTimer);
                this.closerTimer = setTimeout(()=>{this.bgCloseOnContentFocus(this)}, 2000);
            } else {
                this.animationToBg = false;
            }

            if (this.animationToBg && !this.bgAdded){
                this.bg.addClass(this.bgClass);
                this.counter ? 
                (()=>{this.secondMachina.fadeIn(); this.machina.css('display', 'none')})()
                :
                this.machina.fadeIn();
                this.bgAdded = true;
                this.bgChange();
            } else if (!this.animationToBg && this.bgAdded) {
                this.bg.removeClass(this.bgClass);
                clearTimeout(this.timer);
                this.bgAdded = false;
                this.machina.css('display', 'block');
                this.secondMachina.css('display', 'none');
            }

        })
    }

    //methods

    bgChange(){
        this.timer = setInterval(
        ()=>{
            if (this.counter){
                this.secondMachina.fadeOut('slow', ()=>{
                    this.machina.fadeIn();
                }); 
            } else {
                this.machina.fadeOut('slow', ()=>{
                    this.secondMachina.fadeIn();
                });
            }
            this.counter?this.counter=false:this.counter=true;
        }, 30000)
    }

    
    bgCloseOnContentFocus(that){
        if (!that.animationToBg) {
            return;
        }
        if (that.counter) {
            that.secondMachina.fadeOut('slow', ()=>{
               clearTimeout(that.timer);
               that.bg.removeClass(that.bgClass);
               that.bgAdded = false;
               that.counter=false;
            });
        } else {
            that.machina.fadeOut('slow', () => {
                clearTimeout(that.timer);
                that.bg.removeClass(that.bgClass);
                that.bgAdded = false;
                that.counter = true;
            });
        }
    }
}

let fixedBg = new Background;