const value = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "lime";
        }
        else if(count < 0){
            value.style.color = "red";
        }
        else{
            value.style.color = "aqua";
        }
        value.textContent = count;
    })
})