document.addEventListener("DOMContentLoaded", () => {
    const userNameDisplay = document.getElementById("user-name");
    const loggedInUser = sessionStorage.getItem("username");
    if(loggedInUser)
        {
            userNameDisplay.textContent = loggedInUser;
        }
        else {
            window.location.href = "/pagina_logare.html";
        }
    
        document.getElementById("logout-button").addEventListener("click", () => {
            sessionStorage.clear();
            window.location.href = "/pagina_logare.html";
        });
});