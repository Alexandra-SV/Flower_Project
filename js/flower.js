//BACK TO TOP BUTTON -- ALEX
    var mybutton = document.getElementById("btn-back-to-top");
    window.onscroll = function () {
        scrollFunction();
    };
    //Shows the button when scrolling
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    mybutton.addEventListener("click", backToTop);
    //Scrolls back to top
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

//FORM VALIDATION -- BOOTSTRAP
    (() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
        }, false)
    })
    })()

//TOOLTIPS -- BOOTSTRAP
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//RESET BUTTON -- ALEX
    bReset = document.querySelectorAll('[type=reset]');
    for (button of bReset) {
        button.onclick = resetValidation;
    }
    function resetValidation(){
        const forms = document.querySelectorAll('.was-validated')
        Array.from(forms).forEach(form => {
            form.classList.remove('was-validated');
        })
    }

//PLACEHOLDER AND SEARCH TOOLTIP -- ALEX
    bSearch = document.getElementById('button-search-mobile');
    bSearch.addEventListener('click', showLoading, false);
    //Shows the placeholders and spinner when the search icon is clicked
    function showLoading(){
        placeholder = document.getElementsByClassName('placeholder-glow')[0];
        placeholder.classList.remove('d-none');
        spinner = document.getElementsByClassName('spinner-border')[0];
        spinner.parentElement.classList.remove('d-none');
        //Hides the placeholders and spinner when clicked
        placeholder.onclick = function(){
            placeholder.classList.add('d-none');
            spinner.parentElement.classList.add('d-none');
            bSearch.previousElementSibling.value = '';
        };
    }

//COOKIES MODAL -- ALFONSO
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