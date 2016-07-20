$(document).ready(function() {
  $("form#capitalForm").submit(function(event) {
    var uppercaseInput = $("input#uppercase").val();
    var uppercase = uppercaseInput.toUpperCase();
    $(".uppercase").text(uppercase);
    $("#hidden").show();
    event.preventDefault();
  });
});
