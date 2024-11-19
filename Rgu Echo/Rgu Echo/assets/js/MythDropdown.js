document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-button");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", () => {
            const dropdown = button.parentElement;

            dropdown.classList.toggle("active");

            dropdownButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.parentElement.classList.remove("active");
                }
            });
        });
    });
});
