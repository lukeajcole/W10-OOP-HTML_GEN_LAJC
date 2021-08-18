const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
      }

      getSchool(){
        return this.school;
      }

    makeCard(){
      const html = 
      `<div class = 'd-flex flex-col '>
        <div class="card m-3 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
          <div class="card-header bg-info font-weight-bold">
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

module.exports = Intern;