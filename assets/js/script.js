/**
 * Google map with marker.
 */
var markerUrl = "http://dev.keoshi.com/a8c/gmaps/marker-01.png";

var locationsJSON =
    [
        {
            "marker": { "lat": 47.6062095, "lng": -122.3320708 },
            "details": {
                "heading": "",
                "description": "This is desc text",
                "thumbnail": "",
                "link": "",
            }
        },
        {
            "marker": { "lat": 37.3382082, "lng": -121.8863286 },
            "details": {
                "heading": "Lorem ipsum",
                "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet mauris nibh",
                "thumbnail": "https://via.placeholder.com/300",
                "link": "",
            }
        },
        {
            "marker": { "lat": 22.396428, "lng": 114.109497 },
            "details": {
                "heading": "Lorem",
                "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet mauris nibh",
                "thumbnail": "https://via.placeholder.com/300",
                "link": "",
            }
        },
        {
            "marker": { "lat": 51.5073509, "lng": -0.12775829 },
            "details": {
                "heading": "Heading Text",
                "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet mauris nibh",
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVPglTAHMlAj74PofPXVSzJnJW90niA4H-qK0UT2Y_i1zdgdxy",
                "link": "",
            }
        },
        {
            "marker": { "lat": -33.8674869, "lng": 151.2069902 },
            "details": {
                "heading": "Lorem ipsum",
                "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet mauris nibh",
                "thumbnail": "sdfdsfs",
                "link": "",
            }
        }
    ];

function popupHTML(heading, description, thumbnail, link) {
    html = '\
            <h2>'+ heading + '</h2>\
            <div class="js-popup-data">\
                <div class="js-popup-thumb">\
                    <img src="'+ thumbnail + '">\
                </div>\
                <div class="js-popup-content"> \
                    <p>'+ description + '</p>\
                    <p class="js-popup-link"><a href="'+ link + '" target="_blank">Visit</a></p>\
                </div>\
            </div>\
            ';
    return html;
}


var mapStyles = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
];

function initMap() {

    var zoomLevel = 0
    var marker, i;
    var infoWindow = new google.maps.InfoWindow();
    var markers = [];
    var mapDiv = document.getElementById('map');
    var windowWidth = document.documentElement.clientWidth;

    // setting zoom for different screen sizes
    if (windowWidth <= 500) {
        // mobile
        zoomLevel = 0
    } else if (windowWidth <= 780) {
        // tablet
        zoomLevel = 1.5
    } else if (windowWidth <= 1025) {
        // desktop
        zoomLevel = 2
    } else {
        // desktop large
        zoomLevel = 2
    }

    // check if DOM element with ID exist
    if (mapDiv) {
        var map = new google.maps.Map(mapDiv, {
            zoom: zoomLevel,
            disableDefaultUI: true,
            zoomControl: true,
            center: { lat: 23.492, lng: 12.355 },
            styles: mapStyles
        });

        // loop to create markers and info window
        for (i = 0; i < locationsJSON.length; i++) {
            marker = new google.maps.Marker({
                map: map,
                flat: true,
                maxWidth: 350,
                icon: {
                    url: markerUrl,
                    scaledSize: new google.maps.Size(20, 30)
                },
                position: { lat: locationsJSON[i].marker.lat, lng: locationsJSON[i].marker.lng }
            });

            google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
                return function () {
                    var windowContent = popupHTML(locationsJSON[i].details.heading,
                        locationsJSON[i].details.description,
                        locationsJSON[i].details.thumbnail,
                        locationsJSON[i].details.link
                    );

                    // don't send info window if no content exist.
                    // I'm only checking if the heading exist here
                    if (locationsJSON[i].details.heading !== "") {
                        infoWindow.setContent(windowContent);
                        infoWindow.open(map, marker);
                    }
                }
            })(marker, i));
            markers.push(marker);
        };

        // set default info window by array index
        var defaultWindowIndex = 3;

        // check if default index is set
        if (defaultWindowIndex && defaultWindowIndex <= locationsJSON.length) {
            var windowContent = popupHTML(locationsJSON[defaultWindowIndex].details.heading,
                locationsJSON[defaultWindowIndex].details.description,
                locationsJSON[defaultWindowIndex].details.thumbnail,
                locationsJSON[defaultWindowIndex].details.link
            );
            infoWindow.setContent(windowContent);
            infoWindow.open(map, markers[defaultWindowIndex]);
        }
    }

};

