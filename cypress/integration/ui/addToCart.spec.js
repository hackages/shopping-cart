const products = require("../../../src/api/products.json");

describe("Add item to cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("validate your on the page", () => {
    // 1
    cy.get("[data-cy=header]").as("title").contains("Shopping Cart App");
    // 2
    cy.location("pathname").should("eq", "/");
  });

  it("add item to cart", () => {
    // Given
    cy.get('[data-cy="product-list"]').as("product list");

    // Then
    cy.fixture("products").then((products) => {
      cy.addItemToCart(products[0]);
    });

    cy.fixture("products").then((products) => {
      cy.get("@product list").contains(products[0].title);
    });
  });
  it("checkout", () => {
    // Given
    cy.get('[data-cy="checkout"]').as("checkout");
    // When
    cy.fixture("products").then((products) => {
      cy.addItemToCart(products[0]);
    });
    cy.get("@checkout").click(); // empty the cart
    // Then
    cy.get("@checkout").should("have.attr", "disabled");
  });
});
