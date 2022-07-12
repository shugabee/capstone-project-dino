const nameInput = document.querySelector('#name-input');
const submitBtn = document.querySelector('#submit-button');
const nameContainer = document.querySelector('#name-container');
const pictureContainer = document.querySelector('#picture-container');
const dinoBtnContainer = document.querySelector('.dinosaurs');
const brachioSelect = document.querySelector('#brach');
const stegSelect = document.querySelector('#steg');
const tRexSelect = document.querySelector('#t-rex');
const triSelect = document.querySelector('#tri');
const ankylSelect = document.querySelector('#ankyl');
const beachSelect = document.querySelector('#beach-location');
const forestSelect = document.querySelector('#forest-location');
const mountainSelect = document.querySelector('#mountain-location');
const desertSelect = document.querySelector('#desert-location');
const deletePicture = document.querySelector('#delete-container');
const addForm = document.querySelector('#add-form');
const dinoForm = document.querySelector('#dino-form');
const addDinoSubmit = document.querySelector('#add-dino-submit');
const dinoName = document.querySelector('#add-dino');
const dinoUrl = document.querySelector('#dino-url');

const dinosaursInputs = document.querySelectorAll('input[name="radios"]')



// const getSteg = (event) => {
//     event.preventDefault()
//     axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
//     .then(( { data }) => {
//         console.log(data)
//         console.log(data[0].dinosaur_url)
        
//         let dinoPic = document.createElement('img')
//         dinoPic.src = data[0].dinosaur_url
//         pictureContainer.appendChild(dinoPic)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }
// stegSelect.addEventListener('change', getSteg);

// const getTrex = (event) => {
//     event.preventDefault()
//     axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
//     .then(( { data }) => {
//         let dinoPic = document.createElement('img')
//         dinoPic.src = data[0].dinosaur_url
//         pictureContainer.appendChild(dinoPic)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }
// tRexSelect.addEventListener('change', getTrex);

// const getTri = (event) => {
//     event.preventDefault()
//     axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
//     .then(( { data }) => {
//         let dinoPic = document.createElement('img')
//         dinoPic.src = data[0].dinosaur_url
//         pictureContainer.appendChild(dinoPic)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }
// triSelect.addEventListener('change', getTri);

// const getAnkyl = (event) => {
//     event.preventDefault()
//     axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
//     .then(( { data }) => {
//         let dinoPic = document.createElement('img')
//         dinoPic.src = data[0].dinosaur_url
//         pictureContainer.appendChild(dinoPic)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }
// ankylSelect.addEventListener('change', getAnkyl);


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




            


const createDinoInput = () => {
    let dinoLabel = document.createElement('label');
    let dinoInput = document.createElement('input');
        dinoInput.classList.add('dinosaurs');
        dinoInput.setAttribute('type', 'radio');
        dinoInput.setAttribute('name', 'radios');
        dinoInput.setAttribute('value', 'new');
        dinoInput.setAttribute('checked', 'checked');
        dinoInput.data = dinoUrl.value;
        dinoLabel.appendChild(dinoInput);
        dinoLabel.innerHTML = dinoName.value;
        dinoBtnContainer.appendChild(dinoLabel);
}
/////////

const createNewDino = (event) => {
    event.preventDefault();

    const reqBody = {
        dinoName: dinoName.value,
        dinoUrl: dinoUrl.value
    }
    
    axios.post('http://localhost:4000/api/dinosaur', reqBody)
    .then((res) => {
        console.log(res)
        createDinoInput()
        dinoName.value = '';
        dinoUrl.value = '';
    }) 
    .catch((error) => {
        console.log('error')
    })
    
}

addForm.addEventListener('submit', createNewDino);
/////////











// const createDino = (event) =>{
//     event.preventDefault()
//     axios.post('http://localhost:4000/api/dinosaur', reqBody)
//     .then((res) => {
//         console.log(reqBody)
//     }) 
//     .catch((error) => {
//         console.log('error')
//     })
// }
// addDinoSubmit.addEventListener('click', createDino);



const deletePictureContainer = () => {
    axios.delete(`http://localhost:4000/api/delete`)
    .then(() => alert("Your picture has been deleted"))
    .catch((error) => console.log(error))
}
deletePicture.addEventListener('click', deletePictureContainer)


////////////////////////////////////////////


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


const getDino = (event) => {
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
};


dinoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let namePara = document.createElement('p');
    namePara.textContent = `It's nice to meet you ${nameInput.value}!!`;
    nameContainer.appendChild(namePara);
    nameInput.value = '';
    


    // for (let i = 0; i < dinosaursInputs.length; i++) {
    // if (dinosaursInputs[i].checked) {
    //     console.log(dinosaursInputs[i])
    //     getDino();
    // }
// }



    if (brachioSelect.checked) {
        getBrach();
    }
});









// for (let i = 0; i < dinosaursInputs.length; i++) {
//     dinosaursInputs[i].addEventListener('checked', getDino)
//     console.log('frogs')
//     }








//     brachioSelect.addEventListener('change', getBrach)
    

//    else if (stegSelect.checked) {
//      getSteg()
//     // console.log('stego is checked')
//    }
//    else {console.log('no dino yet')}

