const formLogin = document.querySelector("form");
const { user, pws } = formLogin.elements;

const authentication = () => {
    fetch("./assets/js/usuario.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const users = data.users;
            const findUser = users.find((item) => {
                return item.user === user.value && item.pws === pws.value;
            });
            findUser
                ? (window.location.href = "/panel.html")
                : alert("Usuário ou senha incorretos");
        });
};

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    authentication();
});
