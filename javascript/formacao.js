var btn = document.querySelector('#esconder');
var form =  document.querySelector('.for');


btn.addEventListener('click', function(){  

    if(form.style.display === 'block'){
        form.style.display = 'none';
    }else {
        form.style.display = 'block';
    }

})

var btn2 = document.querySelector('#esconder2');
var certif =  document.querySelector('.cont-certi');


btn2.addEventListener('click', function(){  

    if(certif.style.display === 'block'){
        certif.style.display = 'none';
    }else {
        certif.style.display = 'block';
    }

})

