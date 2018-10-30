import $ from 'jquery';


class QuestionBelt {
    constructor(){
        this.allQuestionBelts = $('.questions06_list--item .question--wrapper');
        this.isClicked=null;

        this.beforeClick();
        this.clickDispatcher();
    }

    //events
    clickDispatcher(){
        this.allQuestionBelts.children('.question--head').click((e)=>{
            if (this.isClicked){
                if (e.currentTarget===this.isClicked){
                    this.beforeClick();
                    return;
                };
            }
            this.beforeClick();
            $(e.currentTarget).addClass('isActive');
            $($(e.currentTarget).parent()).children('.question_answer--wrapper').slideDown();
            this.isClicked=e.currentTarget;
        });
    }

    //methods
    beforeClick(){
        this.allQuestionBelts.children('.question--head').removeClass('isActive');
        this.allQuestionBelts.children('.question_answer--wrapper').slideUp();
        this.isClicked=false;
    }
}

let guestions = new QuestionBelt;