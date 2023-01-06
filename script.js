// menu - hidden navigation bar

var hiidenMenuIcon=document.querySelector(".nav-hidden-menu-icon");
var hiddenNavBar=document.querySelector(".hidden-nav-container");
var fixedHeader=document.querySelector("body");
var headerHeight=document.querySelector(".head-container");

const myInterval = setInterval(function () {
  fixedHeader.style.marginTop=headerHeight.offsetHeight + "px";
},50);

var check=0;
hiidenMenuIcon.addEventListener('click',()=>{
  if(check==0){
    hiddenNavBar.style.display='block';
    check=1;
  }else{
    hiddenNavBar.style.display='';
    check=0;
  }
  
});

// window object -- scroll
window.onscroll = function(){
  autoScroll();
}

function autoScroll(){
  if(window.pageYOffset > 100){
    hiddenNavBar.style.display='';
  }
}











let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var productCategory=document.querySelectorAll('.home__product-title-icon');

for(let i=0;i<productCategory.length;i++){
  productCategory[i].addEventListener('click',()=>{
    if(productCategory[i].id=="newArrival"){
      localStorage.setItem("shopTitle","New Arrivals");
      localStorage.setItem("pageTitle","Shop | New Arrivals");
    }else if(productCategory[i].id=="bestSeller"){
      localStorage.setItem("shopTitle","Best Sellers");
      localStorage.setItem("pageTitle","Shop | Best Sellers");
    }else if(productCategory[i].id=="internationalBestSeller"){
      localStorage.setItem("shopTitle","International Best Sellers");
      localStorage.setItem("pageTitle","Shop | International Best Sellers");
    }else if(productCategory[i].id=="boxSet"){
      localStorage.setItem("shopTitle","Box Sets");
      localStorage.setItem("pageTitle","Shop | Box Sets");
    }else if(productCategory[i].id=="awardWinner"){
      localStorage.setItem("shopTitle","Award Winners");
      localStorage.setItem("pageTitle","Shop | Award Winners");
    }else if(productCategory[i].id=="fictionBook"){
      localStorage.setItem("shopTitle","Fiction Books");
      localStorage.setItem("pageTitle","Shop | Fiction Books");
    }
    // alert(localStorage.getItem("itemName"));
  });
}