function handleCalc() {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var select = document.getElementById('calc');
  var opt = select.options[select.selectedIndex].value;

  getCalc(num1, num2, opt);
}


function getCalc(num1, num2, opt) {
  // GET request
  $.ajax({
    type: 'GET', //type of request
    url: '/api/' + opt, //url to server
    contentType: 'application/json', //content type
    data: { number1: num1, number2: num2 }, //parameter

  }).done(function (result) {

  }).fail(function (xhr, status, error) {
    // Request error
    console.log(error);

  }).always(function (data) {
    // Response data from server
    document.getElementById('result').innerHTML = 'Result: ' + data;
  });
}