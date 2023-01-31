$("#dropdownmenu").change(function () {
    'use strict';
    var value2 = "." + this.value;
    $(value2).hide();
    $(".HideMe").not(value2).show();
});
$("#dropdownmenu").change(function () {
    'use strict';
    var value2 = "." + this.value;
    $(value2).show();
    $(".HideMe").not(value2).hide();
});

$("#dropdownmenuship").change(function () {
    'use strict';
    var value = "." + this.value;
    $(value).hide();
    $(".HideMe2").not(value).show();
});
$("#dropdownmenuship").change(function () {
    'use strict';
    var value = "." + this.value;
    $(value).show();
    $(".HideMe2").not(value).hide();
});

$(function () {
    'use strict';
    $('#dropZ').on('dragover', function () {
        $(this).addClass('hover'); /*Creates a class in "dropZ called Hover*/
        /*Works*/
    });
    $('#dropZ').on('dragleave', function () {
        $(this).removeClass('hover'); /*Removes the class in "dropZ called Hover*/
        /*Works*/
    });
    $('#dropZ').on('change', function (e) {
        var file = this.files[0]; /*Should store image Types in Array*/
        $('#dropZ').removeClass('hover'); /*When you let go of Mouse It Removes Hover class*/
        //alert("SOMETHING");
    });
});

/*Show Image on SCreen In it's own Container*/
function readURL(input) {
    'use strict';
    var validExtensions = ['gif', 'png', 'jpg', 'jpeg', 'svg']; //array of valid extensions
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var ext = $('#file').val().split('.').pop().toLowerCase();
            if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg', 'svg']) === -1) {
                alert("gif, png, jpg, jpeg, svg");
            } else {
                $("#blah").append("<img id='ITWORKS' src='" + e.target.result + "'>");
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

/*POPUP WINDOWS FOR SUCCESS*/
function Popup() {
    'use strict';
    $(".button").on("click", function (e) {
        e.preventDefault();
        $(".modal").show().fadeIn(50);
    });
    $(".eliminate").on("click", function () {
        $(".modal").hide().fadeOut(50);
    });
}