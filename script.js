function handleFirstClassTicket(isIncreased) {
    const firstClassTicketPrice = document.getElementById("firstTicketInput");
    const firstClassTicketPriceNumber = parseInt(firstClassTicketPrice.value);
    // const newFirstClassTicket = firstClassTicketPriceNumber + 1;
    let newFirstClassTicket = firstClassTicketPriceNumber;
    if (isIncreased === true) {
        newFirstClassTicket = firstClassTicketPriceNumber + 1;
    }
    else if (isIncreased === false && newFirstClassTicket > 0) {
        newFirstClassTicket = firstClassTicketPriceNumber - 1;
    }
    firstClassTicketPrice.value = newFirstClassTicket;
    const ticketPrice = newFirstClassTicket * 150;
    document.getElementById("firstClassTicketPrice").innerText = 'First Class $' + ticketPrice;
    handleTotalPrice()
}

function handleEconomyTicket(isIncreased) {
    const economyTicketPrice = document.getElementById("economyTicketInput");
    const economyTicketNumber = parseInt(economyTicketPrice.value);
    // const newEconomyTicketNumber = economyTicketNumber + 1;
    let newEconomyTicketNumber = economyTicketNumber;
    if (isIncreased === true) {
        newEconomyTicketNumber = economyTicketNumber + 1;
    } else if (isIncreased === false && newEconomyTicketNumber > 0) {
        newEconomyTicketNumber = economyTicketNumber - 1;
    }
    economyTicketPrice.value = newEconomyTicketNumber;
    const ticketPrice = newEconomyTicketNumber * 100
    document.getElementById("economyTicketPrice").innerText = 'Economy $' + ticketPrice;
    handleTotalPrice()
}

function handleTotalPrice() {
    const firstClassTicketPrice = document.getElementById("firstTicketInput");
    const firstClassTicketPriceNumber = parseInt(firstClassTicketPrice.value);
    const economyTicketPrice = document.getElementById("economyTicketInput");
    const economyTicketPriceNumber = parseInt(economyTicketPrice.value)
    const subtotal = firstClassTicketPriceNumber * 150 + economyTicketPriceNumber * 100;
    document.getElementById("subtotal").innerText = '$' + subtotal;
    const vat = subtotal * 0.1;
    document.getElementById("vat").innerText = '$' + vat;
    const totalPrice = subtotal + vat;
    document.getElementById("total").innerText = '$' + totalPrice;
}
document.getElementById("book").addEventListener("click", function () {
    const hideBook = document.getElementById("hide");
    hideBook.style.display = "none";
    alert('Thank You For Purchase The Ticket')
})






// First Method



// document.getElementById("plusBtn").addEventListener("click", function () {
//     const firstClassTicketPrice = document.getElementById("firstTicketInput");
//     const firstClassTicketPriceNumber = parseInt(firstClassTicketPrice.value);
//     const newFirstClassTicket = firstClassTicketPriceNumber + 1;
//     firstClassTicketPrice.value = newFirstClassTicket;
//     const ticketPrice = newFirstClassTicket * 150;
//     document.getElementById("firstClassTicketPrice").innerText = 'First Class $' + ticketPrice;

// })

// document.getElementById("mainusBtn").addEventListener("click", function () {
//     const firstClassTicketPrice = document.getElementById("firstTicketInput");
//     const firstClassTicketPriceNumber = parseInt(firstClassTicketPrice.value);
//     const newFirstClassTicketPriceNumber = firstClassTicketPriceNumber - 1;
//     firstClassTicketPrice.value = newFirstClassTicketPriceNumber;
//     const ticketPrice = newFirstClassTicketPriceNumber * 150
//     document.getElementById("firstClassTicketPrice").innerText = 'First Class $' + ticketPrice;

// })


// document.getElementById("economyPlusBtn").addEventListener("click", function () {
//     const economyTicketPrice = document.getElementById("economyTicketInput");
//     const economyTicketNumber = parseInt(economyTicketPrice.value);
//     const newEconomyTicketNumber = economyTicketNumber + 1;
//     economyTicketPrice.value = newEconomyTicketNumber;

//     const ticketPrice = newEconomyTicketNumber * 100
//     document.getElementById("economyTicketPrice").innerText = 'Economy $' + ticketPrice

// })

// document.getElementById("economyMinusBtn").addEventListener("click", function () {
//     const economyTicketPrice = document.getElementById("economyTicketInput");
//     const economyTicketNumber = parseInt(economyTicketPrice.value);
//     const newEconomyTicketNumber = economyTicketNumber - 1;
//     economyTicketPrice.value = newEconomyTicketNumber;

//     const ticketPrice = newEconomyTicketNumber * 100;
//     document.getElementById("economyTicketPrice").innerText = 'Economy $' + ticketPrice
// })


