const ViewModule = (() => {


    function showOnPage(newArray) {


        newArray.forEach(function (element) {

            const $newParagraf = $("<div>");

            $newParagraf.addClass("col-4 movie-card");

            $newParagraf.attr("data-id", element.id);


            const imageOnPage = $('<img>').attr('src', element.image.medium);
            imageOnPage.attr("data-id", element.id);


            $newParagraf.append(imageOnPage);
            $newParagraf.append($("<p>").append(element.name).attr("data-id", element.id));
            $(".row").prepend($newParagraf);

        })
    }
    function showOnPageOneMovieInfo(oneShow) {
        console.log(oneShow);
        const $imageOfMovie = ($("<img>").attr("src", oneShow.image));
        const $divMovie = $("<div>").attr("class", "col-6").append($imageOfMovie);
        $imageOfMovie.css("width", "100%");
        $divMovie.append($imageOfMovie);

        const $divSummary = $("<div>").addClass("col-12");
        $divSummary.prepend($("<h1>Show details</h1>"));
        $divSummary.append($(`<p>${oneShow.summary}</p>`))

        $(".summary").prepend($divSummary);
        $(".oneMovie").prepend($divMovie);
        const $castDiv = $("<div>").addClass("col-6");
        $castDiv.prepend("<h1>Cast List</h1>");
        const $castList = $("<ul>")
        const $castArrey = oneShow.cast.slice(0, 6);
        console.log($castArrey)
        $castArrey.forEach(function (element) {
            $castList.append($(`<li>${element.person.name}</li>`))

        })

        $castDiv.append($castList);
        $(".oneMovie").append($castDiv);
















    }







    return {
        showOnPage,
        showOnPageOneMovieInfo
    }

})()