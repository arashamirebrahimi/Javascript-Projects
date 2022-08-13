const number = document.getElementById("number");
const dBtn = document.getElementById("d-btn");
const rBtn = document.getElementById("r-btn");
const iBtn = document.getElementById("i-btn");
let count = 0;
const colors = ["red","blue","aqua"];

dBtn.addEventListener("click",function(){
    count -= 1;
    number.textContent = count;
    if (count < 0){
        number.style.color = "red"; 
    }
    else if (count == 0){
        number.style.color = colors[2];
    }
})

rBtn.addEventListener("click",function(){
    count = 0;
    number.textContent = count;
    if (count == 0){
        number.style.color = colors[2];
    }
})
iBtn.addEventListener("click",function(){
    count += 1;
    number.textContent = count;
    if(count > 0){
        number.style.color = colors[1];
    }
    else if (count == 0){
        number.style.color = colors[2];
    }
})