$(document).ready(function() {
    $(".search").on("keyup", function(e) {
        var valueSearch = $(this).val().toLowerCase();
        $(".vertical-nav li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(valueSearch) > -1);
        });
    });
});