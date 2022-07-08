const nameInput = document.querySelector('#name-input');
const submitBtn = document.querySelector('#submit-button');
const nameContainer = document.querySelector('#name-container')
const form = document.querySelector('form');
            
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let namePara = document.createElement('p');
    namePara.textContent = `It's nice to meet you ${nameInput.value}!!`;
    nameContainer.appendChild(namePara);
    nameInput.value = '';



});
            

////////// 

// const getDinosaur = (e) => {
    //         e.preventDefault()
    //         axios.get('http://localhost:4000/api/getDinosaur')
    //         .then(( {data} ) => {
        //                 console.log(data)
        //             })
        //             .catch((error) => {
            //                     console.log(error)
            //                 })
            //             };
            
            // brachioSelect.addEventListener('change', getDinosaur)
            ////////////            
            
            
            
            // const getBrach = (e) => {
                //     e.preventDefault()
                //     axios.get('http://localhost:4000/api/getBrach/:id')
                //     .then(( {data} ) => {
                    //         console.log(data)
                    //     })
                    //     .catch((error) => {
                        //         console.log(error)
                        //     })
                        // }
                        
                        // brachSelect.addEventListener('change', getBrach)
                        
                        
const brachioSelect = document.querySelector('#brach')
                        
const getBrach = (event) => {
    event.preventDefault()
    axios.get(`http://localhost:4000/api/dinosaurs/${event.target.value}`)
    .then(( {data} ) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
}

brachioSelect.addEventListener('change', getBrach)

// form.addEventListener('submit', )