const dataModule = (() => {
  const API_BASE = "http://api.tvmaze.com";

  class Show {
    constructor(name, id, image, summary) {
      this.name = name;
      this.id = id;
      this.image = image;
      this.summary = summary;
    }
  }

  class ShowDetails extends Show {
    constructor(name, id, image, summary, seasons, cast) {
      super(name, id, image, summary);
      this.seasons = seasons;
      this.cast = cast;
    }
  }

  function fetchShow(onSuccess) {
    const request = `${API_BASE}/show`;

    $.get(request, function(showArray) {
      const newArray = showArray.slice(0, 51).map(show => {
        const { name, id, image } = show;
        return new Show(name, id, image);
      });

      onSuccess(newArray);
    });
  }

  function fetchSingleShow(onSucessOneMovie, id) {
    const request = `${API_BASE}/shows/${id}?embed[]=seasons&embed[]=cast`;

    $.get(request, response => {
      const show = new ShowDetails(
        response.name,
        response.id,
        response.image.medium,
        response.summary,
        response._embedded.seasons,
        response._embedded.cast
      );

      onSucessOneMovie(show);
    });
  }
  function searchShows(onSearchSuccses, data) {
    const request = `${API_BASE}/search/shows?q=${data}`;

    $.get(request, response => {
      const lsistOfShows = response.map(show => {
        const { name, id, image, summary } = show.show;
        return new ShowDetails(name, id, image, summary);
      });
      onSearchSuccses(lsistOfShows);
    });
  }

  return {
    fetchShow,
    fetchSingleShow,
    searchShows
  };
})();
