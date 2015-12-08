MeetupApi.getRsvps('226509764', function(rsvps){
  console.log('rsvps', rsvps);
  $('body').on('click', '.draw-btn', function(){
    drawRsvp(rsvps);
  });
  $('#playground').html('<button type="button" class="btn btn-default btn-lg draw-btn">Tirer au sort</button>');
});

function drawRsvp(rsvps){
  var chosen = rsvps[Math.floor(Math.random() * rsvps.length)];
  console.log('chosen', chosen);
  rsvpTmpl(chosen);
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
