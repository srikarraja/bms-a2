chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  // message.searchText is the text that was captured in the popup    
  // Search/Highlight code goes here

alert(searchText);
function search(searchTerm, selector) {
    if(searchTerm) {        
        var selector = selector || "body";                             //use body as selector if none provided
        var searchTermRegEx = new RegExp(searchTerm,"ig");
        var matches = $(selector).text().match(searchTermRegEx);
        if(matches) {
            $('.highlighted').removeClass('highlighted');     //Remove old search highlights
                $(selector).html($(selector).html()
                    .replace(searchTermRegEx, "<span class='highlighted'>"+searchTerm+"</span>"));
            if($('.highlighted:first').length) {             //if match found, scroll to where the first one appears
                $(window).scrollTop($('.highlighted:first').position().top);
            }
            return true;
        }
    }
    return false;
}
});
