describe("Alert demo", function () {
  it("alert validation", function () {
    cy.visit("http://testautomationpractice.blogspot.com/");
    cy.get("#HTML9 > div.widget-content > button").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Press a button!");
    });
  });
});
