const refs = {
  clockface: document.querySelector('#timer-1'),
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
};

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = `${days}:`;
  refs.hours.textContent = `${hours}:`;
  refs.mins.textContent = `${mins}:`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const TargetTime = new Date('Oct 18, 2021').getTime();

let timerId = setInterval(() => {
  const startTime = Date.now();
  let deltaTime = TargetTime - startTime;
  updateClockface(deltaTime);
  if (deltaTime < 0) {
    clearInterval(timerId);
    refs.clockface.textContent = 'Finish';
  }
}, 1000);
