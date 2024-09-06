let btn=document.querySelectorAll(".btn");
let reset=document.getElementById("reset");
let winners=document.getElementById("winner")


let pattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
let game=true;



btn.forEach((val)=>{
    val.addEventListener("click",function(){
        console.log(val);
        console.log(typeof val)
        if(game){
           
            val.innerText="X";
            game=false;
         }else{
            val.innerText="O";
            game=true;
         }
       val.disabled=true;

       winner();
    })
})
const winner=()=>{
pattern.forEach((patterns)=>{
console.log(patterns[0],patterns[1],patterns[2]);
let p1=btn[patterns[0]].innerText;
let p2=btn[patterns[1]].innerHTML;
let p3=btn[patterns[2]].innerText;
console.log(p1,p2,p3);

if(p1!=""&& p2!=""&&p3!=""){
if(p1===p2&&p2===p3){

console.log("Winner is here",p2)
winners.innerText=`The winner is ${p3}`;
btn.forEach((btnss)=>{
    btnss.disabled=true;
})



}
}
})

}




function re(){
window.location.reload();

}