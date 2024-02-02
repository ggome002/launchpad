// console.log($('div[stacked_graph] span'));

arr = $('div[stacked_graph] span')
arr.each(function (elem) {
    // console.log(this);
    $(this).width($(this).attr('data-percent')+'%');
});

//default   
campuslife.style.display = "block";
arts.style.display = "none";
academics.style.display = "none";
athletics.style.display = "none";
recreation.style.display = "none";
community.style.display = "none";

document.querySelectorAll('.changeableContent').forEach(function(span){span.addEventListener("click", function(event) {
    if(event.target == document.querySelector('#campuslifeDropdown')) {
        console.log("campuslife");
        campuslife.style.display = "block";
        arts.style.display = "none";
        academics.style.display = "none";
        athletics.style.display = "none";
        recreation.style.display = "none";
        community.style.display = "none";
    };
    if(event.target == document.querySelector('#artsDropdown')) {
        console.log("arts");
        campuslife.style.display = "none";
        arts.style.display = "block";
        academics.style.display = "none";
        athletics.style.display = "none";
        recreation.style.display = "none";
        community.style.display = "none";
    };
    if(event.target == document.querySelector('#academicsDropdown')) {
        console.log("academics");
        campuslife.style.display = "none";
        arts.style.display = "none";
        academics.style.display = "block";
        athletics.style.display = "none";
        recreation.style.display = "none";
        community.style.display = "none";
    };
    if(event.target == document.querySelector('#athleticsDropdown')) {
        console.log("athletics");
        campuslife.style.display = "none";
        arts.style.display = "none";
        academics.style.display = "none";
        athletics.style.display = "block";
        recreation.style.display = "none";
        community.style.display = "none";
    };
    if(event.target == document.querySelector('#recreationDropdown')) {
        console.log("recreation");
        campuslife.style.display = "none";
        arts.style.display = "none";
        academics.style.display = "none";
        athletics.style.display = "none";
        recreation.style.display = "block";
        community.style.display = "none";
    };
    if(event.target == document.querySelector('#communityDropdown')) {
        console.log("athletics");
        campuslife.style.display = "none";
        arts.style.display = "none";
        academics.style.display = "none";
        athletics.style.display = "none";
        recreation.style.display = "none";
        community.style.display = "block";
    };
});
});


    
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })

//   const calendarJSON = {
//     "CampusLife": [
//         {
//             "subtitle": "Blackout",
//             "text": "BSU Blackout"
//         },
//         {
//             "subtitle": "Spring: Last Day",
//             "text": "Last Day to withdraw from the University"
//         },
//         {
//             "subtitle": "Spring: A",
//             "text": "Last Day to drop a course"
//         }
//     ],
//     "Arts": [
//         {
//             "subtitle": "Judicial Review",
//             "text": "Tuesday Times Roundtable"
//         },
//         {
//             "subtitle": "Multi-Faith Council Meeting",
//             "text": "Build bridges together while recognizing"
//         },
//         {
//             "subtitle": "Notre Histoire",
//             "text": "Engaging fireside chat featuring the author"
//         }
//     ],
//     "Academics": [
//         {
//             "title": "Academics",
//             "subtitle": "Parent and Family Day",
//             "text": "Join roary for a parent and family day"
//         },
//         {
//             "title": "Academics",
//             "subtitle": "Living with Water",
//             "text": "Go to wynwood to experience..."
//         },
//         {
//             "title": "Academics",
//             "subtitle": "War, After War",
//             "text": "On loan from the exhibition..."
//         }
//     ]
// }




