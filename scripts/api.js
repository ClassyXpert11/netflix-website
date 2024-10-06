// This is just making sure the buttons display and-- 
// --not display when clicked on their respective icons
// also to play & pause and mute & unmute
const playBtn = document.querySelector(".fa-play")
const pauseBtn = document.querySelector(".fa-pause")
const volumeBtn = document.querySelector(".fa-volume-high")
const volumeMuteBtn = document.querySelector(".fa-volume-xmark")
const plus = document.querySelector(".fa-plus")
const check = document.querySelector(".fa-circle-check")


let videoTrailer = document.querySelector(".ATSV-trailer")

playBtn.addEventListener("click", () => {
  playBtn.classList.toggle("active")
  pauseBtn.classList.toggle("active")

  videoTrailer.play()
})

pauseBtn.addEventListener("click", () => {
  playBtn.classList.toggle("active")
  pauseBtn.classList.toggle("active")

    videoTrailer.pause()
})

volumeBtn.addEventListener("click", () => {
  volumeBtn.classList.toggle("active")
  volumeMuteBtn.classList.toggle("active")

  videoTrailer.muted = true
})

volumeMuteBtn.addEventListener("click", () => {
  volumeBtn.classList.toggle("active")
  volumeMuteBtn.classList.toggle("active")
  
  videoTrailer.muted = false
})

plus.addEventListener("click", () => {
  plus.classList.toggle("active")
  check.classList.toggle("active")

  alert('Successfully added "Spider-Man Across The Spider Verse" to My List!')
})

check.addEventListener("click", () => {
  plus.classList.toggle("active")
  check.classList.toggle("active")

  alert('Removed "Spider-Man Across The Spider Verse" from My List')
})



// Displaying all the movies using for loops and different API links
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjIxZDMyN2JlZmY1NjA2YTE1NGZhOTQ1MzljODM3MiIsInN1YiI6IjY1MjU0YjgyY2VkYWM0MDBmZjI4NWM1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hD-Ck9_1_X41Pta9zQk7x6jpyZ9RsscKxl6llbx_png",
  },
};

fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-uk&sort_by=popularity.desc",
  options
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    const movies = document.querySelector(".movies");
    for (let index = 0; index <= 20; index++) {
      movies.innerHTML += `<span class="movie-list"><img class="movie-img" src="https://image.tmdb.org/t/p/original${res.results[index].backdrop_path}"><span class="movie-name">${res.results[index].title}</span></span>`;
    }
  });

fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-uk&page=2&sort_by=popularity.desc",
  options
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    const popularMovies = document.querySelector(".popular-movies");
    popularMovies.innerHTML += `<span class="popular-movies-list"><img class="popular-movie-img" src="https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg"><span class="popular-movie-name">Spider-Man: Across the Spider-Verse</span></span>`;
    for (let index = 0; index <= 20; index++) {
      if (res.results[index].title !== "Spider-Man: Across the Spider-Verse") {
        popularMovies.innerHTML += `<span class="popular-movies-list"><img class="popular-movie-img" src="https://image.tmdb.org/t/p/original${res.results[index].backdrop_path}"><span class="popular-movie-name">${res.results[index].title}</span></span>`;
      }
    }
  });

fetch("https://api.themoviedb.org/3/trending/tv/week?language=en-UK", options)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    const tvSeries = document.querySelector(".tv-series");
    for (let index = 0; index <= 20; index++) {
      tvSeries.innerHTML += `<span class="tv-list"><img class="tv-img" src="https://image.tmdb.org/t/p/original${res.results[index].backdrop_path}"><span class="tv-name">${res.results[index].name}</span></span>`;
    }
  });

fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&page=3&language=en-uk&sort_by=popularity.desc",
  options
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);

    const trendingMovies = document.querySelector(".trending-movies");
    for (let index = 0; index <= 20; index++) {
      trendingMovies.innerHTML += `<span class="trending-movie-list"><img class="trending-movie-img" src="https://image.tmdb.org/t/p/original${res.results[index].backdrop_path}"><span class="trending-movie-name">${res.results[index].title}</span></span>`;
    }
  });
