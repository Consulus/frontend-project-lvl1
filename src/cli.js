import readlineSync from 'readline-sync';

export default function greating() {
    
    const name = readlineSync.question('May I have your name?')
    console.log('Hello, ' + name + '!')
}

