// variables
let userScore = 0;
let compScore = 0;


const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

const compScore_span = document.getElementById('comp-score');
const userScore_span = document.getElementById('user-score');

const result_p = document.querySelector('.result p');


// Eventlisteners
eventListeners()
function eventListeners() {
    rock_div.addEventListener('click', () => {
        game('r')
    })

    paper_div.addEventListener('click', () => {
        game('p')

    })

    scissors_div.addEventListener('click', () => {
        game('s')

    })
}






// functions
// geting computer choice from random array
function getComputerChoice() {
    const choices = ['r', 'p', 's']

    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}


// get user and computer choice and compare them



function game(userChoice) {
    const computerChoice = getComputerChoice()
    // compare userChoice and computerChoice

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
            break;

        default:
            break;
    }
}


function convertToWord(letter) {
    if (letter == 'r') {
        return 'سنگ'
    } else if (letter == 'p') {
        return 'کاغذ'
    } 

    return 'قیچی'
}


// if user win in the game 
function win(userChoice, computerChoice) {
    userScore ++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_p.innerHTML = `شما برنده شدید شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(computerChoice)} انتخاب کرد`
    document.getElementById(userChoice).classList.add('green')
    // remove class after 500
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green')
    }, 800);
}



// if user lose the game
function lose(userChoice, computerChoice) {
    compScore ++
    userScore_span.innerHTML = userScore
    compScore_span.innerHTML = compScore
    result_p.innerHTML = `شما بازنده شدید شما${convertToWord(userChoice)} و کامپیوتر ${convertToWord(computerChoice)} انتخاب کرد`
    document.getElementById(userChoice).classList.add('red')
    // remove class after 500
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('red')
    }, 800);
}



// if game get drow
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `بازی مساوی شد شما ${convertToWord(userChoice)} و کامپیوتر ${convertToWord(computerChoice)} انتخاب کرد`
    document.getElementById(userChoice).classList.add('gray')
    // remove class after 500
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('gray')
    }, 800);
}




