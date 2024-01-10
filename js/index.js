//PAGINATION CONTROLS -- ALEX
    //Grabs all page links (1-2-3) to add an onclick event to change the page
    pageLinks = document.getElementsByTagName('section')[0].getElementsByTagName('nav')[0].getElementsByTagName('a');
    for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].addEventListener('click', movePage, false);
    }
    function movePage(e){
        //Prevents from reloading the page when clicking an <a> tag
        e.preventDefault();
        //Grabs the clicked page's id to know which one to move to (events1, events2 or events3)
        var pageID = this.href;
        //Grabs all pages to find the one to move to
        var pages = document.getElementsByTagName('section')[0].querySelectorAll('[id^=events]');
        for (let i = 0; i < pages.length; i++) {
            //Checks if the clicked page's id is the correct one to change the page
            if(pageID.includes(pages[i].id)){
                pages[i].classList.remove('d-none');
                pageLinks[i].parentElement.classList.add('active');
                pageLinks[i].parentElement.setAttribute('aria-current', 'page');
            }else{//If it's not the correct one, it hides the page
                pages[i].classList.add('d-none');
                pageLinks[i].parentElement.classList.remove('active');
                pageLinks[i].parentElement.setAttribute('aria-current', 'false');
            }
        }
    }