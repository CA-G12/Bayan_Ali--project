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
        .then(res => res.json())
        .then(data => createCards(data))
})
