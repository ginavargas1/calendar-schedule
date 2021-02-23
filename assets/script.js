//set current time 
var today = moment();

$("#moment").text(today.format('LLLL'));


// set variables to page element 
var nineHr = $("#notes9");
var tenHr = $("#notes10");
var elevenHr = $("#notes11");
var twelveHr = $("#notes12");
var thirteenHr = $("#notes13");
var fourteenHr = $("#notes14");
var fifteenHr = $("#notes15");
var sixteenHr = $("#notes16");
var seventeenHr = $("#notes17");
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
nineHr.val(localStorage.getItem("9am"));
tenHr.val(localStorage.getItem("10am"));
elevenHr.val(localStorage.getItem("11am"));
twelveHr.val(localStorage.getItem("12pm"));
thirteenHr.val(localStorage.getItem("1pm"));
fourteenHr.val(localStorage.getItem("2pm"));
fifteenHr.val(localStorage.getItem("3pm"));
sixteenHr.val(localStorage.getItem("4pm"));
seventeenHr.val(localStorage.getItem("5pm"));

// check what time it is 
    // change css value based on time
    //google change css variables based on other values
function currentTime(){
    var currentTime = moment().hours();

    // time loop 
    $(".stack").each(function() {
        var pastHr = parseInt($(this).data("time"));

       if (pastHr < currentTime) {
           $(this).addClass("past");
       } else if (pastHr === currentTime) {
           $(this).removeClass("past");
           $(this).addClass("present");
       }else {
           $(this).removeClass("past");
           $(this).removeClass("present");
           $(this).addClass("future");
       }
    });
    }



//  add event listener
// store information local storage 
saveNine.on("click", () => {
    localStorage.setItem("9am", nineHr.val())
});

saveTen.on("click", () => {
    localStorage.setItem("10am", tenHr.val())
});

saveEleven.on("click", () => {
    console.log(elevenHr)
    localStorage.setItem("11am", elevenHr.val())
});

saveTwelve.on("click", () => {
    localStorage.setItem("12pm", twelveHr.val())
});

saveThirteen.on("click", () => {
    localStorage.setItem("1pm", thirteenHr.val())
});

saveFourteen.on("click", () => {
    localStorage.setItem("2pm", fourteenHr.val())
});

saveFifteen.on("click", () => {
    localStorage.setItem("3pm", fifteenHr.val())
});

saveSixteen.on("click", () => {
    localStorage.setItem("4pm", sixteenHr.val())
});

saveSeventeen.on("click", () => {
    localStorage.setItem("5pm", seventeenHr.val())
});

currentTime();