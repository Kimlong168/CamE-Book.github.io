
let get=document.querySelectorAll(".input_type-range");
let put=document.querySelectorAll(".price-range-number-put");
let shopTitle=document.querySelector('.shop__page-title');
let pageTitle=document.querySelector('title');

// shop title
shopTitle.innerHTML=localStorage.getItem("shopTitle");
pageTitle.innerHTML=localStorage.getItem("pageTitle");
// price range
get[0].addEventListener("change",()=>{
  changeValue(0);
});
get[1].addEventListener("change",()=>{
  changeValue(1);
});

function changeValue(i){
  put[i].innerHTML=get[i].value+".00 $";
}

