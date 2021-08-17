const Engineer = require("../lib/engineer.js")

describe("Engineer Class", ()=>{
    it('should just return the values in the right spot', () => {
        const engineer = new Engineer('name','id','email','github');
        expect(engineer.id).toBe('id');
        expect(engineer.name).toBe('name');
        expect(engineer.email).toBe('email');
        expect(engineer.github).toBe('github');
    });
    it('should return a string', () => {
        const engineer = new Engineer('name','id','email','github');
        expect(typeof engineer.makeCard()).toBe('string');
    });
     
});