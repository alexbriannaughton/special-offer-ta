document.getElementById("my-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const handle = document.getElementById("handle-input").value;

    const formData = {
        name: name,
        email: email,
        handle: handle
    };

    console.log(formData);

    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#000000";

    console.log(document.body.style.backgroundImage)
});