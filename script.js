// script.js
const searchInput = document.getElementById('mainsearchinputid');
const suggestionsList = document.getElementById('suggestions');
searchInput.focus();
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value;
    if (searchTerm.length === 0) {
        CleanInput();
        return;
    }
    suggestions.style.display="block";
    cleaninputid.style.display="block";
    mainsearchinputid.style.borderRadius="8px 8px 0 0";
    mainsearchbtnid.style.borderRadius="0 8px 0px 0";
    const apiUrl = `http://suggestion.baidu.com/su?wd=${searchTerm}&cb=suggestionsHandler`;
    const script = document.createElement('script');
    script.src = apiUrl;
    document.body.appendChild(script);
});

function suggestionsHandler(data) {
    const suggestions = data.s;
    const html = suggestions.map(suggestion => `<li>${suggestion}</li>`).join('');
    suggestionsList.innerHTML = html;
}

cleaninputid.addEventListener('click',function(){
    CleanInput();
});
function CleanInput(){
    suggestionsList.innerHTML = '';
    mainsearchinputid.value="";
    suggestions.style.display="none";
    cleaninputid.style.display="none";
    mainsearchinputid.style.borderRadius="8px";
    mainsearchbtnid.style.borderRadius="0 8px 8px 0";
    searchInput.focus();
}

htmllogoid.addEventListener('click',function(event){
    let searchUrl = 'https://www.baidu.com/s?wd=百度热搜';
    window.open(searchUrl, '_self');
});

suggestions.addEventListener('click',function(event){
    mainsearchinputid.value=event.target.innerText;
    let searchUrl = 'https://www.baidu.com/s?wd=' +mainsearchinputid.value;
    window.open(searchUrl, '_self');
});

mainsearchbtnid.addEventListener('click',function(){
    let str=searchInput.value.trim();
    if(str.length===0){
        location.reload();
        return;
    }else{
        let searchUrl = 'https://www.baidu.com/s?wd=' +mainsearchinputid.value;
        window.open(searchUrl, '_self');
    }

});
