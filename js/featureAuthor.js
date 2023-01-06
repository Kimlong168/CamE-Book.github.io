var authorDescription=document.querySelectorAll(".aurhor__box-info-description");
var check=0;

for(let i=0;i<authorDescription.length;i++){
  authorDescription[i].addEventListener('click',()=>{
    if(check==0){
      authorDescription[i].classList.add('aurhor__box-info-description-active');
      for(let j=0;j<authorDescription.length;j++){
        if(j!=i)  authorDescription[j].classList.remove('aurhor__box-info-description-active');
      }
      check=1;
    }else{
      authorDescription[i].classList.remove('aurhor__box-info-description-active');
      check=0;
    }
  });
}
