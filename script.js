const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount(){
  const selectedSeat = document.querySelectorAll('.row .seat.selected');
  const selectedSeatCount = selectedSeat.length;
  
  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
})

// Seat click event
container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
})