$(document).ready(function() {
  $("form#capitalForm").submit(function(event) {
    var uppercaseInput = $("input#uppercase").val();

    $(".uppercase").text(uppercaseInput);

    $("#hidden").show();

    event.preventDefault();
  });
});
