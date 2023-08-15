const random = Math.round(Math.random() * 10);
console.log(random)

const button_try = document.querySelector('#FirstButton')
const button_reset = document.querySelector('#SecondButton')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const screen2_h2 = document.querySelector('.screen2 h2')
document.addEventListener('keyup', callfunction_Challenge_01)
//chalenge_02
let screen1_p =  document.querySelector('.screen1 > p')
let screen1_h1 = document.querySelector('.screen1 > h1')
let body =       document.querySelector('.body')
let main =       document.querySelector('main')
let counter = 1;

change_color_body(2)

button_try.addEventListener('click', Check_Try_Is_Equal)
button_reset.addEventListener('click', PlayAgain)

function Check_Try_Is_Equal(event) {


  console.log("event :" + event)

  event.preventDefault()

  let user = document.querySelector('#FirstInput')
  console.log(user.value)
  /*
    check_number(Number(user.value))
  */
  check_num_from_user(user)


  if (Number(user.value) == random) {

      change_color_body(2);

    swap_display_none()
    
    screen2_h2.innerText = `Finally you got it! after ${counter} tries`

  }
  user.value = " " // If it was a tag h2    must use       number_user.innerText = " "  
  ++counter
}

function swap_display_none() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')

  


}

function PlayAgain() {
  swap_display_none();
  counter = 1;
}



function callfunction_Challenge_01(o) {
  console.log("Object_Event_Details \," + o);
  console.log(".key " + o.key)

  if (o.key == 'Enter' && screen1.classList.contains('hide')) {
    PlayAgain(); // Just execute if the display are on the second screen ---> thisis a moment that screen1 are display : none ;
  }
}

/*
function check_number( i){
  console.log("value->   "+ i, typeof i)
  if(i<0 && i>10){
    console.log("into the if ->   "+ i, typeof i)
    screen1.style.backgroundColor = "red";

    alert("Invalido numero")
  }
}
*/

function check_num_from_user(number) {
  let n = Number(number.value);

  if (n < 0 || n > 10) {
    invalid_number(n)
  }

}

function invalid_number(n) {
  //change color and text 
/*  body.style.backgroundColor = 'white';    coloca uma div com o background preto e add agora no classList 
*/change_color_body(1)                     

  screen1_h1.innerText=  `You didn't got the rules ${negative_or_MAIOR_QUE_1O(n)} is not a \nnumber beetween 0 and 10 \nTRY AGAIN`

  screen1_p.innerText = " "
  console.log(screen1_p.style.innerText = `You didn't got the rules\n ${n} is not a number\n beetween 0 and 10\nTry, again `)
}

function change_color_body( value){
  console.log("era pra mudar fundo para cor:")
  switch(value){
    case 1:
      console.log("preta")
      body.classList.remove('i')
      body.classList.add('bla')
      break;
    case 2:
      body.classList.remove('bla')
      body.classList.add('i')
      console.log("!preta")
  }
  body.classList.toggle('b');
  console.log(body + "collor changed")

}

function negative_or_MAIOR_QUE_1O(n) {
  if (n < 0) {
    return `Cuz you typed a number negative (${n})`
  }
  return `Cuz you typped a number > 10  (${n})`
}

