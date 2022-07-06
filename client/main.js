// const nameInput = document.querySelector('#name-input');
// const submitBtn = document.querySelector('#submit-button');
// const nameInputContainer = document.querySelector("#name-container");

///////////////////////////////////////////////////////

// let newName = ''

// function addName(e) {
//     addName = e.target.value
// }

// function addNewName() {
//     let newPara = document.createElement('p')
//     newPara.textContent = newName
//     nameInputContainer.appendChild(newPara)
// }

// nameInput.addEventListener('change', addName)
// submitBtn.addEventListener('click', addNewName)

///////////////////////////////////////////////////////

// const createName = ((e) => {
//     e.preventDefault()
//     const nameInput = document.getElementById("name-input");
//     const body = {
//         newName: nameInput.value
//     }
//     axios.post('http://localhost:4000/name', body)
//     .then((res) => {
//       const nameInputContainer = document.getElementById('name-container');
//       nameInputContainer.innerHTML = ''
//       res.data.forEach((element) => {
//           const nameItem = document.createElement('p')
//           nameItem.textContent = element
//           nameItem.classList.add('string')
//           nameInputContainer.appendChild(nameItem)
//       })
//     })
// });

// const submitBtn = document.getElementById('submit-button')
// submitBtn.addEventListener('click', createName)


// const createName = ((e) => {
//         e.preventDefault()
//         const nameInput = document.getElementById("name-input");
//         const body = {
//             newName: nameInput.value
//         }
//         axios.post('http://localhost:4000/name', body)
//         .then((res) => {
//           const nameInputContainer = document.getElementById('name-container');
//           nameInputContainer.innerHTML = ''
//           res.data.forEach((element) => {
//               const nameItem = document.createElement('p')
//               nameItem.textContent = element
//               nameInputContainer.appendChild(nameItem)
//           })
//         })
//     });
    
//     const submitBtn = document.getElementById('submit-button')
//     submitBtn.addEventListener('click', createName)

/////////////////////////////////////////////////////////////////////////


// const createDinoPic = () => {
    //     let dinoPic = document.createElement('div')
    //     dinoPic.innerHTML = 'databse/params'
    //     let pictureContainer = document.getElementById('picture-container');
    //     pictureContainer.textContent = res.data;
    // }
    
    
    // const getDinosaur = () => {
        //     axios.get(`http://localhost:4000/api/dinosaur`).then((res) => {
            //        let pictureContainer = document.getElementById('picture-container');
            //        pictureContainer.textContent = 'hi dino'
            //         // createDinoPic(res.data)
            //     })
            //     .catch(error => console.log(error));
            // }
            
            // brachioBtn.addEventListener('click', getDinosaur)
            
            
            
            
const nameInput = document.querySelector('#name-input');
const submitBtn = document.querySelector('#submit-button');
const nameContainer = document.querySelector('#name-container')
            
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let namePara = document.createElement('p');
    namePara.textContent = `It's nice to meet you ${nameInput.value}!!`;
    nameContainer.appendChild(namePara);
    nameInput.value = '';

});
            



// const brachioBtn = document.querySelector('#brachiosaurus-button');
// brachioBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('brachiosaurus');
// });


const brachiosaurusSelect = document.querySelector('#brachiosaurus-button');

const getDinosaur = (e) => {
    e.preventDefault()
    axios.get('http://localhost:4000/api/getDinosaur')
    .then(( {data} ) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
};



brachiosaurusSelect.addEventListener('change', getDinosaur)

