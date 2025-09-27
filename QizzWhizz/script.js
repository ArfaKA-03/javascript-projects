//Start a quiz button func
let start = document.querySelector(".start-btn");
if (start) {
    start.addEventListener("click", function(){
        window.location.href = "category.html";
    });
}
//categories selection func
let cat = document.getElementsByClassName("grid")[0];
if (cat) {
    cat.addEventListener("click", function(event){
        if(event.target.classList.contains("card") && event.target.classList.contains("yellow"))
            window.location.href="science.html";
        else if(event.target.classList.contains("card") && event.target.classList.contains("blue"))
            window.location.href="history.html";
        else if(event.target.classList.contains("card") && event.target.classList.contains("green"))
            window.location.href="literature.html";
        else if(event.target.classList.contains("card") && event.target.classList.contains("red"))
            window.location.href="mathematics.html";
        else if(event.target.classList.contains("card") && event.target.classList.contains("purple"))
            window.location.href="geography.html";
        else if(event.target.classList.contains("card") && event.target.classList.contains("pink"))
            window.location.href="art.html";
        else if(event.target.classList.contains("card") && event.target.classList.contains("magenta"))
            window.location.href="movies.html";
        else if(event.target.classList.contains("card") && event.target.classList.contains("orange"))
            window.location.href="gaming.html";
    });
}
document.addEventListener("DOMContentLoaded", () => {
let que = document.getElementsByClassName("quiz-section");
if(que){
    let btn_prev  = document.querySelector(".prevbtn");
    const btn_next = document.querySelector(".nextbtn");
    let curQue = 0;
    que[curQue].classList.add("active");
    btn_next.addEventListener("click", function(){
        que[curQue].classList.remove("active");
        if(curQue === que.length - 1){
          alert("Submit the quiz ")
            window.location.href = "score.html";
            return;
        }
        curQue++;
        que[curQue].classList.add("active");
    });
    btn_prev.addEventListener("click", function(){
        que[curQue].classList.remove("active");
        if(curQue === 0){
            window.location.href = "category.html";
        }
        if(curQue > 0)
            curQue--;
        que[curQue].classList.add("active");
    });
}
});
//exit
let close_btn = document.getElementsByClassName("ex")[0];
close_btn.addEventListener("click", () => {
    alert("Progress wont be saved");
    window.location.href = "category.html";
});
