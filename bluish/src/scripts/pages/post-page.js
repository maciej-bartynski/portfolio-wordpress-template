
import jquery from 'jquery';
import '../../subpage.js';

class ComentsAndInfoPanel {
    constructor() {
        this.inputField = jquery('[name="comment"]');
        this.comment = jquery('#comm');
        this.openCommentsPanel = jquery('#open-com-panel');
        this.addCommentAndCloseCommentsPanel = jquery('#add-comm');
        this.closeCommentsPanel = jquery('#close-comm');
        this.commentsPanel=jquery('#add-com-panel');
        this.dataPanel=jquery('#added-com-panel');
        this.removeComment=jquery('#delete-comm');
        this.prepare = () => {
            this.commentsPanel.css('display', 'none');
            this.dataPanel.css('display', 'none');
            this.ifIsComment();
        }
        this.prepare();
        this.clicksDispatcher();
    }
    //events
    clicksDispatcher(){
        this.openCommentsPanel.click((e)=>{
            this.openComPanel();
        });
        this.closeCommentsPanel.click((e)=>{
            this.closeComPanel();
        });
        this.addCommentAndCloseCommentsPanel.click((e)=>{
            this.addComClosePanel();
        });
        this.removeComment.click((e)=>{
            this.removeCom();
        });
    }
    //methods
    ifIsComment(){
        let com = window.localStorage.getItem('com');
        if (com){
            this.comment.text(window.localStorage.getItem('com'));
            this.dataPanel.slideDown();
        } else {
            this.dataPanel.slideUp();
            this.comment.text('');
        }
    }
    openComPanel(){
        this.commentsPanel.slideDown();
        this.ifIsComment();
    }
    closeComPanel(){
        this.commentsPanel.slideUp();
        this.ifIsComment();
    }
    addComClosePanel(){
        this.commentsPanel.slideUp();
        this.dataPanel.slideDown();
        window.localStorage.setItem('com', this.inputField.val());
        this.ifIsComment();
    }
    removeCom(){
        window.localStorage.removeItem('com');
        this.ifIsComment();
    }
}

let coms = new ComentsAndInfoPanel;