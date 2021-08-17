console.log('hello');
const submit = document.querySelector('#submitBtn');

submit.addEventListener("click", function submit() {
    var teamName = document.getElementById('teamName').value;
    var teamLocat = document.getElementById('teamLocat').value;
    console.log(teamName);
    console.log(teamLocat);
})
