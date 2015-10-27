
window.onload = function(){
  document.getElementById('searchText').onkeypress = searchText;
};

function searchText(){
    var search = document.getElementById('searchText').value;
    if (search) {
chrome.tabs.query({active: true, lastFocusedWindow: true }, function (tabs) {
alert("Data Received");      
      chrome.tabs.executeScript(tabs[0].id, {file: 'js/search.js' }, function() {
alert("Data Sending...!!");
  
                chrome.tabs.sendMessage(tabs[0].id, {method: 'search',searchText: search});
            });
        });
    }
}

