var rejectButton=document.getElementById('reject');
    rejectButton.addEventListener("click",checkButton,false);
var saveButton=document.getElementById('save');
    saveButton.addEventListener("click",checkButton,false);
var acceptButton=document.getElementById('accept');
    acceptButton.addEventListener("click",checkButton,false);

function checkButton() {
    if(this.id=="accept" || this.id=="save")
        document.cookie = "cookies.js=true; path=/";
    else
    $('#cookie').modal('hide');
}
//Show cookie modal
    $(document).ready(function(){
        if(!checkCookie("cookies.js"))
            $('#cookie').modal('show');   
    });
//checkCookie
function checkCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) 
            return true;
    }
    return false;
}
//Tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));