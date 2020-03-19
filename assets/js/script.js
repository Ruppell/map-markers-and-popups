/*
	So it begins
*/
var markerUrl = "http://dev.keoshi.com/a8c/gmaps/marker-01.png";

var locationsJSON = [
											{"marker": {"lat": 47.6062095, "lng": -122.3320708},
											"details":{ "heading": "Heading 1",
																	 "description": "This is desc text",
														 			 "thumbnail": "",
																	 "link": "",
																}
											},
											{"marker": {"lat": 37.3382082, "lng": -121.8863286},
												"details":{ "heading": "Lorem ipsum",
																		 "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet mauris nibh",
														 			 	 "thumbnail": "sdfdsfs",
																		 "link": "",
																	}
											},
											{"marker": {"lat": 22.396428, "lng": 114.109497},
												"details":{ "heading": "Lorem ipsum",
																		 "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet mauris nibh",
														 			 	 "thumbnail": "sdfdsfs",
																		 "link": "",
																	}
											},
											{"marker": {"lat": 51.5073509, "lng": -0.12775829},
												"details":{ "heading": "Lorem ipsum",
																		 "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet mauris nibh",
														 			 	 "thumbnail": "sdfdsfs",
																		 "link": "",
																	}
											},
											{"marker": {"lat": -33.8674869, "lng": 151.2069902},
												"details":{ "heading": "Lorem ipsum",
																		 "description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet mauris nibh",
														 			 	 "thumbnail": "sdfdsfs",
																		 "link": "",
																	}
											}
										];

function popupHTML(heading, description, thumbnail, link){
	html = '\
					<div class="pop_up_data">\
						<h3>'+heading+'</h3>\
						<div class="info-line"> \
								<p>'+description+'</p>\
						</div>\
						<div class="info-line">\
							<p>'+thumbnail+'</p>\
						</div>\
						<div class="info-cta">\
							<p><a class="details_btn" href="'+link+'" target="_blank">DIRECTIONS</a></p>\
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

	var marker, i;
	var infowindow = new google.maps.InfoWindow();
	var markers = [];

	var map = new google.maps.Map( document.getElementById( 'map' ), {
		zoom: 2,
		center: { lat: 23.492, lng: 12.355 },
		styles:mapStyles
	} );

	for ( i = 0; i < locationsJSON.length; i++ ) {
		marker = new google.maps.Marker({
			map: map,
			flat: true,
			icon: {
				url: markerUrl,
				scaledSize: new google.maps.Size(20, 30)
			},
			position: {lat: locationsJSON[i].marker.lat, lng: locationsJSON[i].marker.lng}
		});



		google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
			return function() {
				var windowContent = popupHTML(locationsJSON[i].details.heading, locationsJSON[i].details.description, locationsJSON[i].details.thumbnail, locationsJSON[i].details.link );
				infowindow.setContent(windowContent);
				infowindow.open(map, marker);
			}
		})(marker, i));
		markers.push(marker);

	};

};

init();
