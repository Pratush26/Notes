document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('button').forEach(but=>{
    but.addEventListener('click',()=>{
      but.closest('.box').querySelector('.items').classList.toggle('visible');
      but.classList.toggle('r1');
    })
  })
})

function theme(sub,num){
  let html = `<div class="box">
  <div class="display flex">
   <h4 class="Subname">${sub} ${num} paper</h4>
   <button>></button>
  </div>
  <div class="items">
   <a class="i" href="#">Laws</a>
   <a class="i" href="#">Questions</a>
   <a class="i" href="#">Lectures</a>
  </div>
 </div>`
 document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}
theme("Physics","1<sup>st</sup>")
theme("Bangla","1<sup>st</sup>");
theme("Chemistry","2<sup>nd</sup>");
