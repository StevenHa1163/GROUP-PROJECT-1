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

// testing search input to search for title
// var searchInputVal = document.querySelector("#search-input").value;
// var queryString = ''
// click event
searchShow.addEventListener("click", showSearch);
// search function


// testing get parameters function
// function getParams() {
//   var searchParamsArr = document.location.search.split('&')

//   var query = searchParamsArr[0].split('=').pop();
   
//   searchApi(query)
// }


// full title rank
// const DISPLAY_LIMIT = 5;
// function showSearch() {
//   var input = show.value
//   var url = `https://imdb-api.com/en/API/MostPopularTVs/k_72kh8az4`
//   // var url = 'https://api.watchmode.com/v1/title/345534/details/?apiKey=ci6ux2nzkeIC5BKgFcV6wO4d23T401iYpZuy7Won&append_to_response=sources'
//   // var url = `https://imdb-api.com/en/API/SearchSeries/k_72kh8az4`
//   // var url = `http://api.openweathermap.org/go/1.0/direct?q=$e{input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
//   fetch(url).then(function (res) {
//     return res.json();
//   }).then(function (data) {
//     console.log(data)
//     var resultsContainer = document.querySelector("#results");
//     for (let index = 0; index < DISPLAY_LIMIT; index++) {
//       const element = data.items[index];
//       const itemContainer = document.createElement("div");
//       const itemTitle = document.createElement("h2");
//       const itemRank = document.createElement("p");
//       itemTitle.textContent = element.fullTitle;
//       itemRank.textContent = element.rank;
//       itemContainer.append(itemTitle,itemRank);
//       resultsContainer.append(itemContainer);
//       console.log(resultsContainer);

//     }
//   })
// };



//TESTING

const DISPLAY_LIMIT = 5;
function showSearch() {
  var input = show.value
  // var url = `https://imdb-api.com/en/API/MostPopularTVs/k_72kh8az4`
  // var url = 'https://api.watchmode.com/v1/title/345534/details/?apiKey=ci6ux2nzkeIC5BKgFcV6wO4d23T401iYpZuy7Won&append_to_response=sources'
  var url = `https://imdb-api.com/en/API/SearchSeries/k_72kh8az4`
  // var url = `http://api.openweathermap.org/go/1.0/direct?q=$e{input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
  url = url + "/" + input
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data)
    var resultsContainer = document.querySelector("#results");
    for (let index = 0; index < DISPLAY_LIMIT; index++) {
      const element = data.results[index];
      const itemContainer = document.createElement("div");
      const itemTitle = document.createElement("h2");
      const itemDesc = document.createElement("p");
      itemTitle.textContent = element.title;
      itemDesc.textContent = element.description;
      itemContainer.append(itemTitle,itemDesc);
      resultsContainer.append(itemContainer);
      console.log(resultsContainer);

    }
  })
};

//TESTING







//trying to make the search function work and search certain parameters
// function searchApi(query) {

// var locQueryUrl = 'https://imdb-api.com/en/API/MostPopularTVs/k_72kh8az4'

// locQueryUrl = locQueryUrl + '&q=' + query;

// fetch(locQueryUrl)
//   .then(function (response) {
//     if (!response.ok) {
//       throw response.json();
//     }

// return response.json();

// })
// .then(function (locRes) {

//   resultTextEl.textcontent = locRes.search.query;

//   if (!locRes.results.length) {
//     console.log('No results found');
//     resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
//   } else {
//     resultContentEL.textContent = '';
//     for (var i = 0; i < locRes.length.length; i++) {
//       printResults(locRes.results[i]);
//   }
// }
// })
// .catch(function (error) {
//   console.error(error);
// });
// }

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   searchApi(searchInputVal);
// }

// searchShow.addEventListener('click', handleSearchFormSubmit);

// getParams();




// function handleSearchBoxSubmit(event) {
//   event.preventDefault();
//   var searchInputVal = document.querySelector("#enterShow");
//   var checkboxInputs = document.querySelector("#checkboxes")

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;

//   var queryString = './search-results.html?q=' + searchInputVal + '&format=' + checkboxInputs
//   console.log(queryString)
//   }
// }



// function showSearch() {
//   var input = show.value
//   var url = `https://imdb-api.com/en/API/MostPopularTVs/k_72kh8az4`
//   // var url = `http://api.openweathermap.org/go/1.0/direct?q=$e{input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
//   fetch(url).then(function (res) {
//     return res.json();
//   }).then(function (data) {
//     console.log(data);
//   })
// };



