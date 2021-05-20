const getById = (id) => document.querySelector(`#${id}`);
const getByClassName = (name) => document.querySelector(`.${name}`);

const findBtn = getById(`btn`);
const inputText = getById(`input`);
const movies = getByClassName(`movies`);

findBtn.addEventListener('click', async function(){
  let movies = await getData(inputText.value);
  renderMovies(movies);
});

function renderMovies(movies) {
    let movieBlock = document.querySelector('.movies');
    movieBlock.style.display = 'flex';
    movieBlock.style.flexDirection = 'row';
    movieBlock.style.flexWrap = 'wrap';
    movieBlock.style.justifyContent = 'left';
    movieBlock.style.fontSize = '1.5em';

    movies.forEach(film => {
      let movieBox = document.createElement('div');
      movieBox.style.height = '50vm';
      movieBox.style.width = '25%';

      let movie = document.createElement('div');
      movie.style.height = '100%';
      movie.style.width = '90%';
      movie.style.display = 'flex';
      movie.style.flexDirection = 'column';
      movie.style.alignItems = 'center';
      movie.style.justifyContent = 'flex-end';

      let poster = document.createElement('IMG');
      poster.src = `${film.Poster}`;
      poster.style.height = '65%';
      poster.style.width = '100%';

      let title = document.createElement('span');
      title.style.backgroundColor = 'lightgrey';
      title.innerHTML = `${film.Title}`;
      title.style.width = '100%';
      title.style.height = '10%';
      title.style.textAlign = 'center';
      title.style.display = 'flex';
      title.style.alignItems = 'center';
      title.style.justifyContent = 'center';

      let type = document.createElement('span');
      type.innerHTML = `${film.Type}`;
      type.style.height = '5%';
      type.style.fontSize = `15px`;

      let year = document.createElement('span');
      year.innerHTML = `${film.Year}`;
      year.style.height = '5%';
      year.style.fontSize = `15px`;

      let movieBtn = document.createElement('button');
      movieBtn.style.width = '100%';
      movieBtn.style.height = '7%';
      movieBtn.style.backgroundColor = '#26A442';
      movieBtn.textContent = 'More details';
      movieBtn.style.color = `white`;

      movie.append(poster, title, type, year, movieBtn);
      movieBox.append(movie);
      movieBlock.append(movieBox);
  });
} 

async function getData(value) {
  return new Promise((resolve,reject) => {
    fetch(`http://www.omdbapi.com/?apikey=9671264f&s=${value}`)
      .then((res) => res.json())
      .then((res) => { resolve(res.Search) } )
      .catch((err) => { reject(err)});
  });
}