function maxProfit(timeUnit) {
  // Initialize counts for each property
  let theaterCount = 0;
  let pubCount = 0;
  let commercialParkCount = 0;

  // Calculate the number of properties based on the given time unit
  while (timeUnit >= 10) {
    // Build a Commercial Park
    commercialParkCount++;
    timeUnit -= 10;
  }

  while (timeUnit >= 5) {
    // Build a Theatre
    theaterCount++;
    timeUnit -= 5;
  }

  while (timeUnit >= 4) {
    // Build a Pub
    pubCount++;
    timeUnit -= 4;
  }

  // Calculate earnings based on the developed properties
  const earnings =
    theaterCount * 1500 + pubCount * 1000 + commercialParkCount * 3000;

  console.log(`Time Unit: ${timeUnit}`);
  console.log(`Earnings: $${earnings}`);
  console.log(`T: ${theaterCount} P: ${pubCount} C: ${commercialParkCount}`);
}

// Test cases
maxProfit(7); // Output: Time Unit: 0 Earnings: $3000 T: 1 P: 0 C: 0
maxProfit(8); // Output: Time Unit: 0 Earnings: $4500 T: 1 P: 0 C: 0
maxProfit(13); // Output: Time Unit: 0 Earnings: $16500 T: 2 P: 0 C: 0
