
window.onload = function(){
  document.getElementById('searchBtn').onclick = searchText;
};

function searchText(){
    var search = document.getElementById('searchText').value;
    if (search) {
chrome.tabs.query({active: true, lastFocusedWindow: true }, function (tabs) {
   
      chrome.tabs.executeScript(tabs[0].id, {file: 'js/search.js' }, function() {

                chrome.tabs.sendMessage(tabs[0].id, {method: 'search',searchText: search});
            });
        });
    }
}

