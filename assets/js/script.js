//display current day and hour
setInterval(function(){
    var currentDay = moment().format('[Today, ] MMMM Do, YYYY - h:mm:ss A');
    $('#currentDay').text(currentDay);
}, 1000);

//on click save time and notess to local storage
$(".saveBtn").on("click", function () {
    var taskTime = $(this).siblings(".hour").text();
    var notes = $(this).siblings("textarea").val();

    localStorage.setItem(taskTime, notes);

});

//load task
var loadTasks = function(){
    $(".hour").each(function(){
        var getHour = $(this).text();
        var loadTaskNotes = localStorage.getItem(getHour);

        $(this).siblings(".description").val(loadTaskNotes);

    })
}

//change color represent current time
var colorBlock = function(){
    var currentHour = moment().hour();
    // console.log(currentHour);

    for (i=9; i< 18; i++){
        var timeBlock  = $("#hour-" + i).find(".description");
        timeBlock.removeClass("past present future");

        if(currentHour > i){
            timeBlock.addClass("past")
        }else if (currentHour === i){
            timeBlock.addClass("present")
        }else{
            timeBlock.addClass("future")
        }
    }
}
var copyright = document.getElementById('copyright');
var getYear = document.createTextNode(new Date().getFullYear());

copyright.appendChild(getYear)

//run colour block function every 30 mins
setInterval(function(){
    colorBlock();
}(1000 * 60) * 35)

colorBlock();
loadTasks();

