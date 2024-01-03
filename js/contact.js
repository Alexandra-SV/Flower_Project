comunidadesAutonomas = [
    'Cataluña',
    'Comunidad de Madrid',
    'Andalucía',
    'País Vasco',
    'Comunidad Valenciana',
    'Galicia',
    'Castilla y León',
    'Castilla-La Mancha',
    'Canarias',
    'Asturias'
];
municipios = {
    'Cataluña': ['Barcelona', 'Girona', 'Tarragona'],
    'Comunidad de Madrid': ['Madrid', 'Alcalá de Henares', 'Móstoles'],
    'Andalucía': ['Sevilla', 'Málaga', 'Granada'],
    'País Vasco': ['Bilbao', 'Vitoria-Gasteiz', 'San Sebastián'],
    'Comunidad Valenciana': ['Valencia', 'Alicante', 'Castellón'],
    'Galicia': ['A Coruña', 'Vigo', 'Santiago de Compostela'],
    'Castilla y León': ['Valladolid', 'León', 'Salamanca'],
    'Castilla-La Mancha': ['Toledo', 'Albacete', 'Ciudad Real'],
    'Canarias': ['Las Palmas de Gran Canaria', 'Santa Cruz de Tenerife', 'San Cristóbal de La Laguna'],
    'Asturias': ['Oviedo', 'Gijón', 'Avilés']
};
events = [
    'Wedding',
    'Banquet',
    'Funeral',
    'Office',
    'Holiday',
    'Party'
];
issues = [
    'Product Quality',
    'Delivery Issues',
    'Customer Service',
    'Payment Issues',
    'Customization Problems',
    'Packaging',
    'Website or Technical Issues',
    'Other'
];
commentsArr={
    'Alice': 'The flower arrangements are absolutely stunning!',
    'Alf': 'This shop has the friendliest staff and the most beautiful bouquets.',
    'Alex': 'I always find unique and gorgeous flowers at \"Flower\".',
    'Diana': '\"Flower\" never disappoints. Their flowers brighten my day!'
};
resolutions = [
    'Refund ',
    'Replacement ',
    'Discount for Future Purchase',
    'Store Credit'
];

    var currentDate = new Date().toLocaleDateString('en-CA');
        document.getElementById('date').min = currentDate;
    community=document.getElementById('CCAA');
        community.addEventListener("change",municipalityLoad,false);
    municipality=document.getElementById('municipality');
    eventType=document.getElementById('Event');
    issueSelect=document.getElementById('incident');
    comments=document.getElementById('coment');
        document.getElementById('drButton').addEventListener('click',keepComent,false);
    resolution=document.getElementById('resolution');
    communityLoad();
    commentLoad();
    validates();
    optionLoad(events,eventType);
    optionLoad(issues,issueSelect);
    optionLoad(resolutions,resolution);

//Load information
    /**
     * @function optionLoad
     *
     * Vuelca los elementos de un array en un option para
     * añadirlos a un elemento HTML
     *
     * @param Array values
     * @param Object element
     *
     */
    function optionLoad(values,element) {
        for (val of values) {
            var option=document.createElement('option');
                option.value=val;
                option.textContent=val;
            element.appendChild(option);
        }
    }
    function communityLoad() {
        optionLoad(comunidadesAutonomas,community);
        municipalityLoad(true);
    }
    function municipalityLoad(first=false) {
        municipality.innerHTML="";
        var keyMunicipios;
        if (first) keyMunicipios=community.value;
        else  keyMunicipios=this.value;
        optionLoad(municipios[keyMunicipios],municipality);
    }
//Comments functionality
    function commentLoad() {
        comments.innerHTML="";
        if(sessionStorage.length!=0){
            for (var i = 0; i < sessionStorage.length; i++) {
                var user = sessionStorage.key(i);
                var comment = sessionStorage.getItem(user);
                var p=document.createElement('p');
                    p.innerHTML="<span class='p-1'><b>"+user+"</b></span><span class='text-white p-2'>"+comment+"</span>";
                comments.appendChild(p);
            }
        }
        for (comentUser in commentsArr) {
            var p=document.createElement('p');
                p.innerHTML="<span class='p-1'><b>"+comentUser+"</b></span><span class='text-white p-1'>"+commentsArr[comentUser]+"</span>";
            comments.appendChild(p);
        }
    }
    function keepComent() {
        var form=this.parentElement;
         if(form.checkValidity()){
             var user=document.getElementById('dropdownUser').value;
             var comment=document.getElementById('dropdownComment').value;
             sessionStorage.setItem(user,comment);
         }
     }
//Toasts
    $(document).ready(function(){
        $('.toast').toast('show');
    });
