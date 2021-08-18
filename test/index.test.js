const Index = require('../index.js');
const HTML = require('../lib/htmlObj')
const Engineer = require("../lib/engineer.js")
const Intern = require("../lib/intern.js")
const Manager = require("../lib/manager.js");
const Builder = require('../index.js');

describe("HTML OBJ", () =>{
   
    it('should have the html template as an array of 8 strings', () => {
        const html = new HTML();
       expect(html.htmlLit.length).toBe(8);
   });    
});

describe("BUILDER BuildSite", () =>{
   
    it('should have the html template as an array of 11 strings after getting 3 users', () => {
        const html = new HTML();
        const sampleInput =
        {
            teamName: 'TEST',
            teamDescription: 'TEST',
            team: [
              new Manager('TEST', 'TEST','TEST', 'TEST' ),
              new Intern ('TEST', 'TEST','TEST', 'TEST' ),
              new Engineer('TEST', 'TEST','TEST', 'TEST' )
            ]
          }
        
         const build = new Builder(html.htmlLit);
         build.siteData = sampleInput;
         build.buildSite();
       expect(build.htmlLit.length).toBe(11);
   });    
});