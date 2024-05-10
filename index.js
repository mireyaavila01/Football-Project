"use strict";

let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs",plays:"Kansas City, MO"},
   ];

const teamsList = document.getElementById("teamsList");

const footballTeamBtn = document.getElementById("footballTeamBtn");

const outputH1 = document.getElementById("outputH1");

window.onload = function(){
    getTeamNames()
    
    footballTeamBtn.onclick = onFootballTeamBtnClicked;
    
};

function onFootballTeamBtnClicked(){

    let selectedValue = teamsList.value;

    if(selectedValue != ""){

        outputH1.innerHTML = selectedValue;
    }
    else{
        outputH1.innerHTML = "NO TEAM IS SELECTED"
    }
}

function getTeamNames(){
//to make names appear on dropdown
    for(let i = 0; i < teams.length; i++){
    let theOption = document.createElement("option");
    theOption.textContent = teams[i].name;
    theOption.value = teams[i].code;
    teamsList.appendChild(theOption);
    }

    
};
