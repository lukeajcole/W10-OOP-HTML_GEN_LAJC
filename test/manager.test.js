const Manager = require("../lib/manager.js");

describe("manager Class", ()=>{
    it('should just return the values in the right spot', () => {
        const manager = new Manager('name','id','email','office');
        expect(manager.id).toBe('id');
        expect(manager.name).toBe('name');
        expect(manager.email).toBe('email');
        expect(manager.office).toBe('office');
    });
    it('should return a string', () => {
        const manager = new Manager('name','id','email','office');
        expect(typeof manager.makeCard()).toBe('string');
    });
     
});