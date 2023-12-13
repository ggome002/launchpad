console.log($('div[stacked_graph] span'));

arr = $('div[stacked_graph] span')
arr.each(function (elem) {
    console.log(this);
    $(this).width($(this).attr('data-percent')+'%');
});

