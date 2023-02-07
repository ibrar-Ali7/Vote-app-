

let countEl = document.getElementById("count-nl")
let SaveVote=document.getElementById("pre_load")
let ResetCount=document.getElementById("count-nl")
console.log(countEl)
let count = 0
    function increment (){
        count+=1 
        countEl.textContent=count
    }   
    function totalVote(){
        let totalVoteValue= count+" - "
        SaveVote.textContent+= totalVoteValue
      SaveVote.innerText   
      count=0
      ResetCount.innerText=count
    }
 
