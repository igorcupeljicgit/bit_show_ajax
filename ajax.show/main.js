const main = ((data, view) => {

    function init() {
        console.log("init");
        data.fetchShow(onSuccess)
    }
    function onSuccess(data) {
        console.log("onsucc", data)
        view.showOnPage(data);
    }







    return {
        init,
        onSuccess
    }






})(dataModule, ViewModule);