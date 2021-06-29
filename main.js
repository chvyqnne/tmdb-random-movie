const apiKey = "161f848b3d5da5f2b9bd64c95b5f643a"
const imgURL = "https://image.tmdb.org/t/p/w500"

const getMovieData = (tmdbID) => {
    fetch("https://api.themoviedb.org/3/movie/"+tmdbID+"?api_key="+apiKey+"&language=en-US")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        const movieTitleElement = document.getElementById("movieTitle")
        const moviePosterElement = document.getElementById("moviePoster")
        movieTitleElement.innerHTML = data.title
        moviePosterElement.setAttribute("src", imgURL.concat(data.poster_path))
    })
    .catch((error) => {
        console.log(error)
    })
}

const onButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * films.length)
    const tmdbID = films[randomIndex].tmdbID
    getMovieData(tmdbID)
}