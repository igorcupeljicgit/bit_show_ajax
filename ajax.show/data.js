const dataModule = (() => {

    const API_BASE = "http://api.tvmaze.com";

    class Show {
        constructor(name, id, image) {
            this.name = name,
                this.id = id,
                this.image = image


        }
        getInfo() {
            return `${this.name}
                    ${this.id}
                    ${this.image}`


        }
    }

    function fetchShow(onSuccess) {

        const request = `${API_BASE}/show`;

        $.get(request, function (showArray) {
            const newArray = showArray.slice(0, 51).map(show => {
                const { name, id, image } = show;
                return new Show(name, id, image);
            });

            onSuccess(newArray)

        })

    }


    return {
        fetchShow,

    }

})();
