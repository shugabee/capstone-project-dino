const nameInput = document.querySelector('#name-input');
const submitBtn = document.querySelector('#submit-button');
const nameContainer = document.querySelector('#name-container');
const pictureContainer = document.querySelector('#picture-container');
const dinoBtnContainer = document.querySelector('.dinosaurs');
const deletePicture = document.querySelector('#delete-container');
const addForm = document.querySelector('#add-form');
const dinoForm = document.querySelector('#dino-form');
const addDinoSubmit = document.querySelector('#add-dino-submit');
const dinoName = document.querySelector('#add-dino');
const dinoUrl = document.querySelector('#dino-url');

const dinosaursInputs = document.querySelectorAll('input[name="radios"]');
const locationsInputs = document.querySelectorAll('input[name="locations-radios');




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
    
    axios.post('http://localhost:4000/api/dinosaur', reqBody)
    .then((res) => {
        console.log(res)
        createDinoInput(res.data[0].dinosaur_id)
        dinoName.value = '';
        dinoUrl.value = '';
    }) 
    .catch((error) => {
        console.log('error')
    })
    
}

addForm.addEventListener('submit', createNewDino);



const getDino = (event, dinoId) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/dinosaurs/${dinoId}`)
    .then(( { data }) => {
        let dinoPic = document.createElement('img')
        dinoPic.src = data[0].dinosaur_url
        dinoPic.className = 'final-dino-pic'
        pictureContainer.appendChild(dinoPic)
    })
    .catch((error) => {
        console.log(error)
    })
};


const getLocation = (event, locationId) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/locations/${locationId}`)
    .then(( { data }) => {
        let locationPic = document.createElement('img')
        locationPic.src = data[0].location_url
        locationPic.className = 'final-location-pic'
        pictureContainer.appendChild(locationPic)
    })
    .catch((error) => {
        console.log(error)
    })
};


    
    dinoForm.addEventListener('submit',(event) => {
        event.preventDefault()
        
    
    const dinosaursInputs = document.querySelectorAll('input[name="radios"]');
    let namePara = document.createElement('p');
    namePara.textContent = `It's nice to meet you ${nameInput.value}!!`;
    namePara.classList = 'name-para';
    nameContainer.appendChild(namePara);
    nameInput.value = '';
    
    
    for (let i = 0; i < dinosaursInputs.length; i++) {
        if (dinosaursInputs[i].checked) {
            getDino(event, dinosaursInputs[i].value);
        }
    } 
    for (let i = 0; i < locationsInputs.length; i++) {
        if (locationsInputs[i].checked) {
            getLocation(event, locationsInputs[i].value);
        }
    } 
    
    
});


const deletePictureContainer = () => {
    nameContainer.textContent = ''
    pictureContainer.textContent = ''
    alert("Bye!!")
}

deletePicture.addEventListener('click', deletePictureContainer);


