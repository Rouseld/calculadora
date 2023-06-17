const returnbutton = document.querySelector('.result__hero__leftcontainer--returnbutton')
const totalFinal = localStorage.getItem('totalfinal');
const discountvalue = localStorage.getItem('discountvalue');
const producttvalue = localStorage.getItem('productvalue');
const productvaluetext = document.querySelector('.resulthero__rightcontainer__titlerow1--productvaluetitle')
const productvaluefinaltext = document.querySelector('.resulthero__rightcontainer__titlerow2--productfinalvalue')
const productdiscountvaluetext = document.querySelector('.resulthero__rightcontainer__titlerow2--productdiscount')

returnbutton.addEventListener('click', pager)

function pager (){
  console.log(" esta funcionando")
  window.location.href = 'index.html';
}

productvaluetext.innerText = "$" + " " + producttvalue;
productvaluefinaltext.innerText = "$" + " " + totalFinal;
productdiscountvaluetext.innerText = "("+"%" + discountvalue + ")";