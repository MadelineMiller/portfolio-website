document.addEventListener("DOMContentLoaded", function () {
    // Get references to the modal and button elements
    const modal = document.getElementById("myModal");
    const modalBtn = document.getElementById("myModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Add an event listener to show the modal when the button is clicked
    modalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Add an event listener to close the modal when the close button is clicked
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
