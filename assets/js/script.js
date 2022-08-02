// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   fetch('https://imdb-api.com/en/API/Title/k_1234567/tt1832382', requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));



// variable list
var searchShow = document.querySelector("#searchBtn");
var show = document.querySelector("#enterShow");

searchShow.addEventListener("click", showSearch);

// search function

function showSearch() {
  var input = show.value
  var url = `https://imdb-api.com/en/API/MostPopularTVs/k_72kh8az4`
  // var url = `http://api.openweathermap.org/go/1.0/direct?q=$e{input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data);
  })
};

