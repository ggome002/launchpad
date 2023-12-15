console.log($('div[stacked_graph] span'));

arr = $('div[stacked_graph] span')
arr.each(function (elem) {
    $(this).width($(this).attr('data-percent')+'%');
});


$('div[filter] span').click(function(e){
    $('div[filter] span').removeAttr('active');
    $(this).attr('active','');
})


