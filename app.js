document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("message").innerText =
        "Merci ! Nous te contacterons bientôt sur Instagram.";

    this.reset();
});
