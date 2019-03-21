const main = ((data, view) => {

    function init() {
        console.log("init");
        data.fetchShow(onSuccess)
    }
    function onSuccess(data) {
        console.log("onsucc", data);
        view.showOnPage(data);
        $(".movie-card").on("click",movieclickhandler);
    }
    function initSecondPage() {

        console.log("init");
        const id=localStorage.getItem("id");
        data.fetchSingleShow(onSuccesOneMovie,id);
        


    }
    function onSuccesOneMovie(data) {
        console.log("MovieInfo", data)
        view.showOnPageOneMovieInfo(data);
    }
    function movieclickhandler(event){
        
    const id= $(event.target).attr("data-id");
    localStorage.setItem("id", id);
    window.location.href='./second.html';


    }









    return {
        init,
        onSuccess,
        initSecondPage,
        onSuccesOneMovie
    }






})(dataModule, ViewModule);