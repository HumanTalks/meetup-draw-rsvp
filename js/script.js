var eventId = Url.getUrlParam('eventId');
if(eventId && eventId.length === 9){
  MeetupApi.getRsvps(eventId, function(rsvps){
    console.log('rsvps', rsvps);
    var drawer = new Draw(rsvps);
    $('body').on('click', '.draw-btn', function(){
      rsvpTmpl(drawer.draw() || {});
    });
    $('#playground').html('<button type="button" class="btn btn-default btn-lg draw-btn">Tirer au sort</button>');
  });
} else {
  window.alert('Invalid eventId <'+eventId+'>. You must specify meetup eventId in url parameter.');
}

function rsvpTmpl(rsvp){
  $('#playground').html(
    '<div class="card hovercard draw-btn">'+
      '<div class="cardheader"><img src="img/humantalks.png"></div>'+
      '<div class="avatar"><img alt="" src="'+(rsvp.photo || 'img/unknown.png')+'"></div>'+
      '<div class="info">'+
        '<div class="title">'+rsvp.name+'</div>'+
        '<div class="desc">'+(rsvp.bio || '')+'</div>'+
      '</div>'+
    '</div>'
  );
}
