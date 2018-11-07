import jquery from 'jquery';
import TweenMax, {
    TimelineMax
} from 'gsap/TweenMax';

class TrainAnimation {
    constructor() {
        this.train = jquery('#train00_car');
        this.track = jquery('#train00');
        this.travel = new TimelineMax({repeat: 0});
        this.position = 200;
        this.controller = 1;
        this.repeat=this.repeat.bind(this);
        this.starter=this.starter.bind(this);
        this.paused = null;
        this.starter();
        this.hoverDispatcher();
        this.leaveDispatcher();
    }

    hoverDispatcher(){
        this.track.mouseover((e) => {
            let pos = e.clientY + window.pageYOffset;
            let car = document.querySelector('#train00_car');
            let carTop = car.offsetTop;
            let carBot = carTop + car.offsetHeight;
            if (pos > carBot + 10 && this.controller === 1){
                this.paused = true;
                this.travel.pause();
            } else if (pos < carTop - 10 && this.controller === -1){
                this.paused = true;
                this.travel.pause();
            }
        });
    }

    leaveDispatcher(){
        this.track.mouseleave((e) => {
            if (this.paused) {
                this.paused=false;
                this.travel.resume();
            }
        });
    }

    repeat(){
        let border = document.querySelector('#footer09').offsetTop;
        this.travel = new TimelineMax({repeat: 0});
        if (border<=this.position+300){
           this.controller = -1;
        } else if (this.position<=600) {
            this.controller = 1;
        }
        if (this.controller === -1) {
            this.position -= 300;
        } else if (this.controller === 1) {
            this.position += 300;
        }
        this.starter();
    }

    starter(){
        this.travel.add(
            TweenMax.to(
                this.train,
                1,
                {
                    top: this.position+(300*this.controller),
                    ease: Linear.easeOut,
                    onComplete: ()=>{
                        this.repeat();
                    }
                }
            )
        )
        this.travel.play();
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#train00_car').innerHTML=`
    <svg 
    style="width: 100%; height: 100%; position: relative; top: -50%;" 
    class="svg-container" 
    width="40" 
    height="40">
        <circle fill="#0066FF" stroke="#FFFFFF" stroke-width="2" cx="20" cy="20" r="7"></circle>
    </svg>
    `;
    //let TrainGo = new TrainAnimation;
});