describe("Open Neocles", () => {
  beforeEach(() => {
    cy.visit("https://neocles.io");
  });
  it("open Neocles and search for Neocles", () => {
    cy.get(".lines-button").click();
    cy.wait(3000);
    cy.get(".close-line-wrap").click();
  });

  it("verify that Meet Neocles text is on the page after loading", () => {
    cy.get(".elementor-heading-title.elementor-size-default").should(
      "contain.text",
      "Meet Neocles"
    );
    // .contains(
    //   "Meet Neocles"
    // );
  });
});
