/*if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName('quantity-element');
    for (var i = 0; i < quantityInputs; i++) {
        var Input = quantityInputs[i];
        Input.addEventListener('change', quantityChanged);
    }

}



function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartSubTotal()
}



function quantityChanged(event) {
    var Input = event.target;
    if (isNaN(Input.value) || (Input.value <= 0)) {
        Input.value = 1
    }
    updateCartSubTotal()
}



function updateCartSubTotal() {
    /*var cartItemContainer = document.getElementsByClassName('cartItems')[0]
    var cartRows = document.getElementsByClassName('row-item')
    var subtotal = 0
    for (var i = 0; i < cartRows.length; i++) {

        var cartRow = cartRows[i]
        var priceItem = cartRow.getElementsByClassName('price-item')[0]
        var quantityElement = cartRow.getElementsByClassName('quantity-element')[0]
        var price = parseFloat(priceItem.innerText.replace('$', ' '))
        var quantity = quantityElement.value
        subtotal = subtotal + (price * quantity)
    }
    document.getElementsByClassName('cart-subtotal-price')[0].innerText = '$' + subtotal
}*/
var qte = document.querySelectorAll('.qte');
var btnPlus = document.querySelectorAll('.btnPlus');
var btnMinus = document.getElementsByClassName('btnMinus');
var item = document.querySelectorAll('.row-item');
var btnDelete = document.querySelectorAll('.btn-danger');




Array.from(btnPlus).map((el) =>
    el.addEventListener("click", () => {
        el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) + 1;
        subtotal = parseInt(el.nextElementSibling.innerHTML) * parseFloat(el.parentElement.previousElementSibling.lastElementChild.lastElementChild.lastElementChild.innerHTML.replace('Price: TND', ''));
        subtotal = Math.round(subtotal * 100) / 100;
        el.parentElement.nextElementSibling.innerHTML = 'TND' + subtotal;
        //totalSubtotal();
        /* sumSubtotal = subtotal + parseFloat(el.parentElement.parentElement.nextElementSibling.lastElementChild.innerHTML.replace('TND', ''));
         console.log(el.parentElement.parentElement.nextElementSibling.lastElementChild.innerHTML.replace('TND', ''));*/
        var cartRows = document.getElementsByClassName('row-item');
        var sumSubtotal = document.querySelector('.sum-subtotal').nextSibling;
        sumSubtotal.innerHTML = 0;
        var subtotal = document.querySelectorAll('.cart-subtotal-price');
        for (var i = 0; i < cartRows.length; i++) {
            sumSubtotal.innerHTML = parseFloat(sumSubtotal.innerHTML) + parseFloat(subtotal[i].innerHTML.replace('TND', ''));
        
        }
        document.querySelector('.tot-subtotal').innerHTML = 'TND' + sumSubtotal.innerHTML;

        document.querySelector('.tax').innerHTML = 'TND' + (parseFloat(sumSubtotal.innerHTML) * 0.18);
        document.querySelector('.tot-cart').innerHTML = 'TND' + (parseFloat(sumSubtotal.innerHTML) * 0.18 + sumSubtotal.innerHTML);
        //updateSumSubTotal();
        //sumSubtotal.nextElementSibling.innerHTML = 'TND' + sumSubtotal;
    }));


Array.from(btnDelete).map((i) =>
    i.addEventListener("click", () => {
        i.parentElement.parentElement.remove();


        var cartRows = document.getElementsByClassName('row-item');
        var sumSubtotal = document.querySelector('.sum-subtotal').nextSibling;
        sumSubtotal.innerHTML = 0;
        var subtotal = document.querySelectorAll('.cart-subtotal-price');
        for (var j = 0; j < cartRows.length; j++) {
            sumSubtotal.innerHTML = parseFloat(sumSubtotal.innerHTML) + parseFloat(subtotal[j].innerHTML.replace('TND', ''));
        }
        document.querySelector('.tot-subtotal').innerHTML = 'TND' + sumSubtotal.innerHTML;

        document.querySelector('.tax').innerHTML = 'TND' + (parseFloat(sumSubtotal.innerHTML) * 0.18);
        document.querySelector('.tot-cart').innerHTML = 'TND' + (parseFloat(sumSubtotal.innerHTML) * 0.18 + sumSubtotal.innerHTML);//totalSubtotal();
        //updateSumSubTotal();
        //sumSubtotal.nextElementSibling.innerHTML = 'TND' + sumSubtotal;
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


        var cartRows = document.getElementsByClassName('row-item');
        var sumSubtotal = document.querySelector('.sum-subtotal').nextSibling;
        sumSubtotal.innerHTML = 0;
        var subtotal = document.querySelectorAll('.cart-subtotal-price');
        for (var i = 0; i < cartRows.length; i++) {
            sumSubtotal.innerHTML = parseFloat(sumSubtotal.innerHTML) + parseFloat(subtotal[i].innerHTML.replace('TND', ''));
        }
        document.querySelector('.tot-subtotal').innerHTML = 'TND' + sumSubtotal.innerHTML;
        document.querySelector('.tax').innerHTML = 'TND' + (parseFloat(sumSubtotal.innerHTML) * 0.18);
        document.querySelector('.tot-cart').innerHTML = 'TND' + (parseFloat(sumSubtotal.innerHTML) * 0.18 + sumSubtotal.innerHTML);
        //updateSumSubTotal();
        //totalSubtotal();
        //sumSubtotal.nextElementSibling.innerHTML = 'TND' + sumSubtotal;
        // console.log(el.parentElement.parentElement.nextElementSibling.lastElementChild.innerHTML.replace('TND', ''));
    }))


/*function updateSumSubTotal() {
var cartRows = document.getElementsByClassName('row-item');
var sumSubtotal = document.querySelector('.sum-subtotal').nextSibling;
sumSubtotal.innerHTML = 0;
var subtotal = document.querySelectorAll('.cart-subtotal-price');
for (var i = 0; i < cartRows.length; i++) {
    sumSubtotal.innerHTML = parseFloat(sumSubtotal.innerHTML) + parseFloat(subtotal[i].innerHTML.replace('TND', ''));
}
console.log('TND' + sumSubtotal.innerHTML);
}

/*var sumSubtotal = document.querySelector('.sum-subtotal').nextSibling;
sumSubtotal.innerText = 0;
console.log(sumSubtotal.innerText);

/*function totalSubtotal() {
var rows = document.querySelectorAll('.row-item');
sumSubtotal = 0;
for (var i = 0; i < rows.length; i++) {
    // console.log(subtotal[i].innerHTML.replace('TND', ''));
    sumSubtotal = sumSubtotal + parseFloat(subtotal[i].innerHTML.replace('TND', ''));
    console.log(sumSubtotal);
}*/

//sumSubtotal.innerHTML = 'TND' + sumSubtotal;
//}
/*function qtyControl() {
    for (var i = 0; i < qte.length; i++) {
        var quant = (qte[i])
        quant.addEventListener('change', () => {
            if (quant.textContent <= 0) {
                quant.textContent = 1;
                console.log(quant);
            }
        })
    }
    //console.log(quant);

    /*quant.addEventListener('change', () => {

        if (isNaN(quant) || (quant <= 0)) {
            quant = 1;
        }
    });*/






/*function quantityChanged(event) {
    var qte = event.target;
    if (isNaN(qte.innerHTML) || (qte.innerHTML <= 0)) {
        qte.innerHTML = 1;
    }
}*/

//console.log(qte.innerHTML);

//btnMinus.addEventListener('click', () => {
    //console.log('hello')
//})
