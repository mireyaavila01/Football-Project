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

   for(let i =0; i < teams.length; i++){
    let selectedValue = teamsList.value;
    
    if(selectedValue == teams[i].code){

        outputH1.innerHTML = `You selected the ${teams[i].name}  ( ${teams[i].code} ) who play in ${teams[i].plays }`;

    }
    else if (selectedValue == ""){
        outputH1.innerHTML = "";
    }
    

   } 
    
}

function getTeamNames(){
    let theOption = document.createElement("option");
    theOption.textContent = "Select a team";
    theOption.value = "";
    teamsList.appendChild(theOption);
//to make names appear on dropdown
    for(let i = 0; i < teams.length; i++){
    let theOption = document.createElement("option");
    theOption.textContent = teams[i].name;
    theOption.value = teams[i].code;
    teamsList.appendChild(theOption);
    }

    
};
