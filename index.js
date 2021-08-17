// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// const htmlObj = fs.readFile('./assets/htmlJSON.JSON');
const fs = require('fs');
const inquirer = require('inquirer');
const HTML = require('./lib/htmlObj.js');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const htmlObj = new HTML();

class Builder {
  constructor(htmlLit){
    this.htmlLit = htmlLit;
  }
  
  buildSite(){
    let cards =[]
    for (let i=0;i<this.siteData.team.length;i++){
        const newCard = this.siteData.team[i].makeCard()
        cards.push(newCard);
    }
  
    this.htmlLit[1] = this.siteData.teamName + 'Team Roster';
    this.htmlLit[3] = this.siteData.teamName; 
    this.htmlLit[5] = this.siteData.teamDescription;
  
  
    //Insert the Cards into the greater HTML use Spread to put the whole array in the right spot. 
    this.htmlLit.splice(7,0,...cards)
    //Join the array into one string
    const siteHTML = this.htmlLit.join(" ");
  
    fs.writeFile('testHTML.html',siteHTML,(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
  }

  initManager(){
    inquirer
      .prompt([
        {
          type: "input",
          name: "teamName",
          message: "What is the Team Name"
        },
        {
          type: "input",
          name: "teamDescription",
          message: "What does this team do?"
        },
        {
          type: "input",
          name: "managerName",
          message: "Who is the Team Manager?"
        },
        {
          type: "input",
          name: "managerId",
          message: "What is his/her employee ID?"
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is their email address?"
        },
        {
          type: "input",
          name: "managerOffice",
          message: "What is their office number?"
        }
      ])
      .then(val => {
        const manager = new Manager(val.managerName, val.managerId, val.managerEmail, val.managerOffice);

        const siteData = {
          teamName: val.teamName,
          teamDescription: val.teamDescription,
          team: [manager]
        }
        this.siteData = siteData;
        this.menu();
      })
      .catch(err => console.log(err));
    }
  menu(){
    inquirer
      .prompt([{
        type: "list",
        name: "nextEmployee",
        message: "Add another employee...",
        choices: ['Intern', 'Engineer','All Done!']
      }
    ])
    .then(
      val => {
        const selection = val.nextEmployee;
        if (selection == 'Intern')  this.addIntern();
        if (selection == 'Engineer') this.addEngineer();
        if (selection == 'All Done!') this.buildSite();
      }
    )
    .catch(err => console.log(err));
  };

  addEngineer(){
    inquirer
      .prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's name?"
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is their employee ID?"
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is their email address?"
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is their github username?"
        }
      ])
      .then(val => {
        console.log(val);
        const engineer = new Engineer(val.engineerName, val.engineerId, val.engineerEmail, val.engineerGithub)
        this.siteData.team.push(engineer);
        this.menu();
      })
      .catch(err => console.log(err));
  }
  
  addIntern(){
    inquirer
      .prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Intern's name?"
        },
        {
          type: "input",
          name: "internId",
          message: "What is their employee ID?"
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is their email address?"
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is their school name?"
        }
      ])
      .then(val => {
        console.log(val);
        const intern = new Intern(val.internName, val.internId, val.internEmail, val.internSchool)
        this.siteData.team.push(intern);
        this.menu();
      })
      .catch(err => console.log(err));
    }
  }   

const build = new Builder(htmlObj.htmlLit);
build.initManager();

module.exports = Builder;