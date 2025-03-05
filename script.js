document
.getElementById("calculateBtn")
.addEventListener("click", function () {
    document.querySelector('.result').style.display = '';
    // Get input values
    const originalPrice = parseFloat(
        document.getElementById("originalPrice").value
    );
    const discountPercentage = parseFloat(
        document.getElementById("discountPercentage").value
    );

    // Validate inputs
    if (isNaN(originalPrice) || isNaN(discountPercentage)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    // Calculate discounted price and amount saved
    const discountAmount =
        (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;

    // Display results
    document.getElementById(
        "discountedPrice"
    ).textContent = `$${discountedPrice.toFixed(2)}`;
    document.getElementById(
        "amountSaved"
    ).textContent = `$${discountAmount.toFixed(2)}`;
});