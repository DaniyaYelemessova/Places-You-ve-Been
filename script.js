function TravelBook(){
  this.places = {};
  this.currentId = 0;
}

TravelBook.prototype.addPlaces = function(placesYouHaveBeen){
  placesYouHaveBeen.id = this.assignId()
    this.places[placesYouHaveBeen.id] = placesYouHaveBeen;
};

TravelBook.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

TravelBook.prototype.findPlace = function(id){
  if(this.places[id] !== undefined){
    return this.places[id]
  }
  return false
};

TravelBook.prototype.deletePlace = function(id){
  if(this.places[id] === undefined){
    return false
  }
  delete this.places[id];
  return true
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
travelTwo = new PlacesYouHaveBeen("Dominicat Republic", "5th of August", ["Philip", "Mum"], "Mum's visit to America")
travelBook.addPlaces(travelOne);
travelBook.addPlaces(travelTwo)

console.log(travelBook.deletePlace(1));
console.log(travelBook)
