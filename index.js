// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",matchfun)
var matcharr=[] || JSON.parse(localStorage.getItem("schedule"))
function matchfun(){
    event.preventDefault()

    var matchobj={
        matchnumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    }

    matcharr.push(matchobj)
    localStorage.setItem("schedule", JSON.stringify(matcharr))
}