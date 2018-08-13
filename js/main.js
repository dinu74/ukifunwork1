SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
  SC.stream('/tracks/244184510',function(sound){
  $('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });
         $('#stop').click(function(e) {
           e.preventDefault();
           sound.stop();
         });

 });
 });
 $(document).ready(function() {
   SC.stream('/tracks/327267562',function(sound){
   $('#a').click(function(e) {
            e.preventDefault();
            sound.start();
          });
          $('#b').click(function(e) {
            e.preventDefault();
            sound.stop();
          });

  });
  });

  $(document).ready(function() {
    SC.stream('/tracks/115952864',function(sound){
    $('#lady').click(function(e) {
             e.preventDefault();
             sound.start();
           });
           $('#kash').click(function(e) {
             e.preventDefault();
             sound.stop();
           });

   });
   });




   $(document).ready(function() {
     SC.stream('/tracks/57521426',function(sound){
     $('#mulu').click(function(e) {
              e.preventDefault();
              sound.start();
            });
            $('#mathy').click(function(e) {
              e.preventDefault();
              sound.stop();
            });

    });
    });


    $(document).ready(function() {
      SC.stream('/tracks/314823970',function(sound){
      $('#ba').click(function(e) {
               e.preventDefault();
               sound.start();
             });
             $('#hu').click(function(e) {
               e.preventDefault();
               sound.stop();
             });

     });
     });




     $(document).ready(function() {
       SC.stream('/tracks/348319082',function(sound){
       $('#mer').click(function(e) {
                e.preventDefault();
                sound.start();
              });
              $('#sal').click(function(e) {
                e.preventDefault();
                sound.stop();
              });

      });
      });




      $(document).ready(function() {
        SC.stream('/tracks/267806421',function(sound){
        $('#pona').click(function(e) {
                 e.preventDefault();
                 sound.start();
               });
               $('#usiru').click(function(e) {
                 e.preventDefault();
                 sound.stop();
               });

       });
       });





       $(document).ready(function() {
         SC.stream('/tracks/225519099',function(sound){
         $('#nanum').click(function(e) {
                  e.preventDefault();
                  sound.start();
                });
                $('#rowdy').click(function(e) {
                  e.preventDefault();
                  sound.stop();
                });

        });
        });
