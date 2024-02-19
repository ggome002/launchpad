// console.log($('div[stacked_graph] span'));

arr = $('div[stacked_graph] span')
arr.each(function (elem) {
    // console.log(this);
    $(this).width($(this).attr('data-percent') + '%');
});

$('div[filter] span').click(function (e) {
    $('div[filter] span').removeAttr('active');
    $(this).attr('active', '');
})

$(".changeableContent").click(function(){
    $(".calSection").removeClass("show");
    $("."+$(this).attr("id")).addClass("show");
})


// document.addEventListener("click", e => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]")
//     if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

//     let currentDropdown
//     if (isDropdownButton) {
//         currentDropdown = e.target.closest("[data-dropdown]")
//         currentDropdown.classList.toggle("active")
//     }

//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if (dropdown === currentDropdown) return
//         dropdown.classList.remove("active")
//     })
// })

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

