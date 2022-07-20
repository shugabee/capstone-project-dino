const pictureContainer = document.querySelector('#picture-container');
const nameContainer = document.querySelector('#name-container');

const params = new URLSearchParams(window.location.search);

const dinoId = params.get("dinoId");
const locationId = params.get("locationId");
const nameInput = params.get("nameInput");


const nameInputGreeting = () => {
    let nameGreeting = document.createElement('p');
    nameGreeting.textContent = `It's nice to meet you ${nameInput}!!`;
    nameGreeting.classList = 'name-greeting';
    nameContainer.appendChild(nameGreeting);
}

const getDino = () => {
    axios.get(`http://localhost:4000/api/dinosaurs/${dinoId}`)
    .then(( { data }) => {
        let dinoPic = document.createElement('img')
        dinoPic.src = data[0].dinosaur_url
        
        let classesArr = [
            'dino-pic-large',
            'dino-pic-flip',
            'dino-pic-jump',
            'dino-pic-shift'
        ];

        let randomSelection = 
            classesArr[Math.ceil(Math.random()*classesArr.length - 1)];
                console.log(randomSelection);
        dinoPic.classList.add('final-dino-pic', randomSelection)
       
        pictureContainer.appendChild(dinoPic)
    })
    .catch((error) => {
        console.log(error)
    })
};

const getLocation = () => {
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



nameInputGreeting();
getDino();
getLocation();

