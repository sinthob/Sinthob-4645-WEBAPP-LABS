fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=16.472529191965258,102.82562267492945&radius=3000&type=restaurant&key=AIzaSyDq2ln8pj7PWJZmv3ER8a-OmL6W-qOsLmM")
.then((response) => response.json())
.then((data) => console.log(data.results[0].name));