import $ from 'jquery';
import zenscroll from 'zenscroll';
class FixedBackground {
    constructor() {
        this.bg = $('#bg0-1');
        //this.position = this.head.position().top + this.head.offset().top + this.head.outerHeight(true);
        this.machina = $('#bg2');
        this.secondMachina = $('#bg1');
        this.pageHeight = $('body').outerHeight(true);
        this.isRotated=false;
        this.scrollDispatcher();
    }
    //events
    scrollDispatcher() {
        window.addEventListener('scroll', () => {
            
            let bgChangePercentage = () =>{
                let n = parseFloat($(window).scrollTop() / (this.pageHeight / 100) * 0.1);
                return isNaN(n) ? 0 : n.toFixed(2);
            };

            this.machina.css('top', bgChangePercentage()+'%');
            this.secondMachina.css('top', (10-bgChangePercentage()) + '%');

            if (this.isRotated!=false&&
                window.pageYOffset>(window.innerHeight/4)){
                this.machina.css('transform', 'rotate(-25deg)');
                this.secondMachina.css('transform', 'rotate(25deg)');
               
                this.isRotated=true;
               
            }
            
        })
    }
}

let fixedBg = new FixedBackground;

//let fixedBg = new Background;
