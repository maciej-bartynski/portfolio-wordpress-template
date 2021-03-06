import jquery from 'jquery';
import TweenMax, {
    TimelineMax
} from 'gsap/TweenMax';

var karynka;

const allTitles=()=>{
    let listitems = document.querySelectorAll('.aboutme08-list--item');
    for (let i=0; i<listitems.length;i++){
       let listItemArticle = new AllTitles(listitems[i], karynka);
    }
}

class AllTitles {
    constructor(element, svg) {
        this.elem = element;
        this.svgContainer = this.elem.querySelector('.aboutme08-list_article_head_icon');
        this.svg = svg;
        this.articleVisible=1;
        this.article=this.elem.querySelector('.aboutme08-list_article_body');
        this.head = this.elem.querySelector('.aboutme08-list_article_head');
        this.titleText = this.elem.querySelector('.aboutme08-list_article_head_title').innerText;
        this.titleAnimText = this.elem.querySelector('.aboutme08-list_article_head_title-anim');
        this.newTitleText=this.titleText;

        this.newTimeLineForText = new TimelineMax({repeat: 0});
        this.newTimeLineForKaryBigC = new TimelineMax({repeat: 0});
        this.newTimeLineForKaryOpoC = new TimelineMax({repeat: 0});
        this.newTimeLineForKaryCogsA = new TimelineMax({repeat: 0});
        this.newTimeLineForKaryCogsB = new TimelineMax({repeat: 0});
        this.newTimeLineForKaryCogsC = new TimelineMax({repeat: 0});
        this.newTimeLineForKarySpecCog = new TimelineMax({repeat: 0});
        this.newTimeLineForKarySpec = new TimelineMax({repeat: 0});
        this.newTimeLineForKaryQuart = new TimelineMax({repeat: 0});
        this.newTimeLineForKaryBelt = new TimelineMax({repeat: 0});

        this.allSpansInItem=[];
        this.allSpansAmount=null;
        this.getExistingString();
        this.setTextWithSpans();

        this.printKarynka();
        this.karynkaBigCircle = this.elem.querySelector('.big-circle');
        this.karynkaOpositeCircle = this.elem.querySelector('.oposite-big-circle');
        this.karynkaCogA = this.elem.querySelectorAll('.kary-cogs')[0];
        this.karynkaCogB = this.elem.querySelectorAll('.kary-cogs')[1];
        this.karynkaCogC = this.elem.querySelectorAll('.kary-cogs')[2];
        this.karynkaSpecCog = this.elem.querySelector('.kary-big-spec');
        this.karynkaBeltCog = this.elem.querySelector('.kary-belt');
        this.karynkaBeltCon = this.elem.querySelector('.kary-opo-belt');
        this.karynkaQuarterCog = this.elem.querySelector('.kary-quarter');
        this.karynkaHline = this.elem.querySelector('.aboutme08-list_article_hline--item');
        this.karynkaAnimate();

        this.hoverDispatcher();
        this.outDispatcher();
        this.clickDispatcher();

        this.slideDownCounter=false;
        this.articleSlideTimer;
    }

    //events
    hoverDispatcher(){
        jquery( this.head ).mouseover((e) => {
            if (!this.noBack) this.animateText(1, e);
        });
    }

    outDispatcher(){
        jquery( this.head ).mouseleave((e) => {
            if (!this.noBack) this.animateTextBack(1, e);
        });
    }

    clickDispatcher(){
        jquery( this.head ).click((e) => {
            if (!this.noBack) {
                this.animateText(10, e);
            }
            if (this.noBack) this.animateTextBack(10, e);
            this.noBack?this.noBack=false:this.noBack=true;
        });
    }

    //print svg
    printKarynka(){
        this.svgContainer.innerHTML=this.svg;
    }

    //prepare text methods

    setTextWithSpans(){
        this.titleAnimText.innerHTML = this.newTitleText;
        this.allSpansInItem=this.titleAnimText.querySelectorAll('span');
        this.allSpansAmount= this.allSpansInItem.length;

        for (let i=0;i<this.allSpansAmount;i++){
            this.newTimeLineForText.add( 
                TweenMax.to(
                    this.allSpansInItem[i], 
                    0.2, 
                    {
                        fontSize: 20,
                        rotation: 360,
                        transformOrigin: "50% 50%",
                        ease: Back.easeNone,
                    }, 
                    (i*0.2)
                )
            );      
        };
        this.newTimeLineForText.paused(true);
    }

    getExistingString(){
        let letters = this.titleText.split('');
        let newLetters = [];
        letters.map((item, index) => {
            item = item===' '?'&nbsp;':item;
            newLetters[index]=`<span class="single-letter">${item}</span>`;
        })
        this.newTitleText = newLetters.join('');
    }

    //text animate methods

    animateText(timescale=1,e){
        this.newTimeLineForText.play().timeScale(timescale);
        this.newTimeLineForKaryBigC.play().timeScale(timescale);
        this.newTimeLineForKaryOpoC.play().timeScale(timescale);
        this.newTimeLineForKaryCogsA.play().timeScale(timescale);
        this.newTimeLineForKaryCogsB.play().timeScale(timescale);
        this.newTimeLineForKaryCogsC.play().timeScale(timescale);
        this.newTimeLineForKarySpec.play().timeScale(timescale);
        this.newTimeLineForKaryQuart.play().timeScale(timescale);
        this.newTimeLineForKaryBelt.play().timeScale(timescale);

        let timerToArticle = timescale===1?((this.allSpansAmount+2)*200):300;
        this.slideArticle(e.currentTarget, true, timerToArticle);
    }

    animateTextBack(timescale=1,e){
        this.newTimeLineForText.reverse().timeScale(timescale);
        this.newTimeLineForKaryBigC.reverse().timeScale(timescale);
        this.newTimeLineForKaryOpoC.reverse().timeScale(timescale);
        this.newTimeLineForKaryCogsA.reverse().timeScale(timescale);
        this.newTimeLineForKaryCogsB.reverse().timeScale(timescale);
        this.newTimeLineForKaryCogsC.reverse().timeScale(timescale);
        this.newTimeLineForKarySpec.reverse().timeScale(timescale);
        this.newTimeLineForKaryQuart.reverse().timeScale(timescale);
        this.newTimeLineForKaryBelt.reverse().timeScale(timescale);

        let timerToArticle = timescale===1?((this.allSpansAmount+2)*200):300;
        this.slideArticle(e.currentTarget, false, timerToArticle);
    }

    slideArticle(etar, dir, timeLeft){
        clearTimeout(this.articleSlideTimer);
        let that = this;
        if (!that.slideDownCounter && dir===true) {
            that.articleSlideTimer = setTimeout(
                ()=>{
                    jquery(jquery(etar).parent()).children('.aboutme08-list_article_body').slideDown();
                    that.slideDownCounter=true;
                },
                timeLeft
            )
        } else if (that.slideDownCounter && dir===false) {
            that.articleSlideTimer = setTimeout(
                ()=>{
                    jquery(jquery(etar).parent()).children('.aboutme08-list_article_body').slideUp();
                    that.slideDownCounter=false;
                },
                timeLeft
            )
        }
    }

    //karynka animate methods
    karynkaAnimate(){
        for (let i=0;i<this.allSpansAmount;i++){

            this.newTimeLineForKaryBigC.add( 
                TweenMax.to(
                    this.karynkaBigCircle, 
                    0.2, 
                    {
                        rotation: ((i+1)*10),
                        transformOrigin: "50% 50%",
                        ease: Back.easeNone,
                    }, 
                    (i*0.2)
                )
            ); 

            this.newTimeLineForKaryOpoC.add( 
                TweenMax.to(
                    this.karynkaOpositeCircle, 
                    0.1, 
                    {
                        rotation: -90,
                        transformOrigin: "50% 50%",
                        ease: Linear.easeNone,
                    }, 
                    (i*0.2)
                )
            );  

            this.newTimeLineForKaryOpoC.add( 
                TweenMax.to(
                    this.karynkaOpositeCircle, 
                    0.1, 
                    {   
                        rotation: 0,
                        transformOrigin: "50% 50%",
                        ease: Linear.easeNone,
                    }, 
                    (i*0.2)
                )
            );

            let dir = i%2===0?-1:1;
            let leng = i%2===0?5:0;
            this.newTimeLineForKarySpec.add( 
                TweenMax.to(
                    this.karynkaSpecCog, 
                    0.2, 
                    {   
                        rotation: dir*360,
                        transformOrigin: "50% 50%",
                        ease: Linear.easeNone,
                    }, 
                    (i*0.2)
                )
            );
            this.newTimeLineForKaryBelt.add( 
                TweenMax.to(
                    this.karynkaBeltCog, 
                    0.2, 
                    {   
                        y: leng,
                        transformOrigin: "0% 50%",
                        ease: Linear.easeNone,
                    }, 
                    (i*0.2)
                )
            );
            this.newTimeLineForKaryQuart.add( 
                TweenMax.to(
                    this.karynkaQuarterCog, 
                    0.2, 
                    {   
                        rotation: dir*-180,
                        transformOrigin: "50% 0%",
                        ease: Linear.easeNone,
                    }, 
                    (i*0.2)
                )
            );
            if (i%2===0){
                this.newTimeLineForKaryCogsA.add( 
                    TweenMax.to(
                        this.karynkaCogA, 
                        0.4, 
                        {   
                            rotation: (i/2)*45,
                            transformOrigin: "50% 50%",
                            ease: Linear.easeNone,
                        }, 
                        (i*0.4)
                    )
                );   
            }
            if (i%2===0){
                this.newTimeLineForKaryCogsB.add( 
                    TweenMax.to(
                        this.karynkaCogB, 
                        0.4, 
                        {   
                            rotation: (i/2)*45,
                            transformOrigin: "50% 50%",
                            ease: Linear.easeNone,
                        }, 
                        (i*0.4)
                    )
                );   
            }
            if (i%2===0){
                this.newTimeLineForKaryCogsC.add( 
                    TweenMax.to(
                        this.karynkaCogC, 
                        0.4, 
                        {   
                            rotation: (i/2)*45,
                            transformOrigin: "50% 50%",
                            ease: Linear.easeNone,
                        }, 
                        (i*0.4)
                    )
                );   
            }
            if (i===this.allSpansAmount-1){
                this.newTimeLineForKaryCogsC.add( 
                    TweenMax.to(
                        this.karynkaHline, 
                        0.4, 
                        {   
                            width: '100%',
                            transformOrigin: "0% 50%",
                            ease: Linear.easeNone,
                        }, 
                        (i*0.4+0.4)
                    )
                );   
            }
        };
        this.newTimeLineForKaryBigC.paused(true);
        this.newTimeLineForKaryOpoC.paused(true);
        this.newTimeLineForKaryCogsA.paused(true);
        this.newTimeLineForKaryCogsB.paused(true);
        this.newTimeLineForKaryCogsC.paused(true);
        this.newTimeLineForKarySpec.paused(true);
        this.newTimeLineForKaryQuart.paused(true);
        this.newTimeLineForKaryBelt.paused(true);

        //this.karynkaHline
    }
}

karynka = `<svg style="width: 100%; height: 100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
<g class="oposite-big-circle">
	<g>
		<path fill="#0066FF" d="M49.5,3C23.819,3,3,23.818,3,49.5S23.819,96,49.5,96C75.181,96,96,75.182,96,49.5S75.181,3,49.5,3z
			 M90.602,63.335l-2.664,6.249l-3.137-1.338c-1.334,2.508-2.928,4.854-4.744,7.008l2.416,2.416l-4.803,4.803l-2.416-2.416
			c-2.363,1.993-4.962,3.715-7.747,5.123l1.273,3.166l-6.302,2.535l-1.271-3.159c-2.662,0.815-5.444,1.352-8.312,1.593v3.42h-6.792
			v-3.42c-3.153-0.265-6.2-0.895-9.102-1.85l-1.338,3.137l-6.248-2.664l1.337-3.137c-2.507-1.334-4.854-2.928-7.008-4.744
			l-2.416,2.416l-4.803-4.803l2.416-2.416c-1.994-2.363-3.715-4.962-5.124-7.747l-3.167,1.273L8.12,62.479l3.157-1.27
			c-0.814-2.663-1.351-5.445-1.593-8.313H6.266v-6.792h3.419c0.266-3.153,0.896-6.2,1.851-9.102l-3.137-1.337l2.664-6.248
			l3.136,1.337c1.334-2.507,2.928-4.854,4.745-7.007l-2.416-2.416l4.803-4.803l2.416,2.416c2.363-1.994,4.961-3.715,7.747-5.124
			l-1.273-3.166l6.302-2.535l1.27,3.158c2.663-0.814,5.445-1.351,8.313-1.593V6.266h6.792v3.419c3.152,0.266,6.199,0.896,9.101,1.85
			l1.338-3.136l6.249,2.664l-1.338,3.136c2.508,1.334,4.854,2.928,7.008,4.745l2.416-2.416l4.803,4.803l-2.416,2.416
			c1.994,2.363,3.715,4.961,5.123,7.746l3.166-1.273l2.535,6.302l-3.158,1.27c0.814,2.663,1.351,5.445,1.592,8.312h3.42v6.792h-3.42
			c-0.265,3.152-0.895,6.199-1.85,9.101L90.602,63.335z"/>
	</g>
	<g>
		<path fill="none" stroke="#FFFFFF" d="M49.5,3C23.819,3,3,23.818,3,49.5S23.819,96,49.5,96C75.181,96,96,75.182,96,49.5
			S75.181,3,49.5,3z M90.602,63.335l-2.664,6.249l-3.137-1.338c-1.334,2.508-2.928,4.854-4.744,7.008l2.416,2.416l-4.803,4.803
			l-2.416-2.416c-2.363,1.993-4.962,3.715-7.747,5.123l1.273,3.166l-6.302,2.535l-1.271-3.159c-2.662,0.815-5.444,1.352-8.312,1.593
			v3.42h-6.792v-3.42c-3.153-0.265-6.2-0.895-9.102-1.85l-1.338,3.137l-6.248-2.664l1.337-3.137
			c-2.507-1.334-4.854-2.928-7.008-4.744l-2.416,2.416l-4.803-4.803l2.416-2.416c-1.994-2.363-3.715-4.962-5.124-7.747l-3.167,1.273
			L8.12,62.479l3.157-1.27c-0.814-2.663-1.351-5.445-1.593-8.313H6.266v-6.792h3.419c0.266-3.153,0.896-6.2,1.851-9.102
			l-3.137-1.337l2.664-6.248l3.136,1.337c1.334-2.507,2.928-4.854,4.745-7.007l-2.416-2.416l4.803-4.803l2.416,2.416
			c2.363-1.994,4.961-3.715,7.747-5.124l-1.273-3.166l6.302-2.535l1.27,3.158c2.663-0.814,5.445-1.351,8.313-1.593V6.266h6.792
			v3.419c3.152,0.266,6.199,0.896,9.101,1.85l1.338-3.136l6.249,2.664l-1.338,3.136c2.508,1.334,4.854,2.928,7.008,4.745
			l2.416-2.416l4.803,4.803l-2.416,2.416c1.994,2.363,3.715,4.961,5.123,7.746l3.166-1.273l2.535,6.302l-3.158,1.27
			c0.814,2.663,1.351,5.445,1.592,8.312h3.42v6.792h-3.42c-0.265,3.152-0.895,6.199-1.85,9.101L90.602,63.335z"/>
	</g>
</g>
<g class="big-circle">
	<polygon fill="#0066FF" stroke="#FFFFFF" points="56.466,0.667 49.5,13 42.534,0.667 	"/>
	<circle fill="none" stroke="#0066FF" stroke-width="1.9597" cx="49.5" cy="49.5" r="48.667"/>
</g>
<g class="kary-opo-belt">
<rect class="kary-belt" x="19.571" y="73.125" fill="#0066FF" stroke="#FFFFFF" width="51.75" height="4.5"/>
</g>
<g class="kary-quarter">
	<g>
		<path fill="#0066FF" d="M57.124,93.043c0.083,0.087,0.154,0.181,0.239,0.266c8.36,8.361,21.917,8.361,30.277,0L72.25,77.918
			L57.124,93.043z"/>
	</g>
	<g>
		<path fill="none" stroke="#FFFFFF" d="M57.124,93.043c0.083,0.087,0.154,0.181,0.239,0.266c8.36,8.361,21.917,8.361,30.277,0
			L72.25,77.918L57.124,93.043z"/>
	</g>
</g>
<g class="kary-big-spec">
	<g>
		<g>
			<path fill="#0066FF" d="M39.257,79.863v-2.977H37.75c-0.106-1.256-0.335-2.475-0.692-3.641l1.386-0.558l-1.111-2.762
				l-1.399,0.563c-0.617-1.22-1.363-2.36-2.236-3.396l1.062-1.062l-2.104-2.104l-1.062,1.062c-0.944-0.796-1.97-1.494-3.069-2.079
				l0.587-1.377l-2.738-1.168l-0.589,1.381c-1.271-0.418-2.604-0.693-3.985-0.81v-1.506h-2.976v1.506
				c-1.255,0.105-2.476,0.335-3.642,0.692l-0.557-1.386l-2.762,1.11l0.563,1.399c-1.22,0.617-2.361,1.363-3.396,2.236l-1.062-1.062
				l-2.104,2.104l1.062,1.062c-0.796,0.943-1.495,1.971-2.079,3.069L3.47,69.575l-1.167,2.737l1.381,0.589
				c-0.418,1.271-0.693,2.604-0.81,3.985H1.368v2.977h1.506c0.106,1.256,0.335,2.475,0.692,3.641l-1.385,0.558l1.11,2.762
				l1.399-0.563c0.617,1.22,1.363,2.36,2.236,3.396l-1.062,1.063l2.104,2.104l1.062-1.062c0.944,0.796,1.971,1.494,3.069,2.079
				l-0.587,1.377l2.737,1.168l0.589-1.381c1.271,0.418,2.605,0.693,3.986,0.81v1.506h2.976v-1.506
				c1.256-0.105,2.476-0.335,3.642-0.692L26,96.507l2.761-1.11l-0.563-1.399c1.22-0.617,2.361-1.363,3.396-2.236l1.062,1.062
				l2.104-2.104l-1.062-1.063c0.796-0.943,1.494-1.971,2.079-3.069l1.377,0.588l1.167-2.737l-1.381-0.589
				c0.418-1.271,0.693-2.604,0.81-3.985H39.257z"/>
		</g>
		<g>
			<path fill="none" stroke="#FFFFFF" stroke-width="0.4456" d="M39.257,79.863v-2.977H37.75c-0.106-1.256-0.335-2.475-0.692-3.641
				l1.386-0.558l-1.111-2.762l-1.399,0.563c-0.617-1.22-1.363-2.36-2.236-3.396l1.062-1.062l-2.104-2.104l-1.062,1.062
				c-0.944-0.796-1.97-1.494-3.069-2.079l0.587-1.377l-2.738-1.168l-0.589,1.381c-1.271-0.418-2.604-0.693-3.985-0.81v-1.506h-2.976
				v1.506c-1.255,0.105-2.476,0.335-3.642,0.692l-0.557-1.386l-2.762,1.11l0.563,1.399c-1.22,0.617-2.361,1.363-3.396,2.236
				l-1.062-1.062l-2.104,2.104l1.062,1.062c-0.796,0.943-1.495,1.971-2.079,3.069L3.47,69.575l-1.167,2.737l1.381,0.589
				c-0.418,1.271-0.693,2.604-0.81,3.985H1.368v2.977h1.506c0.106,1.256,0.335,2.475,0.692,3.641l-1.385,0.558l1.11,2.762
				l1.399-0.563c0.617,1.22,1.363,2.36,2.236,3.396l-1.062,1.063l2.104,2.104l1.062-1.062c0.944,0.796,1.971,1.494,3.069,2.079
				l-0.587,1.377l2.737,1.168l0.589-1.381c1.271,0.418,2.605,0.693,3.986,0.81v1.506h2.976v-1.506
				c1.256-0.105,2.476-0.335,3.642-0.692L26,96.507l2.761-1.11l-0.563-1.399c1.22-0.617,2.361-1.363,3.396-2.236l1.062,1.062
				l2.104-2.104l-1.062-1.063c0.796-0.943,1.494-1.971,2.079-3.069l1.377,0.588l1.167-2.737l-1.381-0.589
				c0.418-1.271,0.693-2.604,0.81-3.985H39.257z"/>
		</g>
	</g>
	<circle fill="#0066FF" stroke="#FFFFFF" stroke-width="0.8763" cx="20.313" cy="78.375" r="12.488"/>
</g>
<circle fill="#0066FF" stroke="#FFFFFF" cx="72.25" cy="78.375" r="6.93"/>
<g  class="kary-cogs">
	<g>
		<g>
			<path fill="#0066FF" d="M59.778,37.851v-3.452h-1.746c-0.123-1.456-0.389-2.87-0.803-4.221l1.607-0.646l-1.288-3.202
				l-1.622,0.652c-0.716-1.414-1.581-2.737-2.594-3.938l1.231-1.231l-2.44-2.44l-1.231,1.231c-1.094-0.923-2.283-1.732-3.557-2.41
				l0.681-1.597l-3.175-1.353l-0.683,1.6c-1.474-0.485-3.02-0.804-4.621-0.939v-1.745h-3.451v1.745
				c-1.456,0.123-2.87,0.389-4.223,0.803l-0.646-1.606l-3.202,1.288l0.652,1.621c-1.414,0.715-2.737,1.581-3.937,2.593L23.5,19.373
				l-2.44,2.44l1.231,1.231c-0.923,1.094-1.733,2.285-2.411,3.558l-1.597-0.681l-1.353,3.174l1.6,0.682
				c-0.485,1.474-0.804,3.02-0.939,4.621h-1.745v3.452h1.745c0.123,1.456,0.389,2.871,0.803,4.223l-1.606,0.646l1.287,3.201
				l1.622-0.652c0.716,1.415,1.581,2.737,2.594,3.938l-1.231,1.231l2.44,2.44l1.231-1.23c1.094,0.923,2.285,1.732,3.559,2.41
				l-0.681,1.597l3.174,1.354l0.683-1.602c1.474,0.484,3.02,0.803,4.621,0.938v1.746h3.451v-1.746
				c1.456-0.123,2.871-0.389,4.223-0.803l0.646,1.607l3.2-1.288l-0.652-1.622c1.414-0.716,2.737-1.581,3.938-2.594l1.231,1.231
				l2.44-2.44l-1.231-1.231c0.923-1.094,1.733-2.285,2.411-3.558l1.597,0.681l1.354-3.174l-1.602-0.683
				c0.484-1.473,0.803-3.02,0.938-4.621H59.778z"/>
		</g>
		<g>
			<path fill="none" stroke="#FFFFFF" stroke-width="0.5166" d="M59.778,37.851v-3.452h-1.746c-0.123-1.456-0.389-2.87-0.803-4.221
				l1.607-0.646l-1.288-3.202l-1.622,0.652c-0.716-1.414-1.581-2.737-2.594-3.938l1.231-1.231l-2.44-2.44l-1.231,1.231
				c-1.094-0.923-2.283-1.732-3.557-2.41l0.681-1.597l-3.175-1.353l-0.683,1.6c-1.474-0.485-3.02-0.804-4.621-0.939v-1.745h-3.451
				v1.745c-1.456,0.123-2.87,0.389-4.223,0.803l-0.646-1.606l-3.202,1.288l0.652,1.621c-1.414,0.715-2.737,1.581-3.937,2.593
				L23.5,19.373l-2.44,2.44l1.231,1.231c-0.923,1.094-1.733,2.285-2.411,3.558l-1.597-0.681l-1.353,3.174l1.6,0.682
				c-0.485,1.474-0.804,3.02-0.939,4.621h-1.745v3.452h1.745c0.123,1.456,0.389,2.871,0.803,4.223l-1.606,0.646l1.287,3.201
				l1.622-0.652c0.716,1.415,1.581,2.737,2.594,3.938l-1.231,1.231l2.44,2.44l1.231-1.23c1.094,0.923,2.285,1.732,3.559,2.41
				l-0.681,1.597l3.174,1.354l0.683-1.602c1.474,0.484,3.02,0.803,4.621,0.938v1.746h3.451v-1.746
				c1.456-0.123,2.871-0.389,4.223-0.803l0.646,1.607l3.2-1.288l-0.652-1.622c1.414-0.716,2.737-1.581,3.938-2.594l1.231,1.231
				l2.44-2.44l-1.231-1.231c0.923-1.094,1.733-2.285,2.411-3.558l1.597,0.681l1.354-3.174l-1.602-0.683
				c0.484-1.473,0.803-3.02,0.938-4.621H59.778z"/>
		</g>
	</g>
	<circle fill="#0066FF" stroke="#FFFFFF" stroke-width="1.0161" cx="37.812" cy="36.125" r="14.48"/>
</g>
<g  class="kary-cogs">
	<g>
		<g>
			<path fill="#0066FF" d="M81.757,58.219v-1.938h-0.98c-0.069-0.816-0.218-1.609-0.45-2.367l0.903-0.363l-0.723-1.794l-0.91,0.366
				c-0.401-0.793-0.887-1.535-1.454-2.208l0.69-0.691l-1.368-1.369l-0.691,0.691c-0.613-0.518-1.281-0.972-1.995-1.352l0.382-0.896
				l-1.78-0.759l-0.383,0.898c-0.826-0.272-1.693-0.451-2.591-0.526v-0.979h-1.938v0.979c-0.815,0.069-1.608,0.218-2.366,0.45
				l-0.362-0.901l-1.796,0.723l0.365,0.909c-0.793,0.401-1.535,0.887-2.209,1.455l-0.69-0.691l-1.368,1.369l0.69,0.69
				c-0.518,0.613-0.972,1.281-1.352,1.995l-0.896-0.382l-0.76,1.781l0.898,0.383c-0.272,0.826-0.45,1.692-0.526,2.59h-0.979v1.938
				h0.979c0.069,0.816,0.218,1.609,0.45,2.367l-0.902,0.363l0.723,1.794l0.91-0.366c0.401,0.794,0.886,1.536,1.454,2.209l-0.69,0.69
				l1.368,1.369l0.691-0.691c0.613,0.518,1.28,0.972,1.995,1.353l-0.382,0.895l1.78,0.761l0.383-0.898
				c0.826,0.271,1.693,0.45,2.591,0.526v0.979h1.938V68.59c0.816-0.069,1.609-0.218,2.367-0.45l0.363,0.902l1.794-0.723l-0.366-0.91
				c0.794-0.401,1.536-0.887,2.209-1.455l0.691,0.691l1.368-1.369l-0.69-0.69c0.517-0.613,0.971-1.281,1.351-1.995l0.896,0.382
				l0.76-1.781l-0.898-0.383c0.271-0.826,0.449-1.692,0.525-2.59H81.757z"/>
		</g>
		<g>
			<path fill="none" stroke="#FFFFFF" stroke-width="0.2897" d="M81.757,58.219v-1.938h-0.98c-0.069-0.816-0.218-1.609-0.45-2.367
				l0.903-0.363l-0.723-1.794l-0.91,0.366c-0.401-0.793-0.887-1.535-1.454-2.208l0.69-0.691l-1.368-1.369l-0.691,0.691
				c-0.613-0.518-1.281-0.972-1.995-1.352l0.382-0.896l-1.78-0.759l-0.383,0.898c-0.826-0.272-1.693-0.451-2.591-0.526v-0.979
				h-1.938v0.979c-0.815,0.069-1.608,0.218-2.366,0.45l-0.362-0.901l-1.796,0.723l0.365,0.909c-0.793,0.401-1.535,0.887-2.209,1.455
				l-0.69-0.691l-1.368,1.369l0.69,0.69c-0.518,0.613-0.972,1.281-1.352,1.995l-0.896-0.382l-0.76,1.781l0.898,0.383
				c-0.272,0.826-0.45,1.692-0.526,2.59h-0.979v1.938h0.979c0.069,0.816,0.218,1.609,0.45,2.367l-0.902,0.363l0.723,1.794
				l0.91-0.366c0.401,0.794,0.886,1.536,1.454,2.209l-0.69,0.69l1.368,1.369l0.691-0.691c0.613,0.518,1.28,0.972,1.995,1.353
				l-0.382,0.895l1.78,0.761l0.383-0.898c0.826,0.271,1.693,0.45,2.591,0.526v0.979h1.938V68.59c0.816-0.069,1.609-0.218,2.367-0.45
				l0.363,0.902l1.794-0.723l-0.366-0.91c0.794-0.401,1.536-0.887,2.209-1.455l0.691,0.691l1.368-1.369l-0.69-0.69
				c0.517-0.613,0.971-1.281,1.351-1.995l0.896,0.382l0.76-1.781l-0.898-0.383c0.271-0.826,0.449-1.692,0.525-2.59H81.757z"/>
		</g>
	</g>
	<circle fill="#0066FF" stroke="#FFFFFF" stroke-width="0.5699" cx="69.438" cy="57.25" r="8.121"/>
</g>
<g class="kary-cogs">
	<g>
		<g>
			<path fill="#0066FF" d="M83.095,34.126v-1.753h-0.888c-0.062-0.739-0.197-1.458-0.406-2.145l0.815-0.328l-0.654-1.626
				l-0.823,0.331c-0.363-0.718-0.803-1.39-1.317-2l0.626-0.625l-1.24-1.239l-0.625,0.625c-0.556-0.469-1.16-0.88-1.807-1.224
				l0.346-0.811l-1.613-0.688l-0.347,0.813c-0.749-0.246-1.534-0.408-2.347-0.477v-0.887h-1.754v0.887
				c-0.738,0.063-1.457,0.197-2.145,0.407l-0.328-0.815l-1.626,0.654l0.331,0.824c-0.719,0.364-1.391,0.803-2,1.317l-0.625-0.625
				l-1.24,1.239l0.626,0.625c-0.469,0.556-0.88,1.161-1.224,1.808l-0.813-0.346L61.33,29.68l0.814,0.347
				c-0.247,0.749-0.408,1.534-0.477,2.347H60.78v1.753h0.888c0.062,0.739,0.197,1.458,0.406,2.145L61.259,36.6l0.653,1.626
				l0.824-0.331c0.363,0.719,0.803,1.391,1.317,2l-0.626,0.625l1.24,1.239l0.625-0.625c0.556,0.469,1.16,0.88,1.808,1.225
				l-0.346,0.811l1.612,0.688l0.347-0.813c0.749,0.246,1.534,0.408,2.347,0.477v0.887h1.754v-0.887
				c0.739-0.063,1.457-0.197,2.145-0.407l0.328,0.815l1.626-0.653l-0.331-0.824c0.719-0.363,1.391-0.803,2-1.317l0.625,0.625
				l1.24-1.239l-0.626-0.625c0.469-0.557,0.88-1.161,1.224-1.809l0.813,0.347l0.688-1.612l-0.814-0.347
				c0.247-0.749,0.408-1.534,0.477-2.347H83.095z"/>
		</g>
		<g>
			<path fill="none" stroke="#FFFFFF" stroke-width="0.2624" d="M83.095,34.126v-1.753h-0.888c-0.062-0.739-0.197-1.458-0.406-2.145
				l0.815-0.328l-0.654-1.626l-0.823,0.331c-0.363-0.718-0.803-1.39-1.317-2l0.626-0.625l-1.24-1.239l-0.625,0.625
				c-0.556-0.469-1.16-0.88-1.807-1.224l0.346-0.811l-1.613-0.688l-0.347,0.813c-0.749-0.246-1.534-0.408-2.347-0.477v-0.887h-1.754
				v0.887c-0.738,0.063-1.457,0.197-2.145,0.407l-0.328-0.815l-1.626,0.654l0.331,0.824c-0.719,0.364-1.391,0.803-2,1.317
				l-0.625-0.625l-1.24,1.239l0.626,0.625c-0.469,0.556-0.88,1.161-1.224,1.808l-0.813-0.346L61.33,29.68l0.814,0.347
				c-0.247,0.749-0.408,1.534-0.477,2.347H60.78v1.753h0.888c0.062,0.739,0.197,1.458,0.406,2.145L61.259,36.6l0.653,1.626
				l0.824-0.331c0.363,0.719,0.803,1.391,1.317,2l-0.626,0.625l1.24,1.239l0.625-0.625c0.556,0.469,1.16,0.88,1.808,1.225
				l-0.346,0.811l1.612,0.688l0.347-0.813c0.749,0.246,1.534,0.408,2.347,0.477v0.887h1.754v-0.887
				c0.739-0.063,1.457-0.197,2.145-0.407l0.328,0.815l1.626-0.653l-0.331-0.824c0.719-0.363,1.391-0.803,2-1.317l0.625,0.625
				l1.24-1.239l-0.626-0.625c0.469-0.557,0.88-1.161,1.224-1.809l0.813,0.347l0.688-1.612l-0.814-0.347
				c0.247-0.749,0.408-1.534,0.477-2.347H83.095z"/>
		</g>
	</g>
	<circle fill="#0066FF" stroke="#FFFFFF" stroke-width="0.5161" cx="71.938" cy="33.25" r="7.355"/>
</g>
</svg>`;

allTitles();