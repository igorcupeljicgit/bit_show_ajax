import { fetchShow, fetchSingleShow, searchShows } from "./data.js"
import { showOnPage, showOnPageOneMovieInfo, displayListOfMovies } from "./view.js"

function setUpEventListeners() {
  console.log("event listeners set");
  const searchBar = $(".form-control");
  searchBar.on("input", onSearchHandler);
}
//------HOME PAGE-------

function init() {
  console.log("init");
  setUpEventListeners();
  fetchShow()
    .then((request) => {
      showOnPage(request);
      $(".movie-card").on("click", movieclickhandler);

    });
}



function movieclickhandler(event) {
  const id = $(event.target).attr("data-id");
  localStorage.setItem("id", id);
  window.location.href = "./second.html";
}

//-----SECOND PAGE------
function initSecondPage() {
  setUpEventListeners();
  const id = localStorage.getItem("id");
  fetchSingleShow(id)
    .then((request) => {
      showOnPageOneMovieInfo(request)
      $(".movie-card").on("click", movieclickhandler);
    });
}


//--------SEARCH BAR--------
function onSearchHandler(event) {
  const serachValue = $(event.target).val();
  searchShows(serachValue)
    .then(onSearchSuccses)
}
function onSearchSuccses(arreyOfShows) {
  displayListOfMovies(arreyOfShows);
  $(".list-group-item").on("click", movieclickhandler);
}

export {
  init,
  initSecondPage
};
