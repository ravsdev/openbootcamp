let map;

const markers = [
    {
        title: "Tokyo",
        position: {
            lat: 35.66816254732365,
            lng: 139.7463495698088
        }
    },
    {
        title: "Roma",
        position: {
            lat: 41.8863117071222,
            lng: 12.531590833661863
        }
    },
    {
        title: "Islandia",
        position: {
            lat: 65.01734445155137,
            lng: - 18.614293783407042
        }
    }
];



function initMap() {
    const posicion = {
        lat: 0,
        lng: 0
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: posicion
    });

    markers.forEach(({position,title}) => {
        new google.maps.Marker({
            position: position,
            map,
            title: title
        });
    })

}