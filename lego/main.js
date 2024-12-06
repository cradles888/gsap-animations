let flag = false;
let btn_rotate = document.getElementById(`img_rotate`);
let sectionText = document.getElementById('text_mb');

btn_rotate.addEventListener(`click`, ()=> {
  if (flag) {
    flag = false;
    sectionText.style.transform = 'rotate(0deg)';
    sectionText.style.transition = '.5s';
  }  
  else {
    flag = true;
    sectionText.style.transform = 'rotate(-90deg)';
    sectionText.style.transition = '.5s';
  }

});

let myDropdown = document.getElementById('myDropdown');
let dropbtn = document.getElementById('btn__');


// dropbtn.addEventListener("click", () => {
//     if (flag) {
//       flag = false;
//       myDropdown.style.display = 'block'
//     }  
//     else {
//       flag = true;
//       myDropdown.style.display = 'none'
//     }
//   })

let input_select = document.getElementById('input_select');
let inpSelValue = input_select.value;
let bodySection = document.querySelector('body');

let DialogOne = document.getElementById('DialogOne');
let DialogTwo = document.getElementById('DialogTwo');
let DialogThree = document.getElementById('DialogThree');
let DialogFour = document.getElementById('DialogFour');
let DialogFive = document.getElementById('DialogFive');
let DialogSix = document.getElementById('DialogSix');
let DialogSeven = document.getElementById('DialogSeven');
let DialogEight = document.getElementById('DialogEight');
let DialogNine = document.getElementById('DialogNine');
let DialogTen = document.getElementById('DialogTen');

let CardImgOne = document.getElementById('CardImgOne');
let CardImgTwo = document.getElementById('CardImgTwo');
let CardImgThree = document.getElementById('CardImgThree');
let CardImgFour = document.getElementById('CardImgFour');
let CardImgFive = document.getElementById('CardImgFive');
let CardImgSix = document.getElementById('CardImgSix');
let CardImgSeven = document.getElementById('CardImgSeven');
let CardImgEight = document.getElementById('CardImgEight');
let CardImgNine = document.getElementById('CardImgNine');
let CardImgTen = document.getElementById('CardImgTen');


let CloseOne = document.getElementById('CloseOne');
let CloseTwo = document.getElementById('CloseTwo');
let CloseThree = document.getElementById('CloseThree');
let CloseFour = document.getElementById('CloseFour');
let CloseFive = document.getElementById('CloseFive');
let CloseSix = document.getElementById('CloseSix');
let CloseSeven = document.getElementById('CloseSeven');
let CloseEight = document.getElementById('CloseEight');
let CloseNine = document.getElementById('CloseNine');
let CloseTen = document.getElementById('CloseTen');


function cardOne() {

  CardImgOne.addEventListener("click", () => {
    DialogOne.showModal();
    bodySection.style.overflow = 'hidden'
    DialogOne.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseOne.addEventListener("click", () => {
    console.log('Работает');
    DialogOne.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    DialogOne.close();
    bodySection.style.overflow = 'auto'
  })
  
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogOne.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogOne.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardOne();

function cardTwo() {

  CardImgTwo.addEventListener("click", () => {
    DialogTwo.showModal();
    bodySection.style.overflow = 'hidden'
    DialogTwo.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseTwo.addEventListener("click", () => {
    console.log('Работает');
    DialogTwo.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    bodySection.style.overflow = 'auto'
    DialogTwo.close();
  })
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogTwo.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogTwo.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardTwo();

function cardThree() {

  CardImgThree.addEventListener("click", () => {
    DialogThree.showModal();
    bodySection.style.overflow = 'hidden'
    DialogThree.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseThree.addEventListener("click", () => {
    console.log('Работает');
    DialogThree.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    bodySection.style.overflow = 'auto'
    DialogThree.close();
  })
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogThree.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogThree.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardThree();


function cardFour() {

  CardImgFour.addEventListener("click", () => {
    DialogFour.showModal();
    bodySection.style.overflow = 'hidden'
    DialogFour.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseFour.addEventListener("click", () => {
    console.log('Работает');
    DialogFour.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    bodySection.style.overflow = 'auto'
    DialogFour.close();
  })
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogFour.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogFour.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardFour();



function cardFive() {

  CardImgFive.addEventListener("click", () => {
    DialogFive.showModal();
    bodySection.style.overflow = 'hidden'
    DialogFive.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseFive.addEventListener("click", () => {
    console.log('Работает');
    DialogFive.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    bodySection.style.overflow = 'auto'
    DialogFive.close();
  })
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogFive.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogFive.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardFive();

function cardSix() {

  CardImgSix.addEventListener("click", () => {
    DialogSix.showModal();
    bodySection.style.overflow = 'hidden'
    DialogSix.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseSix.addEventListener("click", () => {
    console.log('Работает');
    DialogSix.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    bodySection.style.overflow = 'auto'
    DialogSix.close();
  })
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogSix.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogSix.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardSix();

function cardSeven() {

  CardImgSeven.addEventListener("click", () => {
    DialogSeven.showModal();
    bodySection.style.overflow = 'hidden'
    DialogSeven.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseSeven.addEventListener("click", () => {
    console.log('Работает');
    DialogSeven.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    bodySection.style.overflow = 'auto'
    DialogSeven.close();
  })
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogSeven.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogSeven.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardSeven();

function cardEight() {

  CardImgEight.addEventListener("click", () => {
    DialogEight.showModal();
    bodySection.style.overflow = 'hidden'
    DialogEight.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseEight.addEventListener("click", () => {
    console.log('Работает');
    DialogEight.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    bodySection.style.overflow = 'auto'
    DialogEight.close();
  })
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogEight.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogEight.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardEight();

function cardNine() {

  CardImgNine.addEventListener("click", () => {
    DialogNine.showModal();
    bodySection.style.overflow = 'hidden'
    DialogNine.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseNine.addEventListener("click", () => {
    console.log('Работает');
    DialogNine.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    bodySection.style.overflow = 'auto'
    DialogNine.close();
  })
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogNine.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogNine.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardNine();

function cardTen() {

  CardImgTen.addEventListener("click", () => {
    DialogTen.showModal();
    bodySection.style.overflow = 'hidden'
    DialogTen.classList.add("DialogOpen")
    bodySection.classList.add("common");
  })
  
  CloseTen.addEventListener("click", () => {
    console.log('Работает');
    DialogTen.classList.remove("DialogOpen")
    bodySection.classList.remove("common")
    bodySection.style.overflow = 'auto'
    DialogTen.close();
  })
  
  addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
      DialogTen.classList.remove("DialogOpen")
      bodySection.classList.remove("common")
      DialogTen.close();
      bodySection.style.overflow = 'auto'
    }
  })
}

cardTen();


// window.onclick = function(event) {
//   if (event.target == DialogOne) {
//     DialogOne.style.display = 'none'   
//   }  
// }

    


// let e = document.getElementById("input_select");
// let value = e.value;
// let text = e.options[e.selectedIndex].text;
// console.log(text);