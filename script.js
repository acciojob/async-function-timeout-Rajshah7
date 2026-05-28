const btn = document.getElementById("btn");
    const text = document.getElementById("text");
    const delay = document.getElementById("delay");
    const output = document.getElementById("output");

    function wait(delayValue) {

      return new Promise((resolve) => {

        setTimeout(() => {

          resolve();

        }, delayValue);

      });

    }

    async function displayMessage() {

      const message = text.value;
      const delayValue = Number(delay.value);

      output.innerHTML = "";

      await wait(delayValue);

      output.innerHTML = message;

    }

    btn.addEventListener("click", displayMessage);