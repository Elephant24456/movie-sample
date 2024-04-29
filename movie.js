const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTZkNjJlYmZiNDkxNmM5OThjNTg3MWYyYjM1MmI0ZiIsInN1YiI6IjY2MmE0YmZjZjcwNmRlMDExZTRmZjg3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EhGxKI5JoznlILY4DoELYXqrRv9-ZPsJ5TwhC97ehTQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    alert(`영화id: $`);

// 검색 구현
// 1. 영화카드리스트 선택
// 2. 영화카드리스트 클릭하면 영화상세페이지로 이동
// 3. 영화상세페이지에서 영화정보 출력