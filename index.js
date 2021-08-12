// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// const htmlObj = fs.readFile('./assets/htmlJSON.JSON');
const fs = require('fs');
const HTML = require('./assets/htmlObj.js');
const htmlObj = new HTML();
console.log(htmlObj.htmlLit);
const testhtml = htmlObj.htmlLit.join();
fs.writeFile('testHTML.html',testhtml,(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


// fs.readFile('./assets/htmlJSON.JSON', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log("Error reading file from disk:", err)
//         return
//     }
//     try {
//         htmlObj = JSON.parse(jsonString);
//         htmlMaker(htmlObj);
//         // console.log(htmlObj);
// } catch(err) {
//         console.log('Error parsing JSON string:', err)
//     }
// })

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
}


// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email)
        this.github = github;
      }
}

// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email)
        this.school = school;
      }
}


// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated