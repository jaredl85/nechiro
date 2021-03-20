$(document).ready(function() {

    /*---FOR THE STICKY NAVIGATION---*/
    $('.js--whatwedo').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '80px;'
    });

    /*document closing tags are below is this line*/
});



/*
    var waypoints = $('handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window')
    }, {
        offset: '25%'
    })
*/

