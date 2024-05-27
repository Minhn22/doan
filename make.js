const deleteButton = document.querySelectorAll('.ntd');
const deleteOverlay = document.getElementById('deleteOverlay');
const confirmDeleteButton = document.getElementById('confirmDelete');
const cancelDeleteButton = document.getElementById('cancelDelete');

deleteButton.forEach(button => {
    button.addEventListener('click', () => {
        deleteOverlay.style.display = 'flex';
    });
});

confirmDeleteButton.addEventListener('click', () => {
    deleteOverlay.style.display = 'none';
});

cancelDeleteButton.addEventListener('click', () => {
    deleteOverlay.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    var addNotificationBtn = document.querySelector(".btn.btn-primary");
    var addNotificationOverlay = document.getElementById("addNotificationOverlay");
    var cancelAddNotification = document.getElementById("cancelAddNotification");
    var addNotificationForm = document.getElementById("addNotificationForm");

    addNotificationBtn.addEventListener("click", function () {
        addNotificationOverlay.style.display = "flex";
    });

    cancelAddNotification.addEventListener("click", function () {
        addNotificationOverlay.style.display = "none";
    });

    addNotificationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var title = document.getElementById("notificationTitle").value;
        var content = document.getElementById("notificationContent").value;
        var date = document.getElementById("notificationDate").value;
        var status = document.getElementById("notificationStatus").value;
        var imageInput = document.getElementById("notificationImage");
        var imageFile = imageInput.files[0];

        console.log("Title: " + title);
        console.log("Content: " + content);
        console.log("Date: " + date);
        console.log("Status: " + status);
        if (imageFile) {
            console.log("Image File: " + imageFile.name);
        }

        addNotificationOverlay.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === addNotificationOverlay) {
            addNotificationOverlay.style.display = "none";
        }
    });
});
const editButtons = document.querySelectorAll('.nte');
const editNotificationOverlay = document.getElementById('editNotificationOverlay');

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        editNotificationOverlay.style.display = 'flex';
    });
});

document.getElementById('cancelEditNotification').addEventListener('click', () => {
    editNotificationOverlay.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === editNotificationOverlay) {
        editNotificationOverlay.style.display = 'none';
    }
});










