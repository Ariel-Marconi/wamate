/*
* Whatsapp Mate app logic.
* Developed by Victor Villarreal @ Feb 2022
* Source code with No license
*
*/



/*
* Init the NavBar.
*
* @return None
*/
function initNavBar() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    };

    console.log('NavBar initialized');
}



/*
* Call the Whatsapp API with the user input.
*
* @return None
*/
function sendMessage() {
    var api = 'https://api.whatsapp.com/send/?';

    api += 'phone=+54' + mobileField.value;  /* saque el 9 */
    api += '&text=' + messageField.value;
    api += '&app_absent=1';

    location.href = api

    console.log('Message send', api);
}


/*
* Clear the user input.
*
* @return None
*/
function clearUserInput() {
    mobileField.value = '';
    messageField.value = '';

    console.log('Form cleared');
}


/*
* Init the app when document is loaded.
*/
document.addEventListener('DOMContentLoaded', () => {
    // Initialize NavBar
    initNavBar();

    // Init user controls
    var mobileField = document.getElementById("mobileField");
    var messageField = document.getElementById("messageField");

    var sendButton = document.getElementById("sendButton");
    sendButton.onclick = sendMessage;

    var clearButton = document.getElementById("clearButton");
    clearButton.onclick = clearUserInput;
});
