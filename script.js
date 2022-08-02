//call back hell
let countdown = document.querySelector(".countdown");
let time = 10;
countdown.innerText = time--;
setTimeout(() => {
  countdown.innerText = time--;
  setTimeout(() => {
    countdown.innerText = time--;
    setTimeout(() => {
      countdown.innerText = time--;
      setTimeout(() => {
        countdown.innerText = time--;
        setTimeout(() => {
          countdown.innerText = time--;
          setTimeout(() => {
            countdown.innerText = time--;
            setTimeout(() => {
              countdown.innerText = time--;
              setTimeout(() => {
                countdown.innerText = time--;
            }, 1000);
                setTimeout(() => {
                  countdown.innerText = time--;
                
                setTimeout(() => {
                  countdown.innerText = "Happy Independence Day";
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
