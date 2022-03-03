var userFormEl = document.querySelector("#user-form");
var languageButtonsEl = document.querySelector("#citybuttons");
var cityInputEl = document.querySelector("#cityname");
var cityContainerEl = document.querySelector("#cities-container");
var repoSearchTerm = document.querySelector("#city-search-term");

//Submit form//
var formSubmitHandler = function (event) {
  event.preventDefault();

  var cityname = cityInputEl.value.trim();

  if (cityname) {
    getCityNames(cityname);

    cityContainerEl.textContent = "";
    console.log();
    cityInputEl.value = "";
    //console.log(cityContainerEl.value);
  } else {
    alert("Please enter correct city name");
  }
};
//Submit form end//

//Button click event//
var buttonClickHandler = function (event) {
  var language = event.target.getAttribute("data-language");

  if (language) {
    getFeaturedRepos(language);

    repoContainerEl.textContent = "";
  }
};
//End button click//

//Get API data//

var getCityNames = function (user) {
  var APP_KEY = "e88cb3ff66f8d540caf49e9346984117";

  var apiUrl =
    "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=Hourly,Daily&appid={APP_KEY}";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        // console.log(response);
        response.json().then(function (lat) {
          console.log(lat);
          displayCities(lat, lon);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to GitHub");
    });
};

//End Get API data//

/*
var getFeaturedRepos = function (language) {
  var apiUrl =
    "https://api.github.com/search/repositories?q=" +
    language +
    "+is:featured&sort=help-wanted-issues";

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
};

var displayRepos = function (repos, searchTerm) {
  if (repos.length === 0) {
    repoContainerEl.textContent = "No repositories found.";
    return;
  }

  repoSearchTerm.textContent = searchTerm;

  for (var i = 0; i < repos.length; i++) {
    var repoName = repos[i].owner.login + "/" + repos[i].name;

    var repoEl = document.createElement("a");
    repoEl.classList = "list-item flex-row justify-space-between align-center";
    repoEl.setAttribute("href", "./single-repo.html?repo=" + repoName);

    var titleEl = document.createElement("span");
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    var statusEl = document.createElement("span");
    statusEl.classList = "flex-row align-center";

    if (repos[i].open_issues_count > 0) {
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" +
        repos[i].open_issues_count +
        " issue(s)";
    } else {
      statusEl.innerHTML =
        "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl);

    repoContainerEl.appendChild(repoEl);
  }
};
*/
userFormEl.addEventListener("submit", formSubmitHandler);
//languageButtonsEl.addEventListener("click", buttonClickHandler);
