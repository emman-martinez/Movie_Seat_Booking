const populateUI = (seats, movieSelect) => { // Get data from localStorage and populate UI

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

};

const setMovieData = (movieIndex, moviePrice) => { // Save selected movie index and price

    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);

};

const updateSelectedCount = () => { // Update total and count

    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    return [selectedSeats, selectedSeatsCount];

};

export {
    populateUI,
    setMovieData,
    updateSelectedCount
}