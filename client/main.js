const nameInput = document.querySelector('#name-input');
const submitBtn = document.querySelector('#submit-button');
const nameContainer = document.querySelector('#name-container');
const pictureContainer = document.querySelector('#picture-container');
const brachioSelect = document.querySelector('#brach');
const stegoSelect = document.querySelector('#stego');
const form = document.querySelector('form');

                                                           
const getBrach = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
    .then(( { data }) => {
        console.log(data)
        let dinoPic = document.createElement('img')
        dinoPic.src = {dinosaur_url}
        console.log(dinoPic)
        pictureContainer.appendChild(dinoPic)
    }) 
    .catch((error) => {
        console.log(error)
    })
}

// brachioSelect.addEventListener('change', getBrach)

const getStego = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
    .then(( { data }) => {
        console.log(data)
        let dinoPic = document.createElement('img')
        dinoPic.src = {dinosaur_url}
        pictureContainer.appendChild(dinoPic)
    })
    .catch((error) => {
        console.log(error)
    })
}

stegoSelect.addEventListener('change', getStego);

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let namePara = document.createElement('p');
    namePara.textContent = `It's nice to meet you ${nameInput.value}!!`;
    nameContainer.appendChild(namePara);
    nameInput.value = '';

   
    if(brachioSelect.value) {
        getBrach()
    } else {
        alert('You need to pick a dino!')
    }
})