$(document).ready(function(){

    $('button').click(function(event){

        event.preventDefault();
        var firstName = $('#first').val();
        var lastName = $('#last').val();
        var email = $('#email').val();
        var contact = $('#contact').val();

        var tableRow = '<tr><th>'  + firstName + '</th><th>' + lastName + '</th><th>' + email + '</th><th>' + contact + '</th></tr>';
        
        $('#table').append(tableRow);
    });
});