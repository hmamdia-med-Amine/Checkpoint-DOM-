
var qte = document.querySelectorAll('.qte');
var btnPlus = document.querySelectorAll('.btnPlus');
var btnMinus = document.getElementsByClassName('btnMinus');
var item = document.querySelectorAll('.row-item');
var btnDelete = document.querySelectorAll('.btn-danger');
var btnLike = document.querySelectorAll('.fa-heart');



function updateIt() {
    var cartRows = document.getElementsByClassName('row-item');
    var sumSubtotal = document.querySelector('.sum-subtotal').nextSibling;
    sumSubtotal.innerHTML = 0;
    var subtotal = document.querySelectorAll('.cart-subtotal-price');
    for (var j = 0; j < cartRows.length; j++) {
        sumSubtotal.innerHTML = Math.round(parseFloat(sumSubtotal.innerHTML) + parseFloat(subtotal[j].innerHTML.replace('TND', '')) * 100) / 100;
    }
    document.querySelector('.tot-subtotal').innerHTML = 'TND' + sumSubtotal.innerHTML;

    document.querySelector('.tax').innerHTML = 'TND' + Math.round((parseFloat(sumSubtotal.innerHTML) * 0.18) * 100) / 100;
    document.querySelector('.tot-cart').innerHTML = 'TND' + Math.round((parseFloat(sumSubtotal.innerHTML) * 0.18 + sumSubtotal.innerHTML) * 100) / 100;
}



Array.from(btnLike).map((el) =>
    el.addEventListener('click', () => {
        if (el.classList.contains('far')) {
            el.classList.remove('far');
            el.classList.add('fas');
        }
        else {
            el.classList.remove('fas');
            el.classList.add('far');

        }
    })
)


Array.from(btnPlus).map((el) =>
    el.addEventListener("click", () => {
        el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) + 1;
        subtotal = parseInt(el.nextElementSibling.innerHTML) * parseFloat(el.parentElement.previousElementSibling.lastElementChild.lastElementChild.lastElementChild.innerHTML.replace('Price: TND', ''));
        subtotal = Math.round(subtotal * 100) / 100;
        el.parentElement.nextElementSibling.innerHTML = 'TND' + subtotal;


        updateIt()


    }));


Array.from(btnDelete).map((i) =>
    i.addEventListener("click", () => {
        i.parentElement.parentElement.remove();

        updateIt()

    })

)
Array.from(btnMinus).map((el) =>
    el.addEventListener("click", () => {
        el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML) - 1;
        if (parseInt(el.previousElementSibling.innerHTML) <= 0) {
            (el.previousElementSibling.innerHTML) = 1;
        }
        subtotal = parseInt(el.previousElementSibling.innerHTML) * parseFloat(el.parentElement.previousElementSibling.lastElementChild.lastElementChild.lastElementChild.innerHTML.replace('Price: TND', ''));
        subtotal = Math.round(subtotal * 100) / 100;
        el.parentElement.nextElementSibling.innerHTML = 'TND' + subtotal;

        updateIt()
    }))


