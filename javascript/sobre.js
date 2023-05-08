var btn = document.querySelector('#esconder');
var form =  document.querySelector('.for');

var image = document.querySelector('#image-sobre');

btn.addEventListener('click', function(){  

    if(form.style.display === 'block'){
        form.style.display = 'none';
    }else {
        form.style.display = 'block';
    }

})

btn.addEventListener('click', function(){  

    if(image.style.display === 'none'){
        image.style.display = 'block';
    }else {
        image.style.display = 'none';
    }

})


