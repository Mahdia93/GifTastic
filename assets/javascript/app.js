$(document).ready(function(){

    




      $('button').on('click', function() {
        var gOT = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gOT + "&api_key=dc6zaTOxFJmzC&limit=10";





        $.ajax({
            url: queryURL,
            method: 'GET'
        })



            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gOTDiv = $('<div/>');

                    var p =$('<p/>')
                    p.text(results[i].rating);




                            var gOTImage = $('<img/>');

                            gOTImage.addClass('anImg')

                            gOTImage.attr('src', results[i].images.fixed_height.url);

                            gOTImage.attr('data-still', results[i].images.fixed_height_still.url)

                            gOTImage.attr('data-animate', results[i].images.fixed_height.url)

                            .attr('data-state', 'still');
                            

                            gOTDiv.append(p);

                            gOTDiv.append(gOTImage);

                            gOTDiv.prependTo($('#gifs'));
                }





                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });




    var gOTs = [''];

    
        $('#theButton').on('click', function(){
            var gOTButton = $("#gif-input").val();
            
            var newButton = $("<button/>").addClass( "btn btn-info gOT").attr('data-name',gOTButton).html(gOTButton).css({'margin': '5px'});
            
            $("#gOTsbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gOTButton + "&api_key=dc6zaTOxFJmzC&limit=10";

                console.log(gOTButton);



            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gOTDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var gOTImage = $('<img/>');

                    gOTImage.addClass('anImg')

                    gOTImage.attr('src', results[i].images.fixed_height_still.url);

                    gOTImage.attr('data-still', results[i].images.fixed_height_still.url)

                    gOTImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    gOTDiv.append(p);

                    gOTDiv.append(gOTImage);

                    gOTDiv.prependTo($('#gifs'));
                }






                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });




            $("#gif-input").val("");
            return false;
        })
  
});