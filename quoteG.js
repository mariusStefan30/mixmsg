let quotes1 = [

    'If we console lograndomNumber', 'the results will be anywhere', 'between 1 and 19. Now I could', 'use this current state of', 'randomNumber to pull out a quote', ' from the quotes array, but it', ' will only work if the array index number exist within the array', 'otherwise an error will be thrown'];

function newQuote() {
    let rand1 = Math.floor(Math.random() * quotes1.length);
    document.getElementById('main').innerHTML = quotes1[rand1];
};
console.log('Hi there!')
//node console quote generator

function genRandNum(number) {
    return Math.floor(Math.random() * number);
}

const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

// Store the 'Wisdom' in an array
let personalWisdom = [];

//Iterate over the object
for (prop in collectiveWisdom) {
    let optionIdx = genRandNum(collectiveWisdom[prop].length)

    switch (prop) {
        case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'signInfo':
            personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'signInfo':
            personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        default:
            personalWisdom.push('There is no enough info.')
    }

    function formatWisdom(wisdom) {
        const formatted = personalWisdom.join('\n')
        console.log(formatted);
    }

    formatWisdom(personalWisdom);
}