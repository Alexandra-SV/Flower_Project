//BACK TO TOP BUTTON
    var mybutton = document.getElementById("btn-back-to-top");
    window.onscroll = function () {
    scrollFunction();
    };
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }
    mybutton.addEventListener("click", backToTop);
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
//FORM VALIDATION
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
//TOOLTIPS
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
/*RESET BUTTON*/
    bReset = document.querySelector('[type=reset]');
    bReset.onclick = resetColor;
    function resetColor(){
        const forms = document.querySelectorAll('.was-validated')
        Array.from(forms).forEach(form => {
            form.classList.remove('was-validated');
        })
    }
/*PLACEHOLDER AND SEARCH TOOLTIP*/
    bSearch = document.getElementById('button-search-mobile');
    bSearch.addEventListener('click', showLoading, false);
    function showLoading(){
        placeholder = document.getElementsByClassName('placeholder-glow')[0];
        placeholder.classList.remove('d-none');
        spinner = document.getElementsByClassName('spinner-border')[0];
        spinner.parentElement.classList.remove('d-none');
        placeholder.onclick = function(){
            placeholder.classList.add('d-none');
            spinner.parentElement.classList.add('d-none');
            bSearch.previousElementSibling.value = '';
        };
    }
