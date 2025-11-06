document.addEventListener('DOMContentLoaded', () => {
    const message = document.querySelector(".message");
    const emailIn = document.querySelector("#email");
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = emailIn.value.trim();

        if (email){
            message.textContent = `Thank you! Your email address ${email} has been added to our mailing list`;
        } else {
            message.textContent = "Please enter a valid email address";
        }

        emailIn.value = "";
    })

})