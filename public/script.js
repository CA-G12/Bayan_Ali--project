const searchInput = document.querySelector('.search-input')

searchInput.addEventListener('keyup', () => {
    const data = 'searchInput.value'
    const settings = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }
    fetch('/search', settings)
})


// const data = { username: 'example' };

// fetch('https://example.com/profile', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });