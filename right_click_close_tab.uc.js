/* Firefox userChrome script
 * Right-clicking on tab button to close tab
 * Shift + right-clicking to popup menu
 * Tested on Firefox 91
 * Author: garywill (https://garywill.github.io)
 */

console.log("right_click_close_tab.js");

(() => {

    gBrowser.tabContainer.addEventListener("TabOpen", eventTabAdded, false);
    function eventTabAdded(event) {
        var tab = event.target;
        tab.addEventListener('click', onTabEvent);
        tab.addEventListener('contextmenu', onTabEvent);
    }
    
    
    function onTabEvent(event) {
        //console.log(event.type);
        if (event.button != 2 || event.shiftKey  ) 
            return;
            
        event.preventDefault();
        event.stopPropagation();
        
        if (event.type == 'click')
            gBrowser.removeTab(this, {animate: true});
    }
    
    gBrowser.tabContainer.querySelectorAll('tab').forEach( function(tab, index) {
        tab.addEventListener('click', onTabEvent);
        tab.addEventListener('contextmenu', onTabEvent);
    });
    
})();

