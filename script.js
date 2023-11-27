function PlacesYouHaveBeen(location, date, people, notes){
  this.location = location;
  this.date = date;
  this.people = people;
  this.notes = notes;
}

PlacesYouHaveBeen.prototype.locationAndDate = function(){
  return this.location + ": " + this.date;
}

const travelOne = new PlacesYouHaveBeen("Las Vegas", "27th of April", ["Lena", "Tanya", "Natalia"], "Lena's Bachelor Party");

console.log(travelOne.locationAndDate())
