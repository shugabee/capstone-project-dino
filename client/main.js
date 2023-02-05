const nameInput = document.querySelector('#name-input');
const addForm = document.querySelector('#add-form');
const dinoForm = document.querySelector('#dino-form');
const dinoName = document.querySelector('#add-dino');
const dinoUrl = document.querySelector('#dino-url');
const dinosaursInputs = document.querySelectorAll('input[name="radios"]');
const locationsInputs = document.querySelectorAll('input[name="locations-radios"]');
const dinoBtnContainer = document.querySelector('.dinosaurs');

const createDinoInput = (id) => {
    let dinoLabel = document.createElement('label');
    let dinoInput = document.createElement('input');
        dinoInput.classList.add('dinosaurs');
        dinoInput.setAttribute('type', 'radio');
        dinoInput.setAttribute('name', 'radios');
        dinoInput.setAttribute('value', id);
        dinoInput.setAttribute('checked', 'checked');
        dinoInput.data = dinoUrl.value;
        dinoLabel.innerHTML = dinoName.value;
        dinoBtnContainer.appendChild(dinoInput);
        dinoBtnContainer.appendChild(dinoLabel);
}

const createNewDino = (event) => {
    event.preventDefault();

    const reqBody = {
        dinoName: dinoName.value,
        dinoUrl: dinoUrl.value
    }
    
    axios.post('https://capstone-project-dino.quest/api/dinosaur', reqBody)
    .then((res) => {
        createDinoInput(res.data[0].dinosaur_id)
        dinoName.value = '';
        dinoUrl.value = '';
    }) 
    .catch((error) => {
        console.log('error')
    })
    
}
addForm.addEventListener('submit', createNewDino);


dinoForm.addEventListener('submit',(event) => {
    event.preventDefault()
        
    const dinosaursInputs = document.querySelectorAll('input[name="radios"]');
    const locationsInputs = document.querySelectorAll('input[name="locations-radios"]');
    
    let nameInputField = `${nameInput.value}`
    let dinoId;
    let locationId;
    

    for (let i = 0; i < dinosaursInputs.length; i++) {
        if (dinosaursInputs[i].checked) {
            dinoId = dinosaursInputs[i].value
        }   
    };
        
    for (let i = 0; i < locationsInputs.length; i++) {
        if (locationsInputs[i].checked) {
            locationId = locationsInputs[i].value
        }
        
    };

    if(!nameInputField) {
        alert('Oops, you need to add a name!')
        return
    };

   if(!dinoId) {
       alert('Oops, you need to pick a dinosaur!')
       return
   };

   if(!locationId) {
       alert('Oops, you need to pick a location!')
       return
   };
   
   

    window.location.href = `picture.html?dinoId=${dinoId}&locationId=${locationId}&nameInput=${nameInputField}`;
});



