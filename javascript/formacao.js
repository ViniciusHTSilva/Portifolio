var btn = document.querySelector('#esconder');
var form =  document.querySelector('.for');


btn.addEventListener('click', function(){  

    if(form.style.display === 'block'){
        form.style.display = 'none';
    }else {
        form.style.display = 'block';
    }

})


