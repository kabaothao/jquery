// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Topic: 1. jQuery easiest and JavaScript library. learn actions and methods - document.read(function(){})
//Every time you want to reference to jQuery you hit $
//jQuery will always be ready in $
//jQuery is chainable as long it is not a semicolon. hide1000().slideUp(1000).delay(1000).slideDown(1000);
//hey wait for my document to load and then we can load my codes.
//the real fun of javascript is javascript events when they  click do this when they click hover up...

$(document).ready(function () {

    //$('#panel1').on('click', function () {
    //    //anything between in this curly braces will fire when the button is clicked.
    //    $('#panel1').fadeOut(200);
    //})

    //$('#btn1').on('click', function () {
    //    $('#btn1').html('my new panel content');
    //});
    var content = "My new awecome content";
    $('.panel-button').on('click', function () {
        var panelId = $(this).attr('data-panelid'); //whenever the action is on
        $('#' + panelId).toggle();
        $('#' + panelId + '.panel-body').html(content);
    });



});


