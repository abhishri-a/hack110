// get DOM elements
const addEventModal = document.getElementById('add-event-modal');
const addEventBtn = document.getElementById('add-event-btn');
const closeBtn = document.getElementsByClassName('close')[0];
const saveEventBtn = document.getElementById('save-event-btn');
const eventList = document.getElementById('event-list');

// open add event modal
addEventBtn.addEventListener('click', () => {
  addEventModal.style.display = 'block';
});

// close add event modal
closeBtn.addEventListener('click', () => {
  addEventModal.style.display = 'none';
});

// save event to calendar
saveEventBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const eventName = document.getElementById('event-name').value;
  const eventDate = document.getElementById('event-date').value;
  const eventTime = document.getElementById('event-time').value;
  const event = document.createElement('li');
  event.innerHTML = `
    <span class="event-time">${eventTime}</span>
    <span class="event-name">${eventName}</span>
  `;
  eventList.appendChild(event);
  addEventModal.style.display = 'none';
});
