const ViewModule = (() => {


    function showOnPage(newArray) {


        newArray.forEach(function (element) {


            const newParagraf = $("<div>")

            newParagraf.addClass("col-4")

            newParagraf.attr("data-id", element.id)

            console.log(element)

            const imageOnPage = $('<img>').attr('src', element.image.medium);

            newParagraf.append(imageOnPage);
            newParagraf.append($("<p>").append(element.name));
            $(".row").prepend(newParagraf);

        })



    }







    return {
        showOnPage
    }

})()