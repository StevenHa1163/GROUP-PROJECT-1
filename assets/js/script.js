// variable list
var searchShow = document.querySelector("#searchBtn");
var show = document.querySelector("#enterShow");

// testing search input to search for title
// var searchInputVal = document.querySelector("#search-input").value;
// var queryString = ''

// click event
searchShow.addEventListener("click", showSearch);
// search function



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
// Retrieve history of searches if present otherwise setting up empty history
var searches = JSON.parse(localStorage.getItem("searches")) || [];
console.log(searches);

searchShow.addEventListener("click", showSearch);

function displayHistory() {
    $(".searches").empty();

    for (let i = 0; i < searches.length; i++) {
     console.log(i);
    
     var button = $("button")
     button.text(searches[i])
     $(".searches").append(button);


  // var searchBox = document.querySelector(".input-group");
  // searchBox.innerHTML = ('');
  //    var btn = document.createElement("button")
  //    btn.innerText = searches[i]
  //    btn.addEventListener("click", displayHistory);
  //    form-control.appendChild(btn);

    }  
}
displayHistory();

const DISPLAY_LIMIT = 50;
function showSearch() {
  var input = show.value

  if (!searches.includes(input)){
    searches.push(input)
 //    resaving 
    localStorage.setItem("searches", JSON.stringify(searches));
 
    }
   
 displayHistory();

  // var url = `https://imdb-api.com/en/API/MostPopularTVs/k_72kh8az4`
  // var url_watch = 'https://api.watchmode.com/v1/title/345534/details/?apiKey=ci6ux2nzkeIC5BKgFcV6wO4d23T401iYpZuy7Won&append_to_response=sources"
  // var url = `https://imdb-api.com/en/API/SearchSeries/k_72kh8az4`
  var url = 'https://api.watchmode.com/v1/search/?apiKey=BjJ1HfK8A6JaMjMk0UCbaDWrNACDpoIyzqqZEVDY&search_field=name&search_value='
  // var url = `http://api.openweathermap.org/go/1.0/direct?q=$e{input}&limit=1&appid=ac75e314d25573644ae4d9a903da5c8c`
  url = url + input
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data)
    var resultsContainer = document.querySelector("#results");
    for (let index = 0; index < DISPLAY_LIMIT; index++) {
      const element = data.title_results[index];
      const itemContainer = document.createElement("div");
      const itemId = element.imdb_id;
      itemContainer.setAttribute("data-imdbid",itemId);
      const itemTitle = document.createElement("h2");
      const itemDesc = document.createElement("p");
      // const itemID = document.createElement("p");
      itemTitle.textContent = element.name;
      itemDesc.textContent = element.type;
      // itemID.textContent = element.imdb_id;
      // itemID.textContent = element.imdb_id;
      itemContainer.append(itemTitle,itemDesc);
      resultsContainer.append(itemContainer);
      console.log(resultsContainer);
      console.log(itemContainer.getAttribute("data-imdbid"))
      addTrailer(itemId, itemContainer)
    }
  })
};


function addTrailer(itemId, itemContainer) {
  var url = "https://api.watchmode.com/v1/title/"+itemId+"/details/?apiKey=ci6ux2nzkeIC5BKgFcV6wO4d23T401iYpZuy7Won&append_to_response=sources"
  // var url = "https://imdb-api.com/en/API/Trailer/k_72kh8az4/"+itemId+""
  // console.log(itemId);
  // console.log(url)
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data)
    const element = data.trailer;
    console.log(element);
    const a = document.createElement('a');
    const link = document.createTextNode(element);
    a.appendChild(link);
    a.href = "element";
    // a.title = "trailer";
    // itemTrailer.textContent = element;
    itemContainer.append(a);
    console.log(itemContainer);
  })

}



