function popup() {

    let fName = document.querySelector('.fName').value;
    let lName = document.querySelector('.lName').value;
    let mail = document.querySelector('.mail').value;
    let mobile = document.querySelector('.mobile').value;
    let message = document.querySelector('.message').value;

    if ((fName == "") || (lName == "") || (mail == "") || (mobile == "") || (message == "")) {
        alert("Please fill in the blank!");
    } else {
        alert("Thanks for your message!");
    }
}