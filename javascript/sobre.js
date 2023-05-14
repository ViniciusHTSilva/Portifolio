var btn = document.querySelector('#esconder');
var form =  document.querySelector('.for');

var image = document.querySelector('#image-sobre');

btn.addEventListener('mouseover', function(){  

    form.style.display = 'block';

});
btn.addEventListener('mouseout', function(){  

    form.style.display = 'none';

});

btn.addEventListener('mouseover', function(){  

    image.style.display = 'none';
       
});

btn.addEventListener('mouseout', function(){  

    image.style.display = 'block';
       
});





/*
btn.addEventListener('mouseover', function(){  

    if(image.style.display === 'none'){
        image.style.display = 'block';
    }else {
        image.style.display = 'none';
    }

})

*/
