import { movieSelectEvent, containerEvent } from './events';
import { populateUI, updateSelectedCount } from './helper';
import './../css/componentes.css';

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
populateUI(seats, movieSelect); // Get data from localStorage and populate UI
let ticketPrice = +movieSelect.value;

const eventos = () => {

    movieSelectEvent(movieSelect, ticketPrice, total);
    containerEvent(container, seats, count, total, ticketPrice);

    const selectedSeatsAndCount = updateSelectedCount(); // Inicial count and total 
    const selectedCount = selectedSeatsAndCount[1];
    count.innerText = selectedCount;
    total.innerText = selectedCount * ticketPrice;

};

const init = () => {
    console.log('Movie Seat Booking');
    eventos();
};

export {
    init
}