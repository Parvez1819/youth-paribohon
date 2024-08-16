
function scrollToSeatBooking() {
    const seatArea = document.getElementById('seat-booking-section');
    seatArea.scrollIntoView({ behavior: "smooth" });
}

function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
}