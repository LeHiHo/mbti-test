
const main = document.querySelector("#main");
const test = document.querySelector("#test");


const startButton = document.getElementById("startBtn");

startButton.addEventListener("click", start);

function start() {
    main.style.display = "none";
    test.style.display = "block";
    
    // q.innerText = qnaList[0].q;
    // answer[0].innerText = qnaList[0].a[0].answer;
    // answer[1].innerText = qnaList[0].a[1].answer;
}