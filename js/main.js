const main = document.getElementById('main');
const test = document.getElementById('test');
const result = document.getElementById('result')
const q = document.querySelector('.question')
const question_box = document.getElementById('questionBox')
const a1 = document.querySelector('#a')
const a2 = document.querySelector('#b')
const startButton = document.querySelector('.main__start-btn');
const redoButton = document.querySelector('.result__redo-btn');
const resultTitle = document.querySelector('.result__title');
const resultText = document.querySelector('.result__text');
const answerBoxes = document.querySelectorAll('.answer');
const statusBar = document.querySelector(".test__statusBar");
const resultImage = document.querySelector(".result__image")


startButton.addEventListener('click', start);
redoButton.addEventListener('click', redo);

answerBoxes.forEach(answerBox => {
    answerBox.addEventListener('click', nextQuestion);
});


// 변수선언
let question_num = 0; //문제 번호
const userAnswer = []; // 사용자 답변

const testList = [
    {
        q: '친구에게서 오늘 하체운동 \n 같이 하자고 카톡이 왔다.',
        a: {
            answer_1: {
                contents : '"하체운동 하기싫었는데 잘됐다!" \n 바로 만나자고 답장을 보낸다.',
                indicators : 'E'
            },
            answer_2: {
                contents : '"아 오늘 등 운동하는날인데;;" \n 안된다고 거절한다.',
                indicators : 'I'
            }
        }
    },
    {
        q: '헬스장에서 처음보는 사람이 사용안해본 운동기구의 \n 사용법을 물어본다.',
        a: {
            answer_1: {
                contents : '인터넷을 검색해서라도 사용법을 알려준다.',
                indicators : 'E'
            },
            answer_2: {
                contents : '"저도 잘몰라요" 하고 내 갈길간다.',
                indicators : 'I'
            }
        }
    },
    {
        q: '크로스핏 첫날, 운동을 \n 설명해주는데 외계어다.',
        a: {
            answer_1: {
                contents : '옆사람에게 알려달라고 도움을 요청한다.',
                indicators : 'E'
            },
            answer_2: {
                contents : '옆사람 하는거보고 대충 따라한다.',
                indicators : 'I'
            }
        }
    },
    {
        q: '다이어트 첫날, 유산소운동을 빡세게하고 체중을 재니 0.1kg도 안빠졌다.',
        a: {
            answer_1: {
                contents : '"찐것보다 낫지" \n 내일 더 열심히하자 다짐한다.',
                indicators : 'N'
            },
            answer_2: {
                contents : '체중계가 잘못된것 같다. 부수고 새로 산다.',
                indicators : 'S'
            }
        }
    },
    {
        q: '헬스장에 새로운 \n 운동기구가 생겼다.',
        a: {
            answer_1: {
                contents : '"신상이다!" 바로해본다.',
                indicators : 'N'
            },
            answer_2: {
                contents : '어떻게 사용하는지 도저히 모르겠다, \n 다른사람이 사용하는걸 지켜본다.',
                indicators : 'S'
            }
        }
    },
    {
        q: '여름휴가가 일주일 남았는데 내 몸은 준비가 안됐다.',
        a: {
            answer_1: {
                contents : '"일주일이나 남았네!" 야식을 먹는다.',
                indicators : 'N'
            },
            answer_2: {
                contents : '"일주일 밖에 안남았어?!" 물만 먹는다.',
                indicators : 'S'
            }
        }
    },
    {
        q: '친구가 운동을 하다가 \n 손목을 다쳤다고 한다.',
        a: {
            answer_1: {
                contents : '손목보호대를 추천해준다.',
                indicators : 'T'
            },
            answer_2: {
                contents : '"괜찮아? 병원은 가봤어?" 라며 걱정한다.',
                indicators : 'F'
            }
        }
    },
    {
        q: '6달간 다이어트를 하고, \n 바디프로필을 찍은후 \n SNS에 업로드했다.',
        a: {
            answer_1: {
                contents : '"타고난 몸이네" 라는 댓글이 좋다.',
                indicators : 'T'
            },
            answer_2: {
                contents : '"진짜 독하다" 라는 댓글이 좋다.',
                indicators : 'F'
            }
        }
    },
    {
        q: '친한친구가 다이어트 팩폭을 해달라고 한다.',
        a: {
            answer_1: {
                contents : '"비만은 성인병의 근원이래, 건강을 위해 \n 다이어트를 해보는게 어때?"',
                indicators : 'T'
            },
            answer_2: {
                contents : '"다이어트에 성공해서 멋있어진 \n 너 자신을 상상해봐!"',
                indicators : 'F'
            }
        }
    },
    {
        q: '운동하러 헬스장에 왔는데 \n 휴관일이라고 한다.',
        a: {
            answer_1: {
                contents : '근처 헬스장에서 일일권을 \n 구매해서 운동한다.',
                indicators : 'J'
            },
            answer_2: {
                contents : '집으로 돌아가는길에 \n 공원에서 간단히 운동한다.',
                indicators : 'P'
            }
        }
    },
    {
        q: '다이어트 중인데 점심시간 \n 회사에서 가장 좋아하는 \n 메뉴가 나왔다.',
        a: {
            answer_1: {
                contents : '입터질까봐 한입도 먹지 않고 \n 가져온 식단을 먹는다.',
                indicators : 'J'
            },
            answer_2: {
                contents : '행복하게 먹고 저녁을 적게 먹는다.',
                indicators : 'P'
            }
        }
    },
    {
        q: '피치 못할 사정이 생겨서 \n 30분 밖에 운동을 못한다.',
        a: {
            answer_1: {
                contents : '조금밖에 못해도 헬스장으로 가서 \n 최대한 빠르게 운동한다.',
                indicators : 'J'
            },
            answer_2: {
                contents : '"30분 할꺼면 헬스장 안가지" \n 라고 하며 홈트를 한다.',
                indicators : 'P'
            }
        }
    }
];  

const sportsList = {
    ISTJ_ISTP: {
        sportName : '보디빌딩',
        sportDetail : '꾸준한 트레이닝과 완벽한 자기절제를 통하여 몸의 근육을 극대화하고 육체미를 극한으로 단련하는 행위'
    },
    INTJ_INTP: {
        sportName : '파워리프팅',
        sportDetail :'바벨(스쿼트, 벤치프레스, 데드리프트)을 들어 올려 그 무게를 겨루는 스포츠, 매번 자신과의 한계중량에 도전하며 희열을 느낀다.'        
    },
    ENFJ_ENFP: {
        sportName : '크로스핏',
        sportDetail :'다양한 운동종목을 통해 10가지 영역의 육체능력을 골고루 기르며, 다른사람과 협응과 경쟁과정에서 신체능력을 극대화한다.'        
    },
    ISFP_ISFJ: {
        sportName : '요가',
        sportDetail :'명상, 호흡, 스트레칭을 통해 몸과 마음의 불균형을 바로잡고 깨달음을 얻는 심신 수련행위'
    },
    INFP_INFJ: {
        sportName : '필라테스',
        sportDetail :'기구를 통해 신체 전 근육을 과학적으로 단련하여 전신 근육의 균형적인 발달, 자세교정, 코어근육 강화 효과가 있다.'        
    },
    ESTP_ESFP: {
        sportName : '클라이밍',
        sportDetail :'암반 또는 인공암반등 벽을 오르며 강한 성취감을 느끼는 운동으로 근력, 심폐지구력, 균형감각, 유연성 등 종합적인 신체능력을 향상시킬 수 있다.'        
    },
    ESTJ_ESFJ: {
        sportName : '러닝•등산',
        sportDetail :'특별한 운동기구 없이 쉽게할 수 있는 운동으로, "인간은 오래 달리기 위한 동물"이란 말이 있을 정도로 건강관리와 스트레스 해소에 매우 좋다.'        
    },
    ENTP_ENTJ: {
        sportName : '팀스포츠',
        sportDetail :'여러명에서 하나의 팀을 위로 공동의 목적을 위해 서로 협응하고 상대팀과 경쟁하는 스포츠, 팀원들과의 강한 유대와 성취감, 자신감을 느낄 수 있다.'        
    },
    
}

// 함수
function start() {
    blink()

    main.style.display = 'none';
    test.style.display = 'block';

    q.innerText = testList[question_num].q;
    a1.innerText = testList[question_num].a.answer_1.contents
    a1.setAttribute('id', testList[question_num].a.answer_1.indicators)

    a2.innerText = testList[question_num].a.answer_2.contents
    a2.setAttribute('id', testList[question_num].a.answer_2.indicators)

    
    
};

function nextQuestion() {
    blink() 

    const clickedButton = event.target;
    userAnswer.push(clickedButton.id)      

    if (question_num === testList.length - 1) {
        judge_mbti();
        test.style.display = 'none';
        result.style.display = 'block';        
    } else {
        question_num += 1
        
        statusBar.style.width = (100/(Object.keys(testList).length-1) * userAnswer.length) + "%"  
        
        q.innerText = testList[question_num].q;
        a1.innerText = testList[question_num].a.answer_1.contents
        a1.setAttribute('id', testList[question_num].a.answer_1.indicators)

        a2.innerText = testList[question_num].a.answer_2.contents
        a2.setAttribute('id', testList[question_num].a.answer_2.indicators)
    }    
};

function judge_mbti() {
    const judge_EI = userAnswer.filter(item => item === 'E').length;
    const judge_NS = userAnswer.filter(item => item === 'N').length;
    const judge_TF = userAnswer.filter(item => item === 'T').length;
    const judge_JP = userAnswer.filter(item => item === 'J').length;

    if (judge_EI <= 1 && judge_NS <= 1 && judge_TF > 1) {
        resultTitle.innerText = sportsList.ISTJ_ISTP.sportName, // ISTJ, ISTP
        resultText.innerText = sportsList.ISTJ_ISTP.sportDetail,
        resultImage.innerHTML = '<img src="./img/보디빌딩.jpeg">';
    } else if (judge_EI <= 1 && judge_NS > 1 && judge_TF > 1) {
        resultTitle.innerText = sportsList.INTJ_INTP.sportName, // INTJ, INTP
        resultText.innerText = sportsList.INTJ_INTP.sportDetail,
        resultImage.innerHTML = '<img src="./img/파워리프팅.jpeg">';
    } else if (judge_EI > 1 && judge_NS > 1 && judge_TF <= 1){
        resultTitle.innerText = sportsList.ENFJ_ENFP.sportName, // ENFJ, ENFP
        resultText.innerText = sportsList.ENFJ_ENFP.sportDetail,
        resultImage.innerHTML = '<img src="./img/크로스핏.jpeg">';
    } else if (judge_EI <= 1 && judge_NS <= 1 && judge_TF <= 1){
        resultTitle.innerText = sportsList.ISFP_ISFJ.sportName, // ISFP,ISFJ
        resultText.innerText = sportsList.ISFP_ISFJ.sportDetail,
        resultImage.innerHTML = '<img src="./img/요가.jpeg">';
    } else if (judge_EI <= 1 && judge_NS > 1 && judge_TF <= 1){
        resultTitle.innerText = sportsList.INFP_INFJ.sportName, // INFP,INFJ
        resultText.innerText = sportsList.INFP_INFJ.sportName,
        resultImage.innerHTML = '<img src="./img/필라테스jpeg">';
        img = img/dumbell.png
    } else if (judge_EI > 1 && judge_NS > 1 && judge_TF > 1){
        resultTitle.innerText = sportsList.ENTP_ENTJ.sportName, // ENTP, ENTJ
        resultText.innerText = sportsList.ENTP_ENTJ.sportDetail,
        resultImage.innerHTML = '<img src="./img/팀스포츠.jpeg">';
    } else if (judge_EI > 1 && judge_NS <= 1 && judge_JP <= 1){
        resultTitle.innerText = sportsList.ESTP_ESFP.sportName, // ESTP, ESFP
        resultText.innerText = sportsList.ESTP_ESFP.sportDetail,
        resultImage.innerHTML = '<img src="./img/클라이밍.jpeg">';
    } else if (judge_EI > 1 && judge_NS <= 1 && judge_JP > 1) {
        resultTitle.innerText = sportsList.ESTJ_ESFJ.sportName, // ESTJ, ESFJ
        resultText.innerText = sportsList.ESTJ_ESFJ.sportDetail,
        resultImage.innerHTML = '<img src="./img/러닝.jpeg">';
    }
};

function redo() {
    location.reload();
}

function blink() {
    question_box.style.animation = 'blink .3s';
    setTimeout(() => {
        question_box.removeAttribute('style');
    }, 300);    
}