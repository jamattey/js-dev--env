import { expect } from "chai";
import jsdom, { JSDOM } from "jsdom";
import fs from "fs";

describe ('our first test', () => {
  it ('should pass', () => {
    expect (true).to.equal(true);
  });
});

describe('index.html', () =>{
  it('should have h1 that says clients', () =>{
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const {JSDOM} = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")(0);
    expect(h1.innerHTML).to.equal("Clients");
    dom.window.close();
  });
});
