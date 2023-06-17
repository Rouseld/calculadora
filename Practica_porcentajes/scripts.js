const inputproductvalue = document.querySelector('.hero__section__container__left__side--inputnumber')
const inputpercent = document.querySelector('.hero__section__container__left__side--inputpercent')
const submitbutton = document.querySelector('.hero__section__container__left__side--buttonsubmits')
const submitbuttoncoupon = document.querySelector('.hero__section__container__left__side--buttonsubmitcoupon')
const percentbutton = document.querySelector('.hero__section__container__buttonscontainer--percent')
const couponbutton = document.querySelector('.hero__section__container__buttonscontainer--coupon')
const containerbuttons = document.querySelector('.hero__section__container__buttonscontainer')
const returnbutton= document.querySelector('.hero__section__container__left__side--buttonreturn')
const returnbutton2 = document.querySelector('.hero__section__container__left__side--buttonreturn2')
const form1 = document.querySelector('.hero__section__container__left_side__formcontainer--form')
const textresult = document.querySelector('.hero__section__container__left__side__formcontainer--text')
const percentform = document.querySelector('.hero__section__container__left_side__formcontainer--form')
const couponform = document.querySelector('.hero__section__container__left_side__formcontainer2--form')
const errorcontainer = document.querySelector('.error__popup')
const errorclosecontainer= document.querySelector('.error__popup__buttoncontainer--closetext')
let productvalue1, productpercent1;
let productvalue2 , productcoupon;

const discountcoupons =[
  {coupon:"mothersday",discount:10},
  {coupon:"summer20",discount:20},
  {coupon:"weekends",discount:50},

]

percentbutton.addEventListener('click',openpercentform)
couponbutton.addEventListener('click',opencouponform)
form1.addEventListener('submit' , sumadeporcentaje)
returnbutton.addEventListener('click' , closeform)
returnbutton2.addEventListener('click',closeform)
couponform.addEventListener('submit',couponsdiscount)
errorclosecontainer.addEventListener('click',closepopup)

function closepopup(){
  errorcontainer.classList.remove('error__popup--display')
  errorcontainer.classList.add('error__container')
}

function closeform(event){
  event.preventDefault()
  percentform.classList.remove('hero__section__container__left_side__formcontainer--formdisplay')
  couponform.classList.remove('hero__section__container__left_side__formcontainer2--form--display')
  containerbuttons.classList.add('hero__section__container__buttonscontainer')
  containerbuttons.classList.remove('hero__section__container__buttonscontainer--hidden')
}

function opencouponform(){
  couponform.classList.toggle('hero__section__container__left_side__formcontainer2--form--display')
  percentform.classList.remove('hero__section__container__left_side__formcontainer--formdisplay')
  percentform.classList.add('hero__section__container__left_side__formcontainer--form')
  containerbuttons.classList.remove('hero__section__container__buttonscontainer')
  containerbuttons.classList.add('hero__section__container__buttonscontainer--hidden')
}

function openpercentform(){
 percentform.classList.add('hero__section__container__left_side__formcontainer--formdisplay') 
 containerbuttons.classList.remove('hero__section__container__buttonscontainer')
 containerbuttons.classList.add('hero__section__container__buttonscontainer--hidden')
 couponform.classList.remove('hero__section__container__left_side__formcontainer--formdisplay')
 couponform.classList.add('hero__section__container__left_side__formcontainer')
}


function sumadeporcentaje(event){

  if(sumadeporcentaje = true){

    console.log({event});
    
    // evitamos que la pagina se recargue cuando hagamos uso del formulario
    event.preventDefault()

    // establecemos nuestros parametros y usamos el console log para revisar si no tenemos ninguna falla y los valores se estan impriendo en consola correctamente
    productvalue1 = parseFloat(inputproductvalue.value);
    productpercent1 = parseFloat(inputpercent.value);
 
    // guardamos los valores para posteriormente mostrar el resultados en la otra pagina del html
    localStorage.setItem('productvalue' , inputproductvalue.value);
    localStorage.setItem('discountvalue' , inputpercent.value);
    console.log('Este es valor guardado en memoria' + ' ' + localStorage.getItem('productvalue'))
    console.log(localStorage.getItem('discountvalue'))
    
    // Esta formula nos va permitir saber el descuento del producto
    let total = ((productvalue1 * (100 - productpercent1)) / 100)
    console.log(total)

    localStorage.setItem('totalfinal' , total)
    console.log('Este es valor guardado en memoria del total' + ' ' + localStorage.getItem('totalfinal'))
    

    window.location.href = 'result.html';

  }



    
}




function couponsdiscount(event){
    event.preventDefault()
  
    const inputcoupon= document.querySelector('.hero__section__container__left__side--inputcoupon')
    const coupondiscountvalue = discountcoupons.find(couponObj => couponObj.coupon === inputcoupon.value.trim());
    const inputproductvalue2 = parseFloat(document.querySelector('.hero__section__container__left__side--inputnumber2').value);


    if(coupondiscountvalue){
    

    console.log('Este es valor guardado en memoria' + ' ' + localStorage.getItem('productvalue'))
    console.log(localStorage.getItem('coupondiscount'))
  
    let total = ((inputproductvalue2 * (100 - coupondiscountvalue.discount)) / 100)
    console.log(total)
    localStorage.setItem('totalcoupondiscount', total)
    console.log(localStorage.getItem('totalcoupondiscount'))
    
    localStorage.setItem('productvalue', inputproductvalue2);
    localStorage.setItem('coupondiscount', coupondiscountvalue.discount);
    window.location.href ='result2.html'
  
  
  
  } else{
    console.log('no funciona')
    errorcontainer.classList.toggle('error__popup--display')
  }
  

}




// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'result.html', true);
// xhr.onload = function() {
//   if (this.status == 200) {
//     // Insertar el nuevo HTML en la página
//     document.getElementById('contenedor').innerHTML = this.responseText;
    
//     // Recuperar los datos almacenados y mostrarlos en la pantalla de resultados
//     var resultado = localStorage.getItem('resultado');
//     document.getElementById('resultado').innerHTML = resultado;
//   }
// };
// xhr.send();
