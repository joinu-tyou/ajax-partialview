
$(function () {
    GetStudents();
});


$('#btnSearch').on('click', function (e) {
    var filters = {
        student: $('#student').val(),
        courseId: $('#course').val()
    };
    GetStudents(filters);
});



$('#btnSearch1').on('click', function (e) {
    var filters = {
        student: $('#student1').val(),
        courseId: $('#course1').val()
    };
    GetStudents1(filters);
});