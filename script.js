/* 
File: script.js
Gui Assignment: Updating The Multiplication Table Part 1

Description: This is responsible for the eror guarding and the table creation for the website.  The file helps by preventing the user from 
entering a number under -50 and above 50 range.  If the user tries to input a value thats not a number too it will prompt the user to input a number
within the range and it will let the user know if a number is not in the text box.  

Zuriel Pagan, UMass Lowell Computer Science, zuriel_pagan@student.uml.edu
Copywright (c) 2024 by Zuriel.  All rights reserved.  May be freely copied or excerpted for educational purposes with credit to the author.
*/
$(document).ready(function()
 {
    // Table Form Validation
    $("#tableForm").validate(
        {
        rules: 
        {
            startH: 
            {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endH: 
            {
                required: true,
                number: true,
                range: [-50, 50]
            },
            startV: 
            {
                required: true,
                number: true,
                range: [-50, 50]
            },
            endV: 
            {
                required: true,
                number: true,
                range: [-50, 50]
            }
        },
        messages: 
        {
            startH: 
            {
                required: "Please enter a start value for the horizontal axis",
                number: "Please enter a valid number",
                range: "Value must be between -50 and 50"
            },
            endH: 
            {
                required: "Please enter an end value for the horizontal axis",
                number: "Please enter a valid number",
                range: "Value must be between -50 and 50"
            },
            startV: 
            {
                required: "Please enter a start value for the vertical axis",
                number: "Please enter a valid number",
                range: "Value must be between -50 and 50"
            },
            endV: 
            {
                required: "Please enter an end value for the vertical axis",
                number: "Please enter a valid number",
                range: "Value must be between -50 and 50"
            }
        },
        submitHandler: function(form) 
        {
            generateTable();
            return false;
        }
    });

    // Table Generation Function
    function generateTable() 
    {
        var startH = parseFloat($('#startH').val());
        var endH = parseFloat($('#endH').val());
        var startV = parseFloat($('#startV').val());
        var endV = parseFloat($('#endV').val());

        if (isNaN(startH) || isNaN(endH) || isNaN(startV) || isNaN(endV)) 
            {
            $('#error').text('Please enter valid numbers.');
            return;
        }
        $('#error').empty();

        if (startH > endH || startV > endV) 
            {
            $('#error').text('Start values must be less than or equal to end values.');
            return;
        }

        var table = '<table>';
        table += '<tr><th></th>';
        for (var i = startH; i <= endH; i++) 
            {
            table += '<th>' + i + '</th>';
        }
        table += '</tr>';

        for (var i = startV; i <= endV; i++) 
        {
            table += '<tr><th>' + i + '</th>';
            for (var j = startH; j <= endH; j++) 
            {
                table += '<td>' + (i * j) + '</td>';
            }
            table += '</tr>';
        }
        table += '</table>';

        $('#multiplicationTable').html(table);
    }
});
