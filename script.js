document.getElementById("plusBtn").addEventListener("click", function () {
    const firstClassTicketPrice = document.getElementById("firstTicketInput");
    const firstClassTicketPriceNumber = parseInt(firstClassTicketPrice.value);
    const newFirstClassTicket = firstClassTicketPriceNumber + 1;
    firstClassTicketPrice.value = newFirstClassTicket;
})

document.getElementById("mainusBtn").addEventListener("click", function () {
    const firstClassTicketPrice = document.getElementById("firstTicketInput");
    const firstClassTicketPriceNumber = parseInt(firstClassTicketPrice.value);
    const newFirstClassTicketPriceNumber = firstClassTicketPriceNumber - 1;
    firstClassTicketPrice.value = newFirstClassTicketPriceNumber;
})


document.getElementById("economyPlusBtn").addEventListener("click", function () {
    const economyTicketPrice = document.getElementById("economyTicketInput");
    const economyTicketNumber = parseInt(economyTicketPrice.value);
    const newEconomyTicketNumber = economyTicketNumber + 1;
    economyTicketPrice.value = newEconomyTicketNumber;
})

document.getElementById("economyMinusBtn").addEventListener("click", function () {
    const economyTicketPrice = document.getElementById("economyTicketInput");
    const economyTicketNumber = parseInt(economyTicketPrice.value);
    const newEconomyTicketNumber = economyTicketNumber - 1;
    economyTicketPrice.value = newEconomyTicketNumber;
})