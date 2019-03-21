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







    return {
        showOnPage
    }

})()