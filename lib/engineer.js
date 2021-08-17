class Engineer{
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
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

module.exports = Engineer;