window.addEventListener("load", (event) => {
    document.getElementById("details").addEventListener("toggle", (event) => {
        let state = "Abierto";
        if (details.open) {
          /* the element was toggled open */
          state = "Abierto";
        } else {
          /* the element was toggled closed */
          state = "Cerrado";
        }
        document.getElementById("state").innerText = state;
    });
});

