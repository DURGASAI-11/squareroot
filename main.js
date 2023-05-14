const val = document.getElementById("val")
const answer=document.getElementById("answer")
const btn=document.getElementById('btn')
btn.addEventListener('click',function(){
    let value1=val.value;
   const ans=Math.pow(value1,0.5)
   answer.value=ans

})