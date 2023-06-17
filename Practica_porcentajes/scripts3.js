const returnbutton = document.querySelector('.result__hero__leftcontainer--returnbutton');
const totalFinal = localStorage.getItem('totalcoupondiscount'); // Cambiado de 'totalcoupondiscount' a 'totalfinal'
const discountvalue = parseFloat(localStorage.getItem('coupondiscount')); // Corregido 'ParseFloat' a 'parseFloat'
const producttvalue = parseFloat(localStorage.getItem('productvalue')); // Corregido 'ParseFloat' a 'parseFloat'
const productvaluetext = document.querySelector('.resulthero__rightcontainer__titlerow1--productvaluetitle');
const productvaluefinaltext = document.querySelector('.resulthero__rightcontainer__titlerow2--productfinalvalue');
const productdiscountvaluetext = document.querySelector('.resulthero__rightcontainer__titlerow2--productdiscount');

returnbutton.addEventListener('click', pager);

console.log(totalFinal); // Verificar el valor de totalFinal
console.log(discountvalue); // Verificar el valor de discountvalue
console.log(producttvalue); // Verificar el valor de producttvalue

function pager() {
  console.log("Esta funcionando");
  window.location.href = 'index.html';
}

productvaluetext.innerText = "$" + " " + producttvalue;
productvaluefinaltext.innerText = "$" + " " + totalFinal;
productdiscountvaluetext.innerText = "(" + "%" + discountvalue + ")";
