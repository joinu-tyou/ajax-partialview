
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
