
let availableSeat = 40;
let selectedSeat = 0;
const perSeat = 550;
const maxTicket = 4;
const seatInfoList = document.getElementById('seat-info');



// Update the seat count on the display
function updateSeatCount() {
    document.getElementById('total-available-seat').innerText = availableSeat;
    document.getElementById('total-seat').innerText = selectedSeat;
    document.getElementById('total-fare').innerText = perSeat * selectedSeat;

    const couponButton = document.getElementById('coupon-btn');
    if (selectedSeat >= 4) {
        couponButton.disabled = false;
    } else {
        couponButton.disabled = true;
    }



}



const busSeats = document.querySelectorAll('.seat');
const seatInfo = document.getElementById('seat-info');






busSeats.forEach(function (seat) {
    seat.addEventListener('click', function (event) {

        const seatNumber = seat.getAttribute('data-seat');
        const existingfSeat = document.getElementById('show-seat-details' + seatNumber)




        if (seat.classList.contains('bg-[#1DD100]')) {
            // Seat is already selected, deselect it
            seat.classList.remove('bg-[#1DD100]', 'text-white');
            seat.classList.add('bg-[#F7F8F8]');
            availableSeat++; // Increase available seats
            selectedSeat--; // Decrease selected seats


            if (existingfSeat) {
                seatInfo.removeChild(existingfSeat);
            }
        }



        else if (selectedSeat < maxTicket) {
            // Seat is not selected, select it
            seat.classList.add('bg-[#1DD100]', 'text-white');
            seat.classList.remove('bg-[#F7F8F8]');
            availableSeat--; // Decrease available seats
            selectedSeat++; // Increase selected seats

            if (!existingfSeat) {
                const seatDiv = document.createElement('div');
                seatDiv.id = "show-seat-details" + seatNumber;
                seatDiv.classList.add('flex', 'justify-between', 'text-lg', 'font-medium')

                const p = document.createElement('p')
                p.innerText = seatNumber;
                seatDiv.appendChild(p);

                const p2 = document.createElement('p')
                p2.innerText = 'Economy';
                seatDiv.appendChild(p2);

                const p3 = document.createElement('p')
                p3.innerText = '550'
                seatDiv.appendChild(p3);

                seatInfo.appendChild(seatDiv);
            }

        }

        else {
            alert('You can only purchase four ticets ')
        }



        updateSeatCount(); // Update the displayed seat count
    });

});
updateSeatCount()


// coupon code handeling
const discountNew = document.getElementById('discount-new').innerText;
const discountNewString = String(discountNew)
const discountCouple = document.getElementById('discount-couple').innerText;
const discountCoupleString = String(discountCouple)
console.log(discountNewString)
console.log(discountCouple)

let discountPrice = 0;
document.getElementById('coupon-btn').addEventListener('click', function () {
    // console.log('hi vaiaa');
    const couponInput = document.getElementById('coupon-input');
    const couponInputValue = couponInput.value.trim();

    console.log(couponInputValue);

    const totalFare = document.getElementById('total-fare').innerText;
    let totalFareNumber = parseInt(totalFare);

    if (couponInputValue === discountNewString) {
        discountPrice = totalFareNumber * 0.15;
        document.getElementById('total-discount').innerText = discountPrice;
        document.getElementById('grand-total').innerText = totalFareNumber - discountPrice;

    } else if (couponInputValue === discountCoupleString) {
        discountPrice = totalFareNumber * .2;
        document.getElementById('total-discount').innerText = discountPrice;
        document.getElementById('grand-total').innerText = totalFareNumber - discountPrice;
    }
    else {
        alert('You enter wrong Coupon')
    }
    couponInput.value = ' ';
})


// name & email field and next button handelling

const nameField = document.getElementById('name-input');
const numberField = document.getElementById('number-input');
const nextbutton = document.getElementById('next-btn');


function checkInputFields() {
    nameValue = nameField.value.trim();
    numberValue = numberField.value.trim()

    if (nameField !== '' && numberValue !== '') {
        nextbutton.disabled = false;
    } else {
        nextbutton.disabled = true;
    }
}
nameField.addEventListener('input', checkInputFields);
numberField.addEventListener('input', checkInputFields);


// click next button and show the toast success

// document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('next-btn');
    const continueButton = document.getElementById('previous-btn');

    function handleButtonClick(event) {
        if (event.target.id === 'next-btn') {
            window.location.href = 'toast.html';
        } else if (event.target.id === 'previous-btn') {
            console.log('Continuing to index');
            window.location.href = 'index.html';
        }
    }

//     if (nextButton) {
//         console.log(nextButton);
//         nextButton.addEventListener('click', handleButtonClick);
//     } else {
//         console.error("Element not found: 'next-btn'");
//     }

//     if (continueButton) {
//         console.log(continueButton);
//         continueButton.addEventListener('click', handleButtonClick);
//     } else {
//         console.error("Element not found: 'previous-btn'");
//     }
// });

