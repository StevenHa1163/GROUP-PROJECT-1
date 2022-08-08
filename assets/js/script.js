// variable list
var searchShow = document.querySelector("#searchBtn");
var show = document.querySelector("#enterShow");

// click event
searchShow.addEventListener("click", showSearch);
// search function


//TESTING
// Retrieve history of searches if present otherwise setting up empty history
// var searches = JSON.parse(localStorage.getItem("searches")) || [];
// console.log(searches);

// searchShow.addEventListener("click", showSearch);

// function displayHistory() {
//     $(".searches").empty();

//     for (let i = 0; i < searches.length; i++) {
//      console.log(i);

//      var button = $("button")
//      button.text(searches[i])
//      $(".searches").append(button);


// var searchBox = document.querySelector(".input-group");
// searchBox.innerHTML = ('');
//    var btn = document.createElement("button")
//    btn.innerText = searches[i]
//    btn.addEventListener("click", displayHistory);
//    form-control.appendChild(btn);

//     }  
// }
// displayHistory();

const DISPLAY_LIMIT = 3;
function showSearch() {
  var input = show.value

  //   if (!searches.includes(input)){
  //     searches.push(input)
  //  //    resaving 
  //     localStorage.setItem("searches", JSON.stringify(searches));

  //     }

  //  displayHistory();

 
  var url = 'https://api.watchmode.com/v1/search/?apiKey=BjJ1HfK8A6JaMjMk0UCbaDWrNACDpoIyzqqZEVDY&search_field=name&search_value='
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
      itemContainer.setAttribute("data-imdbid", itemId);
      const itemTitle = document.createElement("h2");
      const itemDesc = document.createElement("p");
      // const itemID = document.createElement("p");
      itemTitle.textContent = element.name;
      itemDesc.textContent = element.type;


      // Monica start
      // Title
      itemTitle.innerHTML = "Title: " + element.name
      // Description
      itemDesc.innerHTML = "Description: " + element.type
      // Trailer
      // link.innerHTML = "Trailer: " + element
      // Monica End


      // itemID.textContent = element.imdb_id;
      // itemID.textContent = element.imdb_id;
      itemContainer.append(itemTitle, itemDesc);
      resultsContainer.append(itemContainer);
      console.log(resultsContainer);
      console.log(itemContainer.getAttribute("data-imdbid"))
      addTrailer(itemId, itemContainer)
    }
  })
};

//k_72kh8az4
function addTrailer(itemId, itemContainer) {
  // var url = "https://api.watchmode.com/v1/title/"+itemId+"/details/?apiKey=BjJ1HfK8A6JaMjMk0UCbaDWrNACDpoIyzqqZEVDYWon&append_to_response=sources"
  var url = "https://imdb-api.com/en/API/Trailer/k_5amc983n/" + itemId + ""
  // console.log(itemId);
  // console.log(url)
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    console.log(data)
    const element = data.linkEmbed;
    console.log(element);
    const a = document.createElement('a');
    const link = document.createTextNode("trailer");
    a.appendChild(link);
    a.href = element;
    // a.title = "trailer";
    // itemTrailer.textContent = element;
    itemContainer.append(a);
    console.log(itemContainer);
  })

}


