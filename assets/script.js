//set current time 
var today = moment();

$("#moment").text(today.format('LLLL'));


// set variables to page element
var nineHr = $("#notes9");
var tenHr = $("#note10");
var elevenHr = $("#note11");
var twelveHr = $("#note12");
var thirteenHr = $("#note13");
var fourteenHr = $("note14");
var fifteenHr = $("note15");
var sixteenHr = $("note16");
var seventeenHr = $("note17");
var saveNine = $("#save9");
var saveTen = $("#save10");
var saveEleven = $("#save11");
var saveTwelve = $("#save12");
var saveThirteen = $("#save13");
var saveFourteen = $("#save14");
var saveFifteen = $("#save15");
var saveSixteen = $("#save16");
var saveSeventeen = $("#save17");

// get local storage
nineHr.val(localStorage.getItem("9am"))

// check what time it is 
    // change css value based on time
    //google change css variables based on other values


    
//  add event listener
// store information local storage 
saveNine.on("click", () => {
    localStorage.setItem("9am", nineHr.val())
})