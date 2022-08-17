//access elements from html
const inputSearch = document.querySelector('.input-search')
const buttSearch = document.querySelector('.btn-search')
buttSearch.addEventListener('click', () => {
    const data = inputSearch.value;
    const options = {
        method: 'POST',
        body: JSON.stringify({ name: data }),
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(`/search`, options)
    .then(res => res.json())
    .then(data => createCards(data))
    inputSearch.value=""
})

let movieSection = document.querySelector(".movies");

  //function to create element
function createEle(ele, className, parent) {
    let element = document.createElement(ele);
    element.classList.add(className);
    parent.appendChild(element);
    return element;
  }
  
  function createCards(data) {
    movieSection.innerHTML = "";
    data.results.forEach((element, i) => {
      const card = createEle("div", "card", movieSection);
  
      const img = createEle("img", "img-card", card);
      img.setAttribute("src", `https://image.tmdb.org/t/p/w500//${element.poster_path}`);
  
      const details = createEle("div", "details", card);
  
      const movieName = createEle("p", "p-movie-name", details);
      movieName.textContent = `${element.title}`;
  
      const movieRate = createEle("p", "p-movie-name", details);
      movieRate.textContent = `${element.vote_average}`;
  
      const summaryButt = createEle("button", "button", card);
      summaryButt.textContent = "More";
  
      summaryButt.addEventListener('click', (e) => {
        e.preventDefault();
        /// make pop-up
      })
    })
}
///// fetch default data on load
    fetch("/apiMovies")
    .then(res => res.json())
    .then(data => createCards(data))