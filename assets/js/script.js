console.log('hello');
var submit = document.querySelector('#submitBtn');
let numOfTeams = 0;
let teams = "";
let teamCity = "";
submit.addEventListener("click", function submit() {
    var teamName = document.querySelector('#teamName').value;
    var teamLocat = document.querySelector('#teamLocat').value;
    console.log(teamName);
    console.log(teamLocat);
    teamName.push(teams);
    teamLocat.push(teamCity);

});
console.log(numOfTeams);
console.log(teams);
console.log(teamCity);