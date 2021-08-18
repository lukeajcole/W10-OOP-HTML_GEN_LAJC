const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, office){
      super(name, id, email)
      this.office = office;
    }

    getOffice(){
      return this.Office;
    }
    makeCard(){
     const html = `
      <div class = 'd-flex flex-col '>
        <div class="card m-3 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
          <div class="card-header bg-info font-weight-bold">
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
module.exports = Manager;