//Show cookie modal
    $(document).ready(function(){
        
        $('#cookie').modal('show');   
    });
//Tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    tooltipTriggerList.forEach(tool => {
        new bootstrap.Tooltip(tool);
    });
