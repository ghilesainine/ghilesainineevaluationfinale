describe("E2E Login -> Tasks", () => {
  it("ouvre /login, se connecte, redirige vers /tasks et affiche user + tâche", () => {
    // 1) Ouvre /login
    cy.visit("/login");
    cy.contains("Connexion").should("be.visible"); // adapte si ton titre est différent

    // 2) Remplit le formulaire
    cy.get('input[type="email"]').clear().type("bob@gmail.com");
    cy.get('input[type="password"]').clear().type("123456");

    // 3) Soumet
    cy.contains("Se connecter").click();

    // 4) Vérifie la redirection vers /tasks
    cy.url().should("include", "/tasks");

    // 5) Vérifie l’affichage du nom utilisateur + au moins une tâche
    cy.contains(/bob/i).should("be.visible");     // cherche "bob" (insensible à la casse)
    cy.get("body").should("contain.text", "Tâche"); // optionnel si tes tâches affichent "Tâche"
    cy.get("li, .task, .task-item").should("exist"); // au moins un élément de tâche
  });
});
