const Intern = require("../lib/intern.js")
describe("Intern Class", ()=>{
    it('should just return the values in the right spot', () => {
        const intern = new Intern('name','id','email','school');
        expect(intern.id).toBe('id');
        expect(intern.name).toBe('name');
        expect(intern.email).toBe('email');
        expect(intern.school).toBe('school');
    });
    it('should return a string', () => {
        const intern = new Intern('name','id','email','github');
        expect(typeof intern.makeCard()).toBe('string');
    });
     
});