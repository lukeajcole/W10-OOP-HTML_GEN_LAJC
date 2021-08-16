// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// const htmlObj = fs.readFile('./assets/htmlJSON.JSON');
const fs = require('fs');
const inquirer = require('inquirer');
const HTML = require('./assets/htmlObj.js');
const htmlObj = new HTML();

initManager();



function buildSite(data){
  let cards =[]
  for (i=0;i<data.team.length;i++){
      var newCard = data.team[i].makeCard()
      cards.push(newCard);
  }

  htmlObj.htmlLit[1] = data.teamName + 'Team Roster';
  htmlObj.htmlLit[3] = data.teamName; 
  htmlObj.htmlLit[5] = data.teamDescription;


  //Insert the Cards into the greater HTML use Spread to put the whole array in the right spot. 
  htmlObj.htmlLit.splice(7,0,...cards)
  //Join the array into one string
  const siteHTML = htmlObj.htmlLit.join(" ");

  fs.writeFile('testHTML.html',siteHTML,(err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
}


// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab


class Employee{
    constructor(name, id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
class Manager extends Employee{
    constructor(name, id, email, office){
      super(name,id,email)
      this.office = office;
    }
    makeCard(){
     const html = `
      <div class = 'd-flex flex-col '>
        <div class="card m-3" style="width: 18rem;">
          <div class="card-header">
            Manager: ${this.name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">EMAIL: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">OFFICE: ${this.office}</li>
          </ul>
        </div>
      </div>`
      
      return html;
    }
}


// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email)
        this.github = github;
      }
    makeCard(){
      const html = 
      `<div class = 'd-flex flex-col '>
        <div class="card m-3" style="width: 18rem;">
          <div class="card-header">
           Engineer: ${this.name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">EMAIL: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">GITHUB: <a href="https://www.github.com/${this.github}">${this.github}</a></li>
          </ul>
        </div>
      </div>`
      
      return html;
    }
}

// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email)
        this.school = school;
      }
    makeCard(){
      const html = 
      `<div class = 'd-flex flex-col '>
        <div class="card m-3" style="width: 18rem;">
          <div class="card-header">
            Intern: ${this.name}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">EMAIL: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">SCHOOL: ${this.school}</li>
          </ul>
        </div>
      </div>`
      
      return html;
    }
}


// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number

function initManager(){
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
      manager = new Manager(val.managerName, val.managerId, val.managerEmail, val.managerOffice);

      const siteData = {
        teamName: val.teamName,
        teamDescription: val.teamDescription,
        team: [manager]
      }
      console.log(siteData);
      menu(siteData);
    })
    .catch(err => console.log(err));
}

function menu(data){
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
      if (selection == 'Intern')  addIntern(data);
      if (selection == 'Engineer') addEngineer(data);
      if (selection == 'All Done!') buildSite(data);
    }
  )
  .catch(err => console.log(err));
};


function addEngineer(data){
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
      data.team.push(engineer);
      menu(data);
    })
    .catch(err => console.log(err));
}
function addIntern(data){
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
      data.team.push(intern);
      menu(data);
    })
    .catch(err => console.log(err));
}