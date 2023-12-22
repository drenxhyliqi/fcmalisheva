(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //  (format: "MM/DD/YYYY HH:mm:ss")
  const gameStartTime = new Date("09/15/2023 15:00:00").getTime(); // Orari I Ndeshjes

  // Calculate the game end time (e.g., 90 minutes after gameStartTime)
  const gameEndTime = gameStartTime + 90 * minute;

  // Perditesimi I Vitit Automatikisht :-)
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    match = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > match) {
    match = dayMonth + nextYear;
  }
  // end

  const countdownElement = document.getElementById("countdown");
  const headlineElement = document.getElementById("headline");

  const updateCountdown = function () {
    const now = new Date().getTime();
    const distance = gameStartTime - now;

    if (distance <= 0) {
      // Game has started or is ongoing
      const remainingTime = gameEndTime - now;

      if (remainingTime <= 0) {
        // Game has ended
        headlineElement.innerText = "NDESHJA KA PERFUNDUAR";
        countdownElement.style.display = "none";
      } else {
        // Game is ongoing
        const days = Math.floor(remainingTime / day);
        const hours = String(Math.floor((remainingTime % day) / hour)).padStart(
          2,
          "0"
        );
        const minutes = String(
          Math.floor((remainingTime % hour) / minute)
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((remainingTime % minute) / second)
        ).padStart(2, "0");

        headlineElement.innerText = "NDESHJA PO LUHET TANI";
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
      }
    } else {
      // Game has not started yet
      headlineElement.innerText = "NDESHJA FILLON PER";
      countdownElement.style.display = "block";

      // Calculate the time remaining until the game starts
      const days = Math.floor(distance / day);
      const hours = String(Math.floor((distance % day) / hour)).padStart(
        2,
        "0"
      );
      const minutes = String(Math.floor((distance % hour) / minute)).padStart(
        2,
        "0"
      );
      const seconds = String(Math.floor((distance % minute) / second)).padStart(
        2,
        "0"
      );

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
    }
  };

  // Call the updateCountdown function initially
  updateCountdown();

  // Set up the interval to update the countdown
  let x = setInterval(updateCountdown, 1000); // Update every second
})();

/* //CLICK DIV HREF -->
const kit1 = document.getElementById("kit1");

kit1.addEventListener("click", function () {
  window.location.href =
    "https://www.footballkitarchive.com/malisheva-2022-23-home-kit/"; // Replace with your desired URL
});

//CLICK DIV2 HREF -->
const kit2 = document.getElementById("kit2");
kit2.addEventListener("click", function () {
  window.location.href =
    "https://www.footballkitarchive.com/malisheva-2022-23-away-kit/"; // Replace with your desired URL
});

//CLICK DIV3 HREF -->
const kit3 = document.getElementById("kit3");
kit3.addEventListener("click", function () {
  window.location.href =
    "https://www.footballkitarchive.com/malisheva-2022-23-third-kit/"; // Replace with your desired URL
}); */
//TABELA
