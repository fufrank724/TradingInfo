$(document).ready(function(){
    // Initialize collapse button
      $(".button-collapse").sideNav();
      // Initialize collapsible (uncomment the line below if you use the dropdown variation)
      $('.collapsible').collapsible();
      /*$('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
          }
        );*/
      // Show sideNav
      //$('.button-collapse').sideNav('show');
      // Hide sideNav
      //$('.button-collapse').sideNav('hide');
      // Destroy sideNav
      //$('.button-collapse').sideNav('destroy');
       $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
      });
       
        $('.slider').slider({full_width: true});
        $('.parallax').parallax();

          
});