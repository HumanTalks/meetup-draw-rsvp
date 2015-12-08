var MeetupApi = (function(){
	var Urls = {
		signed: function(url){ return 'https://api.meetup.com'+url+'?sign=true&key=73e3a2a3b7e46479683148666619'; },
		getRsvps: function(eventId){ return Urls.signed('/2/rsvps')+'&event_id='+eventId+'&rsvp=yes&fields=member_bio&page=400'; }
	};
	return {
		getRsvps: function(eventId, callback){
			$.ajax({
				url: Urls.getRsvps(eventId),
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data){
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
				}
			});
		}
	};
})();
