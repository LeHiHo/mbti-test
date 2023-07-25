const main = document.querySelector("#main");
const test = document.querySelector("#test");
const result = document.querySelector("#result")
const q = document.querySelector(".question")
const question_box = document.querySelector(".test__question-box")
const a1 = document.querySelector("#a")
const a2 = document.querySelector("#b")
const startButton = document.getElementById("startBtn");
const next = document.querySelector(".test__answer-box");

startButton.addEventListener("click", start);
next.addEventListener("click", nextQuestion);

// 변수선언
let question_num = 0; //문제 번호
const userAnswer = []; // 사용자 답변

const testList = [
    {
        q: "EI 1",
        a: {
            answer_1: "E",
            answer_2: "I"
        }
    },
    {
        q: "EI 2",
        a: {
            answer_1: "E",
            answer_2: "I"
        }
    },
    {
        q: "EI 3",
        a: {
            answer_1: "E",
            answer_2: "I"
        }
    },
    {
        q: "NS 4",
        a: {
            answer_1: "N",
            answer_2: "S"
        }
    },
    {
        q: "NS 5",
        a: {
            answer_1: "N",
            answer_2: "S"
        }
    },
    {
        q: "NS 6",
        a: {
            answer_1: "N",
            answer_2: "S"
        }
    },
    {
        q: "TF 7",
        a: {
            answer_1: "T",
            answer_2: "F"
        }
    },
    {
        q: "TF 8",
        a: {
            answer_1: "T",
            answer_2: "F"
        }
    },
    {
        q: "TF 9",
        a: {
            answer_1: "T",
            answer_2: "F"
        }
    },
    {
        q: "PJ 10",
        a: {
            answer_1: "P",
            answer_2: "J"
        }
    },
    {
        q: "PJ 11",
        a: {
            answer_1: "P",
            answer_2: "J"
        }
    },
    {
        q: "PJ 12",
        a: {
            answer_1: "P",
            answer_2: "J"
        }
    }
];  

// 함수
function start() {
    main.style.display = "none";
    test.style.display = "block";

    q.innerText = testList[question_num].q;
    a1.innerText = testList[question_num].a.answer_1
    a2.innerText = testList[question_num].a.answer_2
};

function nextQuestion() {
    console.log(question_num)
    const clickedButton = event.target;
    userAnswer.push(clickedButton.id)

    if (question_num === 11) {
        done()        
    } else {
        question_num += 1
        q.innerText = testList[question_num].q;
        a1.innerText = testList[question_num].a.answer_1
        a2.innerText = testList[question_num].a.answer_2
        question_box.style.animation = "blink 1s"
    }


    

};

function done() {
    test.style.display = "none";
    result.style.display = "block";
    
    
}


