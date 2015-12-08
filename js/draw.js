function Draw(rsvps){
  var toDraw = rsvps;
  var drawed = [];
  this.draw = function(){
    if(toDraw.length > 0){
      var index = Math.floor(Math.random() * toDraw.length);
      var chosen = toDraw.splice(index, 1)[0];
      drawed.push(chosen);
      return chosen;
    } else {
      alert('No more rsvp to draw !');
    }
  };
}
