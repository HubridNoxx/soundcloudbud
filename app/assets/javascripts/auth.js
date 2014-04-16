$(document).ready(function() {
    $('.connect').click(function() {
      // initialize client with app credentials
      SC.initialize({
        client_id: 'dca29991e585361ec1935547618f6837',
        redirect_uri: 'http://localhost:3001/callback.html'
      });

      // initiate auth popup
      SC.connect(function() {
        SC.get('/me', function(me) { 
          alert('Hello, ' + me.username); 
        });
      });
    });
});