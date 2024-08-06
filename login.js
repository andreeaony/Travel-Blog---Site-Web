document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("users.json")
        .then((response) => response.json())
        .then((users) => {
            const userExists = users.some(
                (user) => user.username === username && user.password === password
            );
            if(userExists) {
                sessionStorage.setItem("username", username);
                alert("Autentificare reușită!");
                setTimeout(function() {
                    window.location.href = "/blog_calatorii_acasa.html"
                }, 500);
            }
            else {
                window.location.href = "/404.html";
            }
        })
        .catch((error) => {
            console.error("Eroare la preluarea listei de utilizatori: ", error);
        });
});