function TravelBook(){
  this.places = {}
}

TravelBook.prototype.addPlaces = function(placesYouHaveBeen){
    this.places[placesYouHaveBeen.location] = placesYouHaveBeen
}

function PlacesYouHaveBeen(location, date, people, notes){
  this.location = location;
  this.date = date;
  this.people = people;
  this.notes = notes;
}

PlacesYouHaveBeen.prototype.locationAndDate = function(){
  return this.location + ": " + this.date;
};

let travelBook = new TravelBook();
const travelOne = new PlacesYouHaveBeen("Las Vegas", "27th of April", ["Lena", "Tanya", "Natalia"], "Lena's Bachelor Party");
travelBook.addPlaces(travelOne);

console.log(travelBook)
