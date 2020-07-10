/* Firefox userChrome script
 * Right-clicking on tab button to close tab
 * Tested on Firefox 78
 * Author: garywill (https://github.com/garywill)
 */

console.log("right_click_close_tab.js");

(() => {
    
    gBrowser.tabContainer.addEventListener('click', function(event) {
        
        if (event.button != 2 || event.shiftKey  ) return;
        
        for ( var obj = event.target; obj.id != "tabbrowser-tabs" ; obj = obj.parentNode )
        {
            if ( obj.classList.contains("tabbrowser-tab") ) {
                event.preventDefault();
                event.stopPropagation();
                gBrowser.removeTab(obj, {animate: true});
                break;
            }
        }
        
    }); 

    
    gBrowser.tabContainer.addEventListener('contextmenu', function(event) {
        if (event.button != 2 || event.shiftKey  ) return;
        
        for ( var obj = event.target; obj.id != "tabbrowser-tabs" ; obj = obj.parentNode )
        {
            if ( obj.classList.contains("tabbrowser-tab") ) {
                event.preventDefault();
                event.stopPropagation();
                break;
            }
        }
    }); 
    
    
})();

