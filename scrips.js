const button = document.querySelector('.classify')
let boxResult = document.querySelector('.result')

function generateNumber() {
    let min = Math.ceil(document.querySelector('.min-value').value)
    let max = Math.floor(document.querySelector('.max-value').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(min >= max){
        boxResult.innerHTML = 'O valor minimo tem que ser MENOR que o valor máximo'
    }else{
        boxResult.innerHTML = `Número gerado: ${result}`;
    }
}

button.addEventListener('click', generateNumber)