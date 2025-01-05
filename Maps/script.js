mapboxgl.accessToken = "pk.eyJ1Ijoic3ViaGFtcHJlZXQiLCJhIjoiY2toY2IwejF1MDdodzJxbWRuZHAweDV6aiJ9.Ys8MP5kVTk5P9V2TDvnuDg";

// Geolocation API to get the user's location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([-2.24, 53.48]); // Default location if geolocation fails
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    // Add search functionality for EV charging stations
    const evChargingStations = [
        { name: "ITC Gardenia", coordinates: [77.5957, 12.9719] },
        { name: "Radisson Blu Atria", coordinates: [77.5880, 12.9837] },
        { name: "Velankani Tech Park", coordinates: [77.6596, 12.8494] },
        { name: "Forum Rex Walk Mall", coordinates: [77.5992, 12.9713] },
        { name: "Mahindra Koramangala", coordinates: [77.6225, 12.9352] },
        { name: "Orion Mall", coordinates: [77.5553, 13.0116] },
        { name: "Mantri Square Mall", coordinates: [77.5672, 12.9954] },
        { name: "Indira Nagar Metro", coordinates: [77.6408, 12.9781] },
        { name: "Kempegowda Airport", coordinates: [77.7066, 13.1986] },
        { name: "Manyata Tech Park", coordinates: [77.6231, 13.0496] },
        { name: "Lalbagh Garden", coordinates: [77.5848, 12.9507] },
        { name: "HSR Layout BESCOM", coordinates: [77.6392, 12.9121] },
        { name: "Arya Hamsa Apartment", coordinates: [77.5892, 12.8904] },
        { name: "Vikasa Soudha BESCOM", coordinates: [77.5946, 12.9780] },
        { name: "Tata Power Hosur", coordinates: [77.6276, 12.9141] },
        { name: "Zoomcar Whitefield", coordinates: [77.7510, 12.9715] },
        { name: "Ather Indiranagar", coordinates: [77.6430, 12.9714] },
        { name: "Sunfuel Bangalore Club", coordinates: [77.6014, 12.9747] },
        { name: "Peenya BESCOM", coordinates: [77.5146, 13.0310] },
        { name: "GAIL Software Park", coordinates: [77.6214, 12.9400] },
        { name: "Epitome Kia", coordinates: [77.6615, 12.9647] },
        { name: "Kathriguppe Ather", coordinates: [77.5468, 12.9330] },
        { name: "Jayamahal Charging", coordinates: [77.6098, 12.9987] },
        { name: "Banashankari 3rd Stage", coordinates: [77.5537, 12.9180] },
        { name: "Whitefield VR Mall", coordinates: [77.7260, 12.9715] },
        { name: "Prestige Tech Park", coordinates: [77.7014, 12.9291] },
        { name: "Bommasandra BESCOM", coordinates: [77.7058, 12.7995] },
        { name: "Embassy Golf Links", coordinates: [77.6470, 12.9534] },
        { name: "E-Zone Marathahalli", coordinates: [77.6945, 12.9575] },
        { name: "Murugeshpalya BESCOM", coordinates: [77.6600, 12.9577] },
        { name: "Hongasandra BESCOM", coordinates: [77.6219, 12.9065] },
        { name: "Rama Temple Street", coordinates: [77.6539, 12.9797] },
        { name: "Dickenson Road Charging", coordinates: [77.6197, 12.9731] },
        { name: "Jai Hanuman Nagawara", coordinates: [77.6235, 13.0463] },
        { name: "Peenya Sub-Division", coordinates: [77.5100, 13.0323] },
        { name: "Gottigere BESCOM", coordinates: [77.6074, 12.8516] },
        { name: "Hommadevanahalli BESCOM", coordinates: [77.6104, 12.8429] },
        { name: "Anekal Main Road", coordinates: [77.7412, 12.7295] },
        { name: "Silicon City Bommasandra", coordinates: [77.7053, 12.7999] },
        { name: "City Racing Indiranagar", coordinates: [77.6402, 12.9786] },
        { name: "Bharat Nagar Charging", coordinates: [77.5368, 12.9734] },
        { name: "Govindaraj Garden BESCOM", coordinates: [77.6103, 13.0381] },
        { name: "KHB Colony Koramangala", coordinates: [77.6275, 12.9342] },
        { name: "BTM Auto Service", coordinates: [77.6108, 12.9216] },
        { name: "Shanthi Nagar BESCOM", coordinates: [77.6041, 12.9603] },
        { name: "Ather Yelahanka", coordinates: [77.6083, 13.1012] },
        { name: "Hebbal Charging Station", coordinates: [77.6100, 13.0480] },
        { name: "JP Nagar BESCOM", coordinates: [77.5912, 12.9125] }
    ];
    
    
  

    evChargingStations.forEach((station) => {
        new mapboxgl.Marker()
            .setLngLat(station.coordinates)
            .setPopup(new mapboxgl.Popup().setText(station.name))
            .addTo(map);
    });

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, "top-left");
}
