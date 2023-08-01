import { answer_data } from "./ answerData.js";
import { question_data } from "./ questionData.js";



const main = document.getElementById('main');
const test = document.getElementById('test');
const result = document.getElementById('result')
const question = document.querySelector('.question')
const question_box = document.getElementById('questionBox')
const answerA = document.querySelector('#answerA')
const answerB = document.querySelector('#answerB')
const startButton = document.querySelector('.main__start-btn');
const redoButton = document.querySelector('.result__redo-btn');
const resultTitle = document.querySelector('.result__title');
const resultText = document.querySelector('.result__text');
const answerBoxes = document.querySelectorAll('.answer');
const statusBar = document.querySelector(".test__statusBar");
const resultImage = document.querySelector(".result__image")

// 시작, 다시하기 버튼을 누르면 해당되는 함수 실행
startButton.addEventListener('click', start);
redoButton.addEventListener('click', redo);

// 버튼을 둘중 하나라도 click 하면 nextQuestion 함수 실행
answerBoxes.forEach(answerBox => {
    answerBox.addEventListener('click', nextQuestion);
});


// 변수선언
let question_num = 0; //문제 번호
const userAnswer = []; // 사용자 답변



// 함수
function start() {
    blink()

    main.style.display = 'none';
    test.style.display = 'block';

    question.innerText = question_data[question_num].question_text;
    answerA.innerText = question_data[question_num].anmswer_text.answer_1.contents
    answerA.setAttribute('id', question_data[question_num].anmswer_text.answer_1.indicators)

    answerB.innerText = question_data[question_num].anmswer_text.answer_2.contents
    answerB.setAttribute('id', question_data[question_num].anmswer_text.answer_2.indicators)

    
    
};

function nextQuestion() {
    blink() 

    const clickedButton = event.target;
    userAnswer.push(clickedButton.id)      

    if (question_num === question_data.length - 1) {
        judge_mbti();
        test.style.display = 'none';
        result.style.display = 'block';        
    } else {
        question_num += 1
        
        statusBar.style.width = (100/(Object.keys(question_data).length-1) * userAnswer.length) + "%"  
        
        question.innerText = question_data[question_num].question_text;
        answerA.innerText = question_data[question_num].anmswer_text.answer_1.contents
        answerA.setAttribute('id', question_data[question_num].anmswer_text.answer_1.indicators)

        answerB.innerText = question_data[question_num].anmswer_text.answer_2.contents
        answerB.setAttribute('id', question_data[question_num].anmswer_text.answer_2.indicators)
    }    
};

function judge_mbti() {
    const judge_EI = userAnswer.filter(item => item === 'E').length;
    const judge_NS = userAnswer.filter(item => item === 'N').length;
    const judge_TF = userAnswer.filter(item => item === 'T').length;
    const judge_JP = userAnswer.filter(item => item === 'J').length;

    switch (true) {
        case judge_EI <= 1 && judge_NS <= 1 && judge_TF > 1:
            select_mbti('ISTJ_ISTP'); //보디빌딩
            break;

        case judge_EI <= 1 && judge_NS > 1 && judge_TF > 1:
            select_mbti('INTJ_INTP'); //파워리프팅
            break;

        case judge_EI > 1 && judge_NS > 1 && judge_TF <= 1:
            select_mbti('ENFJ_ENFP'); //크로스핏
            break;

        case judge_EI <= 1 && judge_NS <= 1 && judge_TF <= 1:
            select_mbti('ISFP_ISFJ'); //요가
            break;

        case judge_EI <= 1 && judge_NS > 1 && judge_TF <= 1:
            select_mbti('INFP_INFJ'); //필라테스
            break;

        case judge_EI > 1 && judge_NS > 1 && judge_TF > 1:
            select_mbti('ENTP_ENTJ'); //팀스포츠
            break;

        case judge_EI > 1 && judge_NS <= 1 && judge_JP <= 1:
            select_mbti('ESTP_ESFP'); //클라이밍
            break;

        case judge_EI > 1 && judge_NS <= 1 && judge_JP > 1:
            select_mbti('ESTJ_ESFJ'); //러닝
            break;

        default:
            break;
    }
};

function select_mbti(mbti) {
    resultTitle.innerText = answer_data[mbti].sportName;
    resultText.innerText = answer_data[mbti].sportDetail;
    resultImage.innerHTML = `<img src="./img/${mbti}.jpeg">`;    
}


function redo() {
    location.reload();
}

function blink() {
    question_box.style.animation = 'blink .3s';
    setTimeout(() => {
        question_box.removeAttribute('style');
    }, 300);    
}