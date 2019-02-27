let vm = new Vue({
  el: '#league-table',
  data: {
    leagues: [],
    apilink: 'https://api.coincap.io/v2/assets'
  },

  mounted: function() {
    this.getLeagues();
  },
  methods: {
    getLeagues: function() {
      let self = this
      $.get('https://api.coincap.io/v2/assets', function(data){
        $.each(data.data, function(index, obj) {

          self.leagues.push(obj);
          
        });

      });
    },
    even: function(arr) {
      return arr.slice().sort(function(a, b) {
        return b.volumeUsd24Hr - a.volumeUsd24Hr;
      });
    }

  }
});