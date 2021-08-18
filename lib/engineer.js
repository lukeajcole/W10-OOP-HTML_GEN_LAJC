const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
      }
    
    getGithub(){
      return this.github;
    }

    makeCard(){
      const html = 
      `<div class = 'd-flex flex-col '>
        <div class="card m-3 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
          <div class="card-header bg-info font-weight-bold">
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

module.exports = Engineer;