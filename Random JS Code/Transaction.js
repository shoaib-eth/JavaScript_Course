fetch("https://example.com/transaction-details")
  .then((response) => response.json())
  .then((data) => {
    // Process the transaction details
    // For example, you can display them in an alert
    alert(JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error fetching transaction details:", error);
  });