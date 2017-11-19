$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/greg81uk.json',
    dataType: 'jsonp',
    success: function(response) {
      var completed = response.courses.completed;
      for(var i = 0; i < completed.length; i++) {
        var obj = completed[i];
    
        $('#badges').append(
          '<div class="course">' + 
          '<h3>' + obj['title'] + '</h3>' +
          '<img src="' + obj['badge'] + '">' +
          '<a class="btn btn-primary" href="' + obj['url'] + '" target="_blank">See Course</a>' +
          '</div>'
        );
      }
    }
  });

});
