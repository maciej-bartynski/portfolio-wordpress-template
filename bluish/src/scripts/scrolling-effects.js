import jquery from 'jquery';
import zenscroll from 'zenscroll';
class OnScrollFromHeader {
    constructor(){
        this.scroller = jquery('.header02--scroller-container');
        this.winHei = window.innerHeight;
        this.wind = jquery(window);
        this.stations = document.querySelectorAll('.scrolling-stage');
        this.done=false;
        this.anchorA = 0;
        this.dir='down';
        this.curr=0;
        this.isScrolled();
    }

    //methods
    isScrolled(){
       
        for (let i=0;i<this.stations.length;i++){
            let position = window.pageYOffset;
            let station = this.stations[i].offsetTop;
            let border = station+this.stations[i].offsetHeight;
            
            if 
            (
                (position>=station && position<border)
                ||
                (position<station&&position+window.innerHeight>=border)    
            )
            {
                  this.curr=i;  
                  this.stations[i].classList.add('on-scroll');
            } 
        }
        this.initThis();
    }

    initThis(){
        this.wind.scroll(() => {
            let anchorB = window.pageYOffset;
            if (this.anchorA > anchorB) {
                this.dir = 'up';
            } else {
                this.dir = 'down';
            }
            this.anchorA = anchorB;

            let station = this.stations[this.curr];
            let next = this.stations[this.curr + 1] ? this.stations[this.curr + 1] : null;
            let prev = this.stations[this.curr - 1] ? this.stations[this.curr - 1] : null;

            let upBorder = station.offsetTop;
            let downBorder = station.offsetTop + station.offsetHeight;
            if (this.dir==='up'){
                if (window.pageYOffset+this.winHei<upBorder+(this.winHei/10)){
                    station.classList.remove('on-scroll');
                     this.curr = this.curr - 1;
                }
                if (window.pageYOffset<upBorder-(this.winHei/10)){
                    prev.classList.add('on-scroll');
                }
            } else if (this.dir==='down'){
                if (window.pageYOffset > downBorder-(this.winHei/10)) {
                    station.classList.remove('on-scroll');
                    this.curr = this.curr + 1;
                }
                if (window.pageYOffset+this.winHei>downBorder+(this.winHei/10)){
                    next.classList.add('on-scroll');
                }
            }
        });
        this.scroller.click(
            ()=>{
                zenscroll.toY((this.stations[0].offsetTop+this.stations[0].offsetHeight)-60, 500);
            }
        )
    }
    
}

let newScrollEffect = new OnScrollFromHeader;