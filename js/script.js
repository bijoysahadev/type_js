let heading=document.querySelector(".heading")
heading.dataset.text
let count=-1

let text="This is Bangladesh"
function typejs () {
    if (count<heading.dataset.text.length)
    {
   count++
   
    heading.innerHTML+=heading.dataset.text.charAt(count)

 
    
    }
    else {
       count=-1
            heading.innerHTML=" "
    }
   
}
console.log(text.charAt(count));
let stop=setInterval( ()=>{
    typejs()
  
},100)