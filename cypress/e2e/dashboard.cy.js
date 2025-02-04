describe("End-to-End Test: User Accesses Overview (Dashboard)", () => {
  it("should allow the user to log in and access the overview", () => {
    // Buka halaman login
    cy.visit("http://localhost:5173/");

    // Pastikan berada di halaman login
    cy.url().should("include", "/login");

    // Masukkan email dan password yang valid
    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123456")
      .should("have.value", "123456");

    // Klik tombol login
    cy.get("button").contains("Login").click();

    // Pastikan diarahkan ke halaman overview/dashboard
    cy.url({ timeout: 10000 }).should("include", "/");

    // Validasi elemen unik di overview/dashboard
    cy.contains("Overview").should("be.visible"); // Ganti dengan elemen unik di halaman Anda
  });
});