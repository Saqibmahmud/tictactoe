let boxes= document.querySelectorAll(".box") ;
let reset=document.querySelector("#reset");
let user=true;
const winningPattern= [
    [0,1,2] , 
    [0,3,6] ,
    [0,4,8], 
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5], 
    [6,7,8]   ] ;                 


//reset button

reset.addEventListener("click",()=>{boxes.forEach((b)=>{b.innerText=""; 
user=true;
b.disabled=false;
b.style.backgroundColor="rgb(195, 235, 197)";

let ws=document.querySelector("#winning_state") ;
ws.style.visibility="hidden";


})

})

const disableBox=()=>{
    for(let i of boxes){
        i.disabled=true;
    }
    }
    


// for(let b of boxes){
//     b.addEventListener("click",()=>{console.log(b);})
// }


boxes.forEach((b) => {
b.addEventListener("click",()=>
{
    if(user){
        b.textContent="O"
        b.style.color="#0E584F"  ;
        b.style.backgroundColor="rgb(169, 169, 169)";
          user=false;

    }
     else {
        b.textContent="X"  
        b.style.color="black";
        b.style.backgroundColor="#9BC4BC";
        user=true;
    }
   b.disabled=true;
   
    checkWinner();

})
    
});

const checkWinner=()=>{
for(let winner of winningPattern){
   if(boxes[winner[0]].innerText==="X" && boxes[winner[1]].innerText==="X" && boxes[winner[2]].innerText==="X")
   { let ws=document.querySelector("#winning_state") ;
   ws.style.visibility="visible";
   ws.innerText="Congratulations X has Won!!"
   disableBox();
  
     
    //alert("X has win the game");

   }
   else if(boxes[winner[0]].innerText==="O" && boxes[winner[1]].innerText==="O" && boxes[winner[2]].innerText==="O")
   {
    //alert( "O has win the game");
    let ws=document.querySelector("#winning_state") ;
   ws.style.visibility="visible";
   ws.innerText="Congratulations 0 has Won!!"
   disableBox();
   }
   else{

   }
  
}
}











