// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }
// }

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Sep 17, 2021'),
// });
// console.log(timer);
//-----
const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      document.querySelector('span[data-value="days"]').textContent = days;
      document.querySelector('span[data-value="hours"]').textContent = hours;
      document.querySelector('span[data-value="mins"]').textContent = mins;
      document.querySelector('span[data-value="secs"]').textContent = secs;

      console.log(`${hours}::${mins}::${secs}`);
    }, 1000);
  },
};
//timer.start();

//calculation code
const pad = value => String(value).padStart(2, '0');

const getTimeComponents = function (time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
};
