
//active link
let links = document.querySelectorAll(".nav-link");
 for (let index = 0; index < links.length; index++)
links[index].addEventListener("click",function() {

 for (let i = 0; i < links.length; i++) {
  links[i].classList.remove("active" )
 }
 links[index].classList.add("active");
});  
  
  //client height
  
  let scrolling = document.querySelectorAll(" .scrolling ");
  let navBar = document.querySelector(".navbar");
  console.log(navBar.clientHeight);
  scrolling.forEach((scroll) =>{
    scroll.style.paddingTop = navBar.clientHeight + "px";
  });
  
  // scroll 
  let scrollBtn = document.querySelector(".scroll-top");
  let theFirstSection = document.querySelector(".about");
  
  window.addEventListener("scroll", function(){
    //offsetTop
  if (window.scrollY >=theFirstSection.offsetTop) {
    scrollBtn.style.display = "block";
  }else{
    scrollBtn.style.display = "none";
  }
  });
  //to get back to the top of the page
  scrollBtn.addEventListener("click", function(){
    window.scrollTo(0 , 0);
  });
//form
const inputs = document.querySelectorAll("input");
const email = document.querySelector(".email");
const  helps = document.querySelectorAll(".help");

inputs[0].addEventListener("blur", () => {
    if (inputs[0].value === "") {
        inputs[0].classList.remove("is-valid");
        inputs[0].classList.add("is-invalid");
        helps[0].innerHTML = "required";
    } else {
        inputs[0].classList.remove("is-invalid");
        inputs[0].classList.add("is-valid");
    }
});

inputs[1].addEventListener("blur", () => {
    if (inputs[1].value === "") {
        inputs[1].classList.remove("is-valid");
        inputs[1].classList.add("is-invalid");
        helps[1].innerHTML = "required";
    } else {
        inputs[1].classList.remove("is-invalid");
        inputs[1].classList.add("is-valid");
    }
});
inputs[2].addEventListener("blur", () => {
    if (inputs[2].value === "") {
        inputs[2].classList.remove("is-valid");
        inputs[2].classList.add("is-invalid");
        helps[2].innerHTML = "required";
    } else {
        inputs[2].classList.remove("is-invalid");
        inputs[2].classList.add("is-valid");
    }
});
inputs[3].addEventListener("blur", () => {
    if (inputs[3].value === "") {
        inputs[3].classList.remove("is-valid");
        inputs[3].classList.add("is-invalid");
        helps[3].innerHTML = "required";
    } else {
        inputs[3].classList.remove("is-invalid");
        inputs[3].classList.add("is-valid");
    }
});
=======
//active link
let links = document.querySelectorAll(".nav-link");
 for (let index = 0; index < links.length; index++)
links[index].addEventListener("click",function() {

 for (let i = 0; i < links.length; i++) {
  links[i].classList.remove("active" )
 }
 links[index].classList.add("active");
});  
  
  //client height
  
  let scrolling = document.querySelectorAll(" .scrolling ");
  let navBar = document.querySelector(".navbar");
  console.log(navBar.clientHeight);
  scrolling.forEach((scroll) =>{
    scroll.style.paddingTop = navBar.clientHeight + "px";
  });
  
  // scroll 
  let scrollBtn = document.querySelector(".scroll-top");
  let theFirstSection = document.querySelector(".about");
  
  window.addEventListener("scroll", function(){
    //offsetTop
  if (window.scrollY >=theFirstSection.offsetTop) {
    scrollBtn.style.display = "block";
  }else{
    scrollBtn.style.display = "none";
  }
  });
  //to get back to the top of the page
  scrollBtn.addEventListener("click", function(){
    window.scrollTo(0 , 0);
  });
//form
const inputs = document.querySelectorAll("input");
const email = document.querySelector(".email");
const  helps = document.querySelectorAll(".help");

inputs[0].addEventListener("blur", () => {
    if (inputs[0].value === "") {
        inputs[0].classList.remove("is-valid");
        inputs[0].classList.add("is-invalid");
        helps[0].innerHTML = "required";
    } else {
        inputs[0].classList.remove("is-invalid");
        inputs[0].classList.add("is-valid");
    }
});

inputs[1].addEventListener("blur", () => {
    if (inputs[1].value === "") {
        inputs[1].classList.remove("is-valid");
        inputs[1].classList.add("is-invalid");
        helps[1].innerHTML = "required";
    } else {
        inputs[1].classList.remove("is-invalid");
        inputs[1].classList.add("is-valid");
    }
});
inputs[2].addEventListener("blur", () => {
    if (inputs[2].value === "") {
        inputs[2].classList.remove("is-valid");
        inputs[2].classList.add("is-invalid");
        helps[2].innerHTML = "required";
    } else {
        inputs[2].classList.remove("is-invalid");
        inputs[2].classList.add("is-valid");
    }
});
inputs[3].addEventListener("blur", () => {
    if (inputs[3].value === "") {
        inputs[3].classList.remove("is-valid");
        inputs[3].classList.add("is-invalid");
        helps[3].innerHTML = "required";
    } else {
        inputs[3].classList.remove("is-invalid");
        inputs[3].classList.add("is-valid");
    }
});
