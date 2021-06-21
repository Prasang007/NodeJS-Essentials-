/** 
 * Want to ask a user a bunch of questions  about them. 
 */

const readline = require('readline');
const questions = [
    'What is you name ? \n',
    'What is you age ? \n',
    'Why are you interested in Node.JS core functions ? \n '
];
const rl = readline.createInterface(process.stdin, process.stdout);
let answers =[];
const askQuestion = (question) => { 
    rl.question(question, (answer) => {
        // process.stdout.write(`\n \n ${answer}`);
        return answer;
    });
}

questions.forEach(question=>{
    let answer = askQuestion(question);
    answers.push(answer);
    if(questions.length == answers.length){
        console.log(answers);
        process.exit();
    }
});




rl.question(question, (answer) => {
    process.stdout.write(`\n \n ${answer}`);
    process.exit();

});
rl.setPrompt(`What is your age? `);
rl.prompt();

rl.on('pause', () => {
    console.log('Paused Event is invoked');
});
rl.on('line', (age) => {
    console.log(`Age received by the user: ${age}`);
    rl.close();
  
});
rl.on('SIGINT', () => {
    rl.question('Exit (y or n)? ', (input) => {
      if (input.match(/^y(es)?$/i)) { rl.pause(); }
    });
});
// https://www.geeksforgeeks.org/node-js-readline-module/