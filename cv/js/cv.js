
// var alertConfig={
//    boxBgClass:"red",//Background class
//    boxBgColor:"white",
//    boxBtnCloseClass:"yellow",//Button close class
// };

function show() {
   
   alert("Dans une scène du film 'Les Deux Tours' , le personnage d'Aragorn, interprété par Viggo Mortensen, frappe dans un casque en hurlant, croyant que Merry et Pippin étaient morts. Si ce hurlement est si bien joué, c'est parce que l'acteur, à force de refaire la scène, s'est en fait cassé 2 orteils en tapant dans le casque. C'est cette prise qui fut choisie");
   
 }




 const hideCheckbox = document.querySelector('#hideCheckbox');
 const hideOrNotEl = document.querySelector('#hideOrNot');
 
 hideCheckbox.addEventListener('change', function() {
     if ( this.checked ) {
         hideOrNotEl.style.display = 'none';
     } else {
         hideOrNotEl.style.display = 'block';
     }
 
 })

 const hover = document.querySelector('#hover');

 hover.addEventListener('mouseover', function() {
     this.style.backgroundColor = 'red'
 })
 
 // Petit plus pour réinitialiser
 hover.addEventListener('mouseout', function() {
     this.style.backgroundColor = ''
 })



// function show()
// {
// divInfo = document.getElementById('divacacher');
// if (divInfo.style.display == 'none')
// divInfo.style.display = 'block';
// else
// divInfo.style.display = 'none';
// }


