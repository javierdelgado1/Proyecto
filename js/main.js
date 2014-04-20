/*
 * jQuery File Upload Plugin JS Example 8.9.1
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global $, window */

$(function mainInputFile() {
    'use strict';
    // Initialize the jQuery File Upload widget:

    $('#fileupload').fileupload({

        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        // Comendando original
        //url: 'server/php/'
        url: fileupload.attributes['action'].value
    });



    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );


    // Load existing files:
    $('#fileupload').addClass('fileupload-processing');

    $.ajax({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: $('#fileupload').fileupload('option', 'url'),
        dataType: 'json',
        context: $('#fileupload')[0]
    }).always(function () {
        $(this).removeClass('fileupload-processing');
    }).done(function (result) {
        $(this).fileupload('option', 'done')
            .call(this, $.Event('done'), {result: result});
    });


    // fileupload DOS 
    if(typeof fileupload2 == "undefined"){
        window.mainInputFile=mainInputFile;
        return;
    }

    $('#fileupload2').fileupload({

        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        // Comendando original
        //url: 'server/php/'
        url: fileupload.attributes['action'].value
    });



    // Enable iframe cross-domain access via redirect option:
    $('#fileupload2').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );


    // Load existing files:
    $('#fileupload2').addClass('fileupload-processing');

    $.ajax({
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: $('#fileupload2').fileupload('option', 'url'),
        dataType: 'json',
        context: $('#fileupload2')[0]
    }).always(function () {
        $(this).removeClass('fileupload-processing');
    }).done(function (result) {
        $(this).fileupload('option', 'done')
            .call(this, $.Event('done'), {result: result});
    });

    window.mainInputFile=mainInputFile;

});