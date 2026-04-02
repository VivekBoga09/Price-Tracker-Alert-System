const API_BASE = "http://127.0.0.1:5000"; // update to Render URL after deployment

function addTrackButton() {

  if (document.getElementById("track-price-btn")) return;

  const button = document.createElement("button");

  button.innerText = "Track Price";
  button.id = "track-price-btn";

  button.style.background = "#ff9900";
  button.style.color = "white";
  button.style.border = "none";
  button.style.padding = "10px";
  button.style.borderRadius = "6px";
  button.style.cursor = "pointer";
  button.style.marginTop = "10px";

  button.onclick = async () => {

    const url = window.location.href;

    await fetch(`${API_BASE}/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    });

    alert("Product Added!");
  };

  const container =
    document.querySelector("#titleSection") ||
    document.querySelector("#centerCol");

  if (container) {
    container.appendChild(button);
  }

}

window.addEventListener("load", () => {
  setTimeout(addTrackButton, 3000);
});