
function countstr(str){ 
size = 0;

 for(let val of str){
    if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u"){
        size++;
    }
 }
  console.log("vowels in str is ", size);
}