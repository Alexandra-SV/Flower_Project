/*PAGINATION CONTROLS*/
    pageLinks = document.getElementsByTagName('section')[1].getElementsByTagName('nav')[0].getElementsByTagName('a');
    listItems = document.getElementsByTagName('section')[1].getElementsByTagName('nav')[0].getElementsByTagName('li');
    for (let i = 0; i < pageLinks.length; i++) {
        pageLinks[i].addEventListener('click', movePage, false);
    }
    function movePage(e){
        e.preventDefault();
        var pageID = this.href;
        var pages = document.getElementsByTagName('section')[1].querySelectorAll('[id^=events]');
        for (let i = 0; i < pages.length; i++) {
            if(pageID.includes(pages[i].id)){
                document.getElementById('events1').classList = 'row text-center d-none';
                pages[i].classList.toggle('d-none');
                pageLinks[i].parentElement.classList = 'page-item active';
                pageLinks[i].parentElement.setAttribute('aria-current', 'page');
            }else{
                pages[i].classList = 'row text-center d-none';
                pageLinks[i].parentElement.classList = 'page-item';
                pageLinks[i].parentElement.setAttribute('aria-current', 'false');
            }
        }
    }