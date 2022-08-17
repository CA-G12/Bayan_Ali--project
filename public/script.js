const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
searchBtn.addEventListener('click', () => {
    const data = searchInput.value;
    console.log('front query sent:', data);
    const options = {
        method: 'POST',
        body: JSON.stringify({ name: data }),
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(`/search`, options)

    console.log('under fetch');
})

// const formInpt = document.querySelector('.form-inpt');
// const submit = document.querySelector('.form-btn');


// submit.addEventListener('click', () => {
//     // e.preventDefault();
//     const data = formInpt.value;

//     console.log('form data:', JSON.stringify(data));
// })