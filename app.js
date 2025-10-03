//const labTitle = document.getElementById(.lab-title);
const lowerText = document.getElementById('newPath');
const topText = document.getElementById('outcomeText');
const buttons = document.querySelectorAll('.button');

let firstText = 'Welcome to General Assembly!';
topText.textContent= firstText;
let secText = 'You can Copy code, Modify code or use ChatGPT to generate code. Which do you choose?';
lowerText.textContent= secText;
let counter = 1;
let currentLab = 1;
const totalLab = 3;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let textUpdate = btn.id;
        if (counter === 1){
            firstChoice(textUpdate);
            counter++;
        } else if (counter === 2) {
            secondChoice(textUpdate);
            counter++;
        } else if (counter === 3) {
            thirdChoice(textUpdate);
            counter++;
        }
      });
    });

function firstChoice(textUpdate) {
        switch  (textUpdate)    {
                case 'button1':
                    firstText = 'You went down a path' ;
                    topText.textContent=firstText;
                    secText = 'Left Right or Center?';
                    lowerText.textContent=secText;
                    currentLab++;
                     break;
                case 'button2':
                    firstText = 'You went down a different path' ;
                    topText.textContent=firstText;
                    secText = 'left, Right or Center?';
                    lowerText.textContent=secText;
                    break;
                case 'button3':
                    firstText = 'You went down another path' ;
                    topText.textContent=firstText;
                    secText = 'Left, Right or Center?';
                    lowerText.textContent=secText;
                    break;
        }
    
}

function secondChoice(textUpdate) {
    switch (textUpdate)    {
        case 'button1':
            firstText = 'toutcome ext update here' ;
            topText.textContent=firstText;
            currentLab++;
            break;
        case 'button2':
            firstText = 'toutcome ext update here' ;
            topText.textContent=firstText;
            break;
        case 'button3':
            firstText = 'toutcome ext update here' ;
            topText.textContent=firstText;
            break;
    }
    
}
function thirdChoice(textUpdate) {
    switch (textUpdate)    {
        case 'button1':
            firstText = 'toutcome ext update here' ;
            topText.textContent=firstText;
            currentLab++;
            break;
        case 'button2':
            firstText = 'toutcome ext update here' ;
            topText.textContent=firstText;
            break;
        case 'button3':
            firstText = 'toutcome ext update here' ;
            topText.textContent=firstText;
            break;
    }
    
}

console.log()
// //Vaiables
// //let currentLab = 1;
// //const totalLabs = 5;

// //Prompts for the the user to choice how they will do each lab.
// //const choices = [
//   //{text: `Code it yourself`, path:`safe`, icon:`url here`},
//   //{text: `Modify someone's example`, path: `risky`, icon:`url here`},
//   //{text: `Use ChatGPT to generate the code`, path: `chatGpt`, icon:`https://imgs.search.brave.com/zFJCleXHWZpW9U_0wmCwAO0N5USyQOKZTYSaDsyHOv4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL3ByZW1p/dW0vdGh1bWIvY2hh/dC1ncHQtM2QtaWNv/bi1wbmctZG93bmxv/YWQtODcxNTM1NC5w/bmc`}

//  /* 
// //Story lines that will be reused.
// const story = [
//     start: `Welcome to General Assembly!`,
//     safe: `Matt: "Coding is hard so it is going to be a bit rough. Great work!"`,
//     riskySuccess: `You got by this time.`,
//     riskyFail: `Busted! Matt and Keith ask about the code and you try to explain it."`,
//     chatGpt: `Matt: "You are no longer allowed to continue the program due to plagerism."`,
//     congratulations: `Matt: "Awesome job, I present to you your worthless certificate."`,
//     gameOver: `Great job, you were kicked out of the class. Next time do the work and put in the effort.`,
//     ]

//     }
// //Set event to check the choice made by user.


//     if (game === `safe` || game === `riskySuccess`) {
//         currentLab++;
//     }
//     if (currentLab > totalLabs) {
//         endGame(`Congratulations`);
//         return;
//     }
// }




// function handleChoice(event) {
//     const targetButton = event.target.closest(`.choice-button`);
//     //used MDN to find a way to pull from path using dataset
//     if (targetButton) {
//         const choicePath = targetButton.dataset.path;
//         if (choicePath === `chatGpt`) {
//             endGame(`chatGpt`);
        
//         } else if (choicePath === `risky`) {
//             if (Math.random() > 0.5) {
//                 gamePlay(`riskySuccess`);
//             } else {
//                 endGame(`riskyFail`); 
//             }
//         } else if (choicePath === `safe`) {
//             gamePlay(`safe`);
//     }
// }

// labTitle.textContent = `Lab ${currentLab}`;
// storyText.textContent = story[game] || story.start;

// for (let i = 0; i < choices.length; i++) {
//     const choice = choices [i];
//     const button = document.createElement(`button`);
//     button.classList.add(`choice-button`);

//     const icon = document.createElement(`img`);
//     icon.src = choice.icon;
//     button.appendChild(icon);
//     const buttonText = document.createTextNode(choice.text);
//     button.appendChild(buttonText);

//     button.setAttribute(`data-path`, choice.path);
//     choiceContainer.appendChild(button);
// }
// }
// //
// function endGame(outcome) => {
//     choiceContainer.innerHTML = (
//     if (outcome === `congratulations`) {
//         labTitle.textContent = `You passed the course and were able to get a job quickly!`
//     } else {
//         labTitle.textContent = `You wasted your money and now everyone hates you.`
//     })
// };
// choiceContainer.addEventListener(`click`, handleChoice);

// gamePlay(`start`);