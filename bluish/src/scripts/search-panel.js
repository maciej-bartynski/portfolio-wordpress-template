import jquery from 'jquery';
import zenscroll from 'zenscroll';
class SearchPanel {
    constructor() {
        this.panel = jquery ('#search-panel01-b');
        this.searchIcon = jquery('#search-icon');
        this.closeIcon = jquery('#close-search-icon');
        this.searchMode=false;
        this.timer;
        this.clickDispatcher();
    }
    clickDispatcher(){
        this.searchIcon.click(
            ()=>{
                zenscroll.toY(0, 0)
                this.panel.fadeIn();
                this.searchMode=true;
                //this.timer = setTimeout(()=>{zenscroll.toY(0, 0)}, 800);
            }
        );
        this.closeIcon.click(
            ()=>{
                this.panel.fadeOut();
                this.searchMode=false;
                //clearTimeout(this.timer);
            }
        );
    }
}

let searchModeOn = new SearchPanel;