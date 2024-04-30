const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTZkNjJlYmZiNDkxNmM5OThjNTg3MWYyYjM1MmI0ZiIsInN1YiI6IjY2MmE0YmZjZjcwNmRlMDExZTRmZjg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EhGxKI5JoznlILY4DoELYXqrRv9-ZPsJ5TwhC97ehTQ'
    }
  };
  
  fetch(
    'https://api.themoviedb.org/3/movie/top_rated?language=en&page=1',
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let movies = response['results']; //가져온 json자료들을 movies에 할당
      topMovies = response['results']; // map으로 할당
  
      //▼불러온 results 배열들을 돌리면서 각각 카드 만들기
      movies.forEach((a) => {
        createMovieCard(a);
      });
    });

// HTML의 ID 값을 이용해 요소를 가져오기
let movieCardsContainer = document.getElementById('movieCards');

// 영화 카드 만들기
function createMovieCard(movie) {
  // 필요한 변수에 객체의 속성 값 할당
  const { id: movieId, title: movieTitle, overview: movieOverview, vote_average: movieAverage, poster_path: moviePoster } = movie;

  // HTML에서 div 요소 새로 만들고 class 부여하기
  const card = document.createElement('div');
  card.className = 'movie-card'; // classList.add 대신 className 사용
  // card 내부 HTML 설정
  card.innerHTML = `
    <div class="card">
      <img src="https://image.tmdb.org/t/p/w200/${moviePoster}" class="card-img-top" alt="${movieTitle}"/>
      <p id="cardtitle">${movieTitle}</p>
      <p class="stars">Scores <span class="starscolor">${movieAverage}</span></p>
      <p class="overview">${movieOverview}</p>
    </div>`;

  // 생성된 card를 movieCardsContainer에 자식 요소로 추가
  movieCardsContainer.appendChild(card);

  // 영화 제목과 카드를 Map 키 값으로 설정
  movieMap.set(movieTitle, card);

  // 만들어진 카드 클릭 시 해당 영화의 ID 값을 알림으로 표시
  card.addEventListener('click', function() {
    alert(`영화 ID는 ${movieId}입니다.`);
  });
}
