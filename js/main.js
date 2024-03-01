// переменные 
const allNotes = [];
const form = document.querySelector('#forma');
const inputAdd = form.querySelector('#inputAdd'); 
// функции
const notePush = () => {
    const inputValue = inputAdd.value.trim();
    if (inputValue.length > 0){
        console.log(inputValue)
    }
}

// события
form.addEventListener('submit', notePush);

