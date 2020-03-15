# Map Markers & Popups

## Requirements

- Marker and popup data should be stored in a json object.
- It should be possible to set the default active marker. The related popup will be shown (if data exists).
- Only some of the markers will have popup data, so do account for this.
- On desktop marker popups should be shown on hover.
- On mobile and tablet the marker popups should be shown on touch/press.
- Make it easy to change the maps theme in the future.
    - See: [Map Styles](https://mapstyle.withgoogle.com)
- Markers should be easily changeable, preferably make use of SVG icons for markers and if
possible store into dom node.
    - See: [Markers](https://developers.google.com/maps/documentation/javascript/markers)
- For popups also make use of plain dom structures so popup designs can easily be changed
in the future.
    - See: [Popups](https://developers.google.com/maps/documentation/javascript/examples/overlay-popup)
- Please prefix all selector classes with `js-`, for example: `js-google-map-div`.
- Please don't use any dependencies aside from the Google Maps API.

## Data

- Marker:
    - Latitude
    - Longitude
    - Details (used for popup)
        - Heading
        - Description
        - Thumbnail
        - Link

## Use Case:

![GitHub Logo](/assets/images/preview.jpg)
