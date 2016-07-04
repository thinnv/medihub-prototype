$(function() {
    $(".select2Normal").select2({
        placeholder: $(this).data('placeholder'),
        minimumResultsForSearch: Infinity,
        language: "vi"
    });

    $(".select2Search").select2({
        placeholder: $(this).data('placeholder'),
        language: "vi"
    });

    $("#range_2").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 50,
        to: 500,
        step: 50,
        postfix: " K",
        grid: false,
        hide_min_max: true,
        onChange: function (data) {
            if(data.from == 0){
                $(".irs-from").html("Miễn phí");
            }
        },
    });
});


