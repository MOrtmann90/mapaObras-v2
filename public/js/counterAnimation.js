function animatedCounter(targer, time = 200, start = 0) {
    return {
      current: 0,
      target: targer,
      time: time,
      start: start,
      updatecounter: function () {
        start = this.start;
        const increment = (this.target - start) / this.time;
        const handle = setInterval(() => {
          if (this.current < this.target) this.current += increment;
          else {
            clearInterval(handle);
            this.current = this.target;
          }
        }, 1);
      },
    };
  }