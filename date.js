function getCurrentDate() {
  // Get the current date
  const currentDate = new Date();

  // Get the date element
  const dateElement = document.getElementById("date");

  // Formatting the date
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Set the date to dateElement
  dateElement.innerHTML = formattedDate;
}

// Call getCurrentDate function when the page loads
window.addEventListener("load", getCurrentDate);
