import jquery from 'jquery';

class SearchPanel {
    constructor() {
        this.panel = jquery ('#search-panel01-b');
        this.searchIcon = jquery('#search-icon');
        this.closeIcon = jquery('#close-search-icon');
        this.searchMode=false;
        this.clickDispatcher();
    }
    clickDispatcher(){
        this.searchIcon.click(
            ()=>{
                this.panel.fadeIn();
                this.searchMode=true;
            }
        );
        this.closeIcon.click(
            ()=>{
                this.panel.fadeOut();
                this.searchMode=false;
            }
        );
    }
}

let searchModeOn = new SearchPanel;