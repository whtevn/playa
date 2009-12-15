var Playlist = 
  {
    init: function(){
      var instance = 
      {
        tracks: [],
        onTrackNumber: 0,
        totalTracks: function(){ return(this.tracks.length-1); },
        nextTrack: function(){ this.gotoTrack(this.onTrackNumber - 1); },
        previousTrack: function(){ this.gotoTrack(this.onTrackNumber + 1); },
        gotoTrack: function(number){
          number = parseInt(number);
          if(number < 0){
            this.onTrackNumber = 0;
          }else if(number > this.totalTracks()){
            this.onTrackNumber = this.totalTracks();
          }else{
            this.onTrackNumber = number;
          }
        },
        currentTrack: function(){ return(this.tracks[this.onTrackNumber]) }
      };

      return(instance)
    },

    initWithHTML: function(element){
      var instance = Playlist.init();

      $(element).find(".track").each(function(i){
        instance.tracks.push(Track.initWithHTML(this));
      });

      return(instance);
    },

    initWithJSON: function(){
    }

  }

