import { setMovieData, updateSelectedCount } from './helper';

const movieSelectEvent = (movieSelect, ticketPrice, total) => { // Movie select event

    movieSelect.addEventListener('change', (e) => {

        const index = e.target.selectedIndex;
        const precio = e.target.value;
        ticketPrice = +precio;
        setMovieData(index, precio);
        const selectedSeats = updateSelectedCount();
        total.innerText = selectedSeats[1] * ticketPrice;

    });

};

const containerEvent = (container, seats, count, total, ticketPrice) => { // Seat Click Event

    container.addEventListener('click', (e) => {

        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

            e.target.classList.toggle('selected');

            const selectedSeatsAndCount = updateSelectedCount();
            const selectedSeats = selectedSeatsAndCount[0];
            const selectedCount = selectedSeatsAndCount[1];

            const seatsIndex = [...selectedSeats].map((seat) => { // Copy selected seats into array
                // Map through array
                return [...seats].indexOf(seat); // return a new array indexes
            });

            localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

            count.innerText = selectedCount;
            total.innerText = selectedCount * ticketPrice;
        }
    });

};

export {
    movieSelectEvent,
    containerEvent
}