
var main = ('welocme')
alert (main);

var user = prompt ('please enter the name of the page (artistic)');

if (user == 'artistic'){
    var image = '<img src="https://assets.awwwards.com/awards/screenshots/2014/06/5391af8c2c382.jpeg" alt= "invitation"/>';
  
  document.write (image);
}
else {
  console.log ('false');
}



var login = prompt ('please enter A1 to log in');

while (login !== 'A1'){

  login = prompt ('please enter A1 to log in');

}



var ticketsNum = prompt ('How many tickets you want to reserve?');

for (var i=1 ; i<=ticketsNum ; i++){

if (user == 'artistic'){
    var image = '<img src="https://i.pinimg.com/236x/c2/bc/b1/c2bcb1d40b7d834bb0e85cced7ed2447.jpg" alt= "invitation"/>';
  
  document.write (image);
}
else {
  console.log ('false');
}


}




let result = confirm('Please click on the tickets to finish the reservation  ?');


