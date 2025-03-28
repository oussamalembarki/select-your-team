function findTeam() {
    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;
    let q4 = document.getElementById("q4").value;
    let q5 = document.getElementById("q5").value;

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        document.getElementById("result").innerText = "Please answer all the questions to find your team!";
        document.getElementById("result").style.color = "#E10600"; 
        return;
    }

    let team = "";

    if (q1 === "speed" && q2 === "love" && q3 === "powerful") {
        team = "Red Bull Racing";
    } else if (q1 === "strategy" && q2 === "friendly" && q3 === "sleek") {
        team = "Mercedes-AMG Petronas Formula One Team";
    } else if (q4 === "legendary" && q5 === "championship") {
        team = "Ferrari (Scuderia Ferrari)";
    } else if (q1 === "consistency" && q2 === "no-drama" && q3 === "solid") {
        team = "McLaren F1 Team";
    } else if (q4 === "underdog" && q5 === "underdog") {
        team = "Aston Martin Aramco Cognizant Formula One Team";
    } else {
        team = "Alpine F1 Team";
    }

    document.getElementById("result").innerText = "Your F1 Team is: " + team;
    document.getElementById("result").style.color = "#333"; 
}