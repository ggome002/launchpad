// console.log($('div[stacked_graph] span'));

arr = $('div[stacked_graph] span')
arr.each(function (elem) {
    // console.log(this);
    $(this).width($(this).attr('data-percent') + '%');
});

$('div[filter] span').click(function (e) {
    $('div[filter] span').removeAttr('active');
    $(this).attr('active', '');
    const selectedFilter = $(this).text();
    filter(selectedFilter.toString());
    // console.log(selectedFilter.toString());
  })

$(".changeableContent").click(function(){
    $(".calSection").removeClass("show");
    $("."+$(this).attr("id")).addClass("show");
})

function search() {
  console.log("hello");
}



function filter(selectedFilter) {
    // console.log(filter);
    // list = $("article div.list span["+selectedFilter+"]");
    divList = $("article div.list div");
    spanList = $("article div.list div span");
    // console.log(divList);
    $("article div.list span").addClass('hide');
    // $("article div.list div").addClass('hide');
    $("article div.list span["+selectedFilter+"]").removeClass('hide');
    if(selectedFilter == "All") {
      $("article div.list span").removeClass('hide');
    };

    $(divList).each(function() {
      $(this).addClass('hide');
      if ($(this).children(':not(.hide)').length > 0) {
        // console.log ("no hide");
        $(this).removeClass('hide');
      };
    });
}

function myFunction() {
    document.getElementById("dropdown-menu").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

