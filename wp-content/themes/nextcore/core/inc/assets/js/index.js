$(document).ready(function () {
    $('ul.bar-left li').on('click',
        function(even) {
            $('ul.bar-left li').removeClass('active');
            $(this).addClass('active');
        });
    
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    $('#ex1').imagezoomsl({ 
        zoomrange: [3, 3]
    });
    
});