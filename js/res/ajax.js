function getJSON(url, message) {
    setRequest = function(){
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        }
        else{
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    onReadyChange = function(){
        if( (request.readyState == 4) && (request.status ==200) ){
            if(request.responseText != "" ){
                data = JSON.parse(request.responseText);
                request.reply = data;
            }
        }
    }
    var request = setRequest();
    request.onreadystatechange = function(){ onReadyChange(); }
    request.open("get", url+"?"+message, false );
    request.send(null);
    return request.reply;
}

function getHTML(url, message) {
    setRequest = function(){
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        }
        else{
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    onReadyChange = function(){
        if( (request.readyState == 4) && (request.status ==200) ){
            if(request.responseText != "" ){
                data = request.responseText;
                request.reply = data;
            }
        }
    }
    var request = setRequest();
    request.onreadystatechange = function(){ onReadyChange(); }
    request.open("get", url+"?"+message, false );
    request.send(null);
    return request.reply;
}


