gBrowser.tabContainer.addEventListener('click', function(event) {
    if (event.button != 2) return;
    if (event.target.localName == 'tab' && event.button == 2) {
        event.preventDefault();
        event.stopPropagation();
        gBrowser.removeTab(event.target, {animate: true});
    }
}); 

gBrowser.tabContainer.addEventListener('contextmenu', function(event) {
    if (event.target.localName == 'tab' && event.button == 2) {
        event.preventDefault();
        event.stopPropagation();
    }
}); 
