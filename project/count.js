const days=document.querySelector("#day");
const hours=document.querySelector("#hr");
const min=document.querySelector("#min");
const sec=document.querySelector("#sec");

function update(){
const year=new Date().getFullYear();
const currentyear=new Date(`January 1 ${year+1} 00:00:00`);
const currentdate=new Date;
const diff=currentyear-currentdate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
min.innerHTML=m<10?"0"+m:m;
sec.innerHTML=s<10?"0"+s:s;
}
setInterval(update,1000);
