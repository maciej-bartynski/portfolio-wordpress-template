import jquery from 'jquery';
import zenscroll from 'zenscroll';
class OnScrollFromHeader {
    constructor(){
        //this.scroller = jquery('some class');
        this.winHei = window.innerHeight;
        this.wind = jquery(window);
        this.header = jquery('#header02');
        this.section = jquery('#projekty03');
        this.stations = document.querySelectorAll('.scrolling-stage');
        this.done=false;
        this.anchorA = 0;
        this.dir='down';
        this.curr=0;
        
        this.initThis();
    }
    //methods
    initThis(){
        //window.scrollY(0);
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
                if (window.pageYOffset+window.innerHeight<upBorder+(window.innerHeight/2)){
                    station.classList.remove('on-scroll');
                     this.curr = this.curr - 1;
                }
                if (window.pageYOffset<upBorder-(window.innerHeight/2)){
                    prev.classList.add('on-scroll');
                }
            } else if (this.dir==='down'){
                if (window.pageYOffset > downBorder-(window.innerHeight/2)) {
                    station.classList.remove('on-scroll');
                    this.curr = this.curr + 1;
                }
                if (window.pageYOffset+window.innerHeight>downBorder+(window.innerHeight/2)){
                    next.classList.add('on-scroll');
                }
            }
        });

    }
    //events
    showEffect(){
        this.header.addClass('on-scroll');
        this.section.addClass('on-scroll');
    }
    backEffect() {
        this.header.removeClass('on-scroll');
        this.section.removeClass('on-scroll');
    }
}

let newScrollEffect = new OnScrollFromHeader;