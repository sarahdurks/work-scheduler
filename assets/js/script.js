
$().ready(function () {
    function getTimeNow() {
        var todayTime = moment().format("MMMM Do YYYY, h:mm a");
        $("#currentDay").text(todayTime);
    }
    getTimeNow();


    function checkHourState() {
        var currentHour = moment().format("H"); //uses army time counting to match our hours
        $(".description").each(function () {
            var plannerHour = parseInt($(this).attr("id")); //take planner id as number
            if (plannerHour < currentHour) {
                $(this).addClass("past");
            } else if (plannerHour === currentHour) {
                $(this).removeClass("past").addClass("present");
            } else if (plannerHour > currentHour) {
                $(this).removeClass("past").addClass("future");
                $(this).removeClass("present").addClass("future");
            }
        });
    }
    checkHourState();
    //save input to local storage 
    function saveEntry() {
        var savedPlan = $(this);
        var planTime = savedPlan.siblings(".description").attr("id"); //grabs id of row (=time) relevant to actual input
        var planText = savedPlan.siblings(".description").val();
        localStorage.setItem(planTime, planText); //stored together
    }
    //on click save user entry
    $(".saveBtn").on("click", saveEntry);
    checkSchedule();

    //grab whatever is in local storage for that hour
    function checkSchedule() {
        $("#9").val(localStorage.getItem("9"));
        $("#10").val(localStorage.getItem("10"));
        $("#11").val(localStorage.getItem("11"));
        $("#12").val(localStorage.getItem("12"));
        $("#13").val(localStorage.getItem("13"));
        $("#14").val(localStorage.getItem("14"));
        $("#15").val(localStorage.getItem("15"));
        $("#16").val(localStorage.getItem("16"));
        $("#17").val(localStorage.getItem("17"));
    }
});
//make sure local storage checked on page load
window.onload = checkSchedule()
