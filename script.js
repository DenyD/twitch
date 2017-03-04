
$(document).ready(function(){
  
  var url="https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";
  
  $.getJSON(url, function(stat){
   if (stat.stream===null) {
     $("#fccstat").html("FCC Twitch stream is OFFline...");
   }else{
     $("#fccstat").html("FCC Twitch stream is ONline...");
   } 
});
  
var channelList=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin" ,"comster404"];
var channel;
var channelID;
var channelLogo;
var channelLink;
var streamMSG;

 
 
  $.each(channelList,function(i, val){
    channel=val;
    var url2="https://wind-bow.gomix.me/twitch-api/channels/"+channel; 
    
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+channel, function(stat){
            
      if(stat.stream===null){
        $.getJSON(url2, function(chan){
          channelID=chan.display_name;
          channelLogo=chan.logo;
          channelLink=chan.url;
          streamMSG=chan.status;
          
          
          if(chan.status=='404'){
            $('#twitch').append('<div class="row m1">'+chan.message+'</div>');
          }
          else 
            $('#offline').append('<div class="row m1">'+
                                 '<div class="col-md-1 ">'+'<img class="imag" src='+channelLogo+'><a href='+channelLink+'target="_blank">'+'</div>'+
                                 '<div class="col-md-4"><div class="ramka1"><div class="col-md-6"><img class="imag1" src="http://us.123rf.com/450wm/valentint/valentint1612/valentint161200527/66709177-offline-icon-offline-website-button-on-white-background.jpg?ver=6"></div><div class="col-md-6">'+channelID+'</div></div></div>'+
                                 '<div class="col-md-6 ramka1">'+'</a>OFFLINE</div></div>');
        });
      }
      
      else $.getJSON(url2, function(chan){
          channelID=chan.display_name;
          channelLogo=chan.logo;
          channelLink=chan.url;
          streamMSG=chan.status;
        $('#online').append('<div class="row m ">'+
                            '<div class="col-md-1 ">'+'<img class="imag" src='+channelLogo+'><a href='+channelLink+'target="_blank">'+'</div>'+
                            '<div class="col-md-4 "><div class="ramka"><div class="col-md-6"><img class="imag1" src="http://www.oneida-boces.org/cms/lib05/NY01914080/Centricity/Domain/201/Live%20Streaming.jpg"></div><div class="col-md-6">'+channelID+'</div></div></div>'+
                            '<div class="col-md-6  ramka">'+'</a>ONLINE   Streaming:+'+streamMSG+'</div></div>');
    
      }); 
    }); 
  });
  
  $('#all').click(All);
  $('#on').click(Online);
  $('#off').click(Offline);
  
});

function All(){
  $('#twitch').show();
  $('#online').show();
  $('#offline').show();
}

function Online(){
  $('#twitch').hide();
  $('#online').show();
  $('#offline').hide();
}

function Offline(){
  $('#twitch').hide();
  $('#online').hide();
  $('#offline').show();
}