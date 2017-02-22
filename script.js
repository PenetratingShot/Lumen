$(document).ready(function() {
  $('body').load(function() {
    $('i').css('fill', 'black');
  });
});

$(document).ready(function() {
  $('body').fadeIn('3000');
});

$(document).ready(function(){
  if ($('h3').text() == 'Turn off the lights') {
    $('h3').click(function()  {
      $('h3').css('background-color', 'black');
      $('h3').css('color', 'white');
      $('i').css('fill', 'yellow');
      $('h3').text("Turn on the lights");
      $('a').css('color', 'white');
    });
  }
  else {
    $('h3').css('background-color', 'white');
    $('h3').css('color', 'black');
    $('i').css('fill', 'yellow');
    $('a').css('color', 'black');
  }
});
});

$(document).ready(function() {
  if ($('h3').text() == 'Turn on the lights') {
    $('h3').click(function()  {
      $('h3').css('background-color', 'white');
      $('h3').css('color', 'black');
      $('i').css('fill', 'black');
      $('h3').text("Turn off the lights");
      $('a').css('color', 'black');
    });
  }
  else{
    $('h3').css('background-color', 'black');
    $('h3').css('color', 'white');
    $('i').css('fill', 'yellow');
    $('h3').text("Turn on the lights");
    $('a').css('color', 'white');
  }
});
