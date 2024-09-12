// JavaScript to calculate area and perimeter of a triangle

document.getElementById('triangleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get values from form inputs
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    // Validate input
    if (isNaN(base) || isNaN(height) || isNaN(side1) || isNaN(side2) || isNaN(side3) ||
        base <= 0 || height <= 0 || side1 <= 0 || side2 <= 0 || side3 <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Calculate area
    const area = 0.5 * base * height;

    // Calculate perimeter
    const perimeter = side1 + side2 + side3;

    // Display results
    document.getElementById('areaResult').textContent = `Area: ${area.toFixed(2)}`;
    document.getElementById('perimeterResult').textContent = `Perimeter: ${perimeter.toFixed(2)}`;
});
