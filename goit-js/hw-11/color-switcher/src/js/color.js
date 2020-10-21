const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#4205a0',
  '#fcb3f0',
  '#d40e76',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"'),
  bodyRef: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const switcher = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.switchColors = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      let i = randomIntegerFromInterval(min, max);
      refs.bodyRef.style.backgroundColor = colors[i];
      // console.log(colors[i]);
    }, 1000);
  },

  stop() {
    clearInterval(this.switchColors);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', switcher.start.bind(switcher));
refs.stopBtn.addEventListener('click', switcher.stop.bind(switcher));
