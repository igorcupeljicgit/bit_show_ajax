const main = ((data, view) => {
  function setUpEventListeners() {
    console.log("event listeners set");
    const searchBar = $(".form-control");
    searchBar.on("input", onSearchHandler);
  }
  //------HOME PAGE-------

  function init() {
    console.log("init");
    setUpEventListeners();
    data.fetchShow(onSuccess);
  }

  function onSuccess(data) {
    console.log("onsucc", data);
    view.showOnPage(data);
    $(".movie-card").on("click", movieclickhandler);
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
    data.fetchSingleShow(onSuccessOneMovie, id);
  }

  function onSuccessOneMovie(data) {
    view.showOnPageOneMovieInfo(data);
  }
  //--------SEARCH BAR--------
  function onSearchHandler(event) {
    const serachValue = $(event.target).val();
    data.searchShows(onSearchSuccses, serachValue);
  }
  function onSearchSuccses(lsistOfShows) {
    view.displayListOfMovies(lsistOfShows);
    $(".list-group-item").on("click", movieclickhandler);
  }

  return {
    init,
    initSecondPage
  };
})(dataModule, ViewModule);
