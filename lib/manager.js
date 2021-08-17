class Manager{
    constructor(name, id, email, office){
      this.name = name;
      this.id = id;
      this.email = email;
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
module.exports = Manager;