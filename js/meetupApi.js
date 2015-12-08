var MeetupApi = (function(){
  // http://www.meetup.com/meetup_api/docs
  var Urls = {
    signed: function(url){ return 'https://api.meetup.com'+url+'?sign=true&key=73e3a2a3b7e46479683148666619'; },
    getCities: function(){ return Urls.signed('/2/cities'); },
    getGroups: function(){ return Urls.signed('/find/groups'); },
    getEvents: function(country, city){ return Urls.signed('/2/open_events')+'&country='+country+'&city='+city; },
    getRsvps: function(eventId){ return Urls.signed('/2/rsvps')+'&event_id='+eventId+'&rsvp=yes&fields=member_bio&page=400'; }
  };
  return {
    getCities: function(callback){
      get(Urls.getCities(), function(data){
        callback(data.results);
      });
    },
    getGroups: function(callback){
      get(Urls.getGroups(), function(data){
        callback(data.data);
      });
    },
    getEvents: function(country, city, callback){
      get(Urls.getEvents(country, city), function(data){
        callback(data.results);
      });
    },
    getRsvps: function(eventId, callback){
      get(Urls.getRsvps(eventId), function(data){
        var rsvps = [];
        data.results.map(function(result){
          rsvps.push({
            id: result.rsvp_id,
            time: result.mtime,
            memberId: result.member.member_id,
            name: result.member.name,
            bio: result.member.bio,
            photo: result.member_photo ? result.member_photo.photo_link : ''
          });
        });
        callback(rsvps);
      });
    }
  };
  function get(url, onSuccess){
    $.ajax({
      url: url,
      jsonp: 'callback',
      dataType: 'jsonp',
      success: onSuccess
    });
  }
})();
