function toggle(){
  document.querySelector(".items").classList.toggle("hide");
  document.querySelector("button").classList.toggle("b");
}
function theme(sub,num){
  let html = `<div class="box">
  <div class="display flex">
   <h4 class="Subname">${sub} ${num} paper</h4>
   <button onclick="toggle()">></button>
  </div>
  <div class="items">
   <a class="i" href="#">Laws</a>
   <a class="i" href="#">Questions</a>
   <a class="i" href="#">Lectures</a>
  </div>
 </div>`
 document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}
theme("Bangla","1<sup>st</sup>");
theme("Chemistry","2<sup>nd</sup>");
