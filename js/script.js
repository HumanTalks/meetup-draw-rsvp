var eventId = getUrlParam('eventId');
if(eventId && eventId.length === 9){
  MeetupApi.getRsvps(eventId, function(rsvps){
    console.log('rsvps', rsvps);
    $('body').on('click', '.draw-btn', function(){
      drawRsvp(rsvps);
    });
    $('#playground').html('<button type="button" class="btn btn-default btn-lg draw-btn">Tirer au sort</button>');
  });
} else {
  window.alert('Invalid eventId <'+eventId+'>. You must specify meetup eventId in url parameter.');
}

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

function getUrlParam(name){
  return getUrlParams()[name];
}
function getUrlParams(){
  var results = {};
  var params = window.location.search.substring(1).split('&');
  for(var i in params){
    var arr = params[i].split('=');
    results[arr[0]] = arr[1];
  }
  return results;
}
