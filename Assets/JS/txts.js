function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const wrapper = document.querySelector(".wrapper");

    sleep(3000);

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
        wrapper.classList.remove("wrapper--hidden");
    });
});

function showDiscordNotification() {
    const alert_div = document.querySelector('.alert');

    alert_div.classList.remove('alert--hide');
    alert_div.classList.add('alert--show');
    setTimeout(function() {
        alert_div.classList.add("alert--hide")
        alert_div.classList.remove("alert--show");
    },5000);
};

function hideByUser() {
    const alert_div = document.querySelector('.alert');

    alert_div.classList.add('alert--hide');
    alert_div.classList.remove('alert--show');
};