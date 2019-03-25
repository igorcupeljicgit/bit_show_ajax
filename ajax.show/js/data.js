
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

function fetchShow() {
  const request = fetch(`${API_BASE}/shows`)
    .then((showArray) => {
      return showArray.json()
    }).then((showArray) => {
      const newArray = showArray.slice(0, 51).map(show => {
        const { name, id, image } = show;
        return new Show(name, id, image);
      });
      return newArray;
    });

  return request;
}

function fetchSingleShow(id) {
  const request = fetch(`${API_BASE}/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      const show = new ShowDetails(
        response.name,
        response.id,
        response.image.medium,
        response.summary,
        response._embedded.seasons,
        response._embedded.cast
      );
      // console.log(show)
      return show
    })

  return request


}
function searchShows(data) {
  const showsPromise = fetch(`${API_BASE}/search/shows?q=${data}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      const lsistOfShows = response.map(show => {
        const { name, id, image, summary } = show.show;
        return new ShowDetails(name, id, image, summary);
      });
      return lsistOfShows
    })

  return showsPromise
}



export {
  fetchShow,
  fetchSingleShow,
  searchShows
};

