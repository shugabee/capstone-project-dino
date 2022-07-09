const nameInput = document.querySelector('#name-input');
const submitBtn = document.querySelector('#submit-button');
const nameContainer = document.querySelector('#name-container');
const pictureContainer = document.querySelector('#picture-container');
const brachioSelect = document.querySelector('#brach');
const stegSelect = document.querySelector('#steg');
const tRexSelect = document.querySelector('#t-rex');
const triSelect = document.querySelector('#tri');
const ankylSelect = document.querySelector('#ankyl');
const beachSelect = document.querySelector('#beach-location');
const forestSelect = document.querySelector('#forest-location');
const mountainSelect = document.querySelector('#mountain-location');
const desertSelect = document.querySelector('#desert-location')
const deletePicture = document.querySelector('#delete-container')
const form = document.querySelector('form');

                                                           
const getBrach = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
    .then(( { data }) => {
        console.log(data)
        let dinoPic = document.createElement('img')
        dinoPic.src = data[0].dinosaur_url
        pictureContainer.appendChild(dinoPic)
    }) 
    .catch((error) => {
        console.log(error)
    })
}
brachioSelect.addEventListener('change', getBrach)

const getSteg = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
    .then(( { data }) => {
        console.log(data)
        console.log(data[0].dinosaur_url)

        let dinoPic = document.createElement('img')
        dinoPic.src = data[0].dinosaur_url
        pictureContainer.appendChild(dinoPic)
    })
    .catch((error) => {
        console.log(error)
    })
}
stegSelect.addEventListener('change', getSteg);

const getTrex = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
    .then(( { data }) => {
        let dinoPic = document.createElement('img')
        dinoPic.src = data[0].dinosaur_url
        pictureContainer.appendChild(dinoPic)
    })
    .catch((error) => {
        console.log(error)
    })
}
tRexSelect.addEventListener('change', getTrex);

const getTri = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
    .then(( { data }) => {
        let dinoPic = document.createElement('img')
        dinoPic.src = data[0].dinosaur_url
        pictureContainer.appendChild(dinoPic)
    })
    .catch((error) => {
        console.log(error)
    })
}
triSelect.addEventListener('change', getTri);

const getAnkyl = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
    .then(( { data }) => {
        let dinoPic = document.createElement('img')
        dinoPic.src = data[0].dinosaur_url
        pictureContainer.appendChild(dinoPic)
    })
    .catch((error) => {
        console.log(error)
    })
}
ankylSelect.addEventListener('change', getAnkyl);


const getBeach = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/locations/${event.target.value}`)
    .then(( { data }) => {
        let locationPic = document.createElement('img')
        locationPic.src = data[0].location_url
        pictureContainer.appendChild(locationPic)
    })
    .catch((error) => {
        console.log(error)
    })
}
beachSelect.addEventListener('click', getBeach);

const getForest = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/locations/${event.target.value}`)
    .then(( { data }) => {
        let locationPic = document.createElement('img')
        locationPic.src = data[0].location_url
        pictureContainer.appendChild(locationPic)
    })
    .catch((error) => {
        console.log(error)
    })
}
forestSelect.addEventListener('click', getForest);

const getMountain = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/locations/${event.target.value}`)
    .then(( { data }) => {
        let locationPic = document.createElement('img')
        locationPic.src = data[0].location_url
        pictureContainer.appendChild(locationPic)
    })
    .catch((error) => {
        console.log(error)
    })
}
mountainSelect.addEventListener('click', getMountain);

const getDesert = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/locations/${event.target.value}`)
    .then(( { data }) => {
        let locationPic = document.createElement('img')
        locationPic.src = data[0].location_url
        pictureContainer.appendChild(locationPic)
    })
    .catch((error) => {
        console.log(error)
    })
}
desertSelect.addEventListener('click', getDesert);






let dinoName = document.querySelector('#dd-dino')
let dinoUrl = document.querySelector('#add-url')

let body = {
    dinoName: dinoName.value,
    url: url.value
}

const createDino = (body) => {
    axios.post(`http://localhost:4000/api/createDino`, body)
    .then(() => {})
}

const createMovieBtn = () => {

}






const deletePictureContainer = () => {
    axios.delete(`http://localhost:4000/api/deletePicture`)
    .then(() => alert('Your picture has been deleted'))
    .catch((error) => console.log(error))
}
deletePicture.addEventListener('click', deletePictureContainer)

////////////////////////////////////////////

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let namePara = document.createElement('p');
    namePara.textContent = `It's nice to meet you ${nameInput.value}!!`;
    nameContainer.appendChild(namePara);
    nameInput.value = '';


   
   if (brachioSelect.checked) {
     getBrach()
    // console.log('brach is checked')
   }
   else if (stegSelect.checked) {
     getSteg()
    // console.log('stego is checked')
   }
   else {console.log('no dino yet')}
})