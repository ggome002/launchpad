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

    list =  $('article div.list div span:not(.hide)');
    search($('#catalog_search').val().toLowerCase(), list);

  })

$(".changeableContent").click(function(){
    $(".calSection").removeClass("show");
    $("."+$(this).attr("id")).addClass("show");
})

divList = $("article div.list div");
spanList = $("article div.list div span");
// var list;

$('#catalog_search').on('keyup', function(event) {

  var searchText = this.value.toLowerCase();
  if (event.which === 13) {
    event.preventDefault();
  };

  if (event.which == 8) {
    // console.log("backspace");
  
    if($('div[filter] span[active]').text() == "All" || $('div[filter] span[active]').text() == "") {
      list = $('article div.list div span');
      $('article div.list div span').removeClass('hide');
      $("article div.list div").removeClass('hide');
    }else{
      filter($('div[filter] span[active]').text());
      list =  $('article div.list div span:not(.hide)');
    }

  } else {
    list =  $('article div.list div span:not(.hide)');
  }

  search(searchText, list);
})

//add a check for each filter and maybe switch case?
//if i only check off whats visible how do i bring it bACK

function search(searchText, list) {
  list.each(function() {
     var text = $(this).text().toLowerCase();
      // console.log(text);
      if (! text.includes(searchText)) {
        $(this).addClass("hide");
      }

  })
  checkHeaders()
}

function checkHeaders(){
  $('article div.list div:not(:has(span:not(.hide))').addClass("hide")
}

function filter(selectedFilter) {

    $("article div.list div").removeClass('hide');
    $("article div.list div span").removeClass('hide');
    if(selectedFilter == "All") {
      $("article div.list span").removeClass('hide');
    }else{
      $('article div.list div').children(':not(['+selectedFilter+'])').addClass('hide')
      checkHeaders()
    }

}

function dropdownFunction() {
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

