document.getElementById("my-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const handle = document.getElementById("handle").value;

    const formData = {
        name: name,
        email: email,
        handle: handle
    };

    console.log(formData);

    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#1E1E1E";
});