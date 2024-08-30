// Function to validate input and restrict it to 0 or 1
function validateInput(event) {
    const value = event.target.value;
    // Allow the field to be empty (when deleting with backspace)
    if (value === '' || value === '0' || value === '1') {
        return; // Valid input or empty field (backspace)
    }
    event.target.value = ''; // Clear the input if it's not valid
}

function calculateValue() {
    // Validate and retrieve the values of the bits
    const bit7 = parseInt(document.getElementById('bit7').value) || 0;
    const bit6 = parseInt(document.getElementById('bit6').value) || 0;
    const bit5 = parseInt(document.getElementById('bit5').value) || 0;
    const bit4 = parseInt(document.getElementById('bit4').value) || 0;
    const bit3 = parseInt(document.getElementById('bit3').value) || 0;
    const bit2 = parseInt(document.getElementById('bit2').value) || 0;
    const bit1 = parseInt(document.getElementById('bit1').value) || 0;
    const bit0 = parseInt(document.getElementById('bit0').value) || 0;

    // Calculate the signed integer value
    const value = (-bit7 * Math.pow(2, 7)) + (bit6 * Math.pow(2, 6)) + 
                  (bit5 * Math.pow(2, 5)) + (bit4 * Math.pow(2, 4)) + 
                  (bit3 * Math.pow(2, 3)) + (bit2 * Math.pow(2, 2)) + 
                  (bit1 * Math.pow(2, 1)) + (bit0 * Math.pow(2, 0));

    // Display the result
    document.getElementById('result').textContent = value;

    // Update labels
    document.getElementById('label7').innerHTML = `-2<sup>7</sup> * ${bit7}`;
    document.getElementById('label6').innerHTML = `2<sup>6</sup> * ${bit6}`;
    document.getElementById('label5').innerHTML = `2<sup>5</sup> * ${bit5}`;
    document.getElementById('label4').innerHTML = `2<sup>4</sup> * ${bit4}`;
    document.getElementById('label3').innerHTML = `2<sup>3</sup> * ${bit3}`;
    document.getElementById('label2').innerHTML = `2<sup>2</sup> * ${bit2}`;
    document.getElementById('label1').innerHTML = `2<sup>1</sup> * ${bit1}`;
    document.getElementById('label0').innerHTML = `2<sup>0</sup> * ${bit0}`;

    // Create the calculation string
    const calculationString = `-2<sup>7</sup> * ${bit7} + 2<sup>6</sup> * ${bit6} + 2<sup>5</sup> * ${bit5} + 2<sup>4</sup> * ${bit4} + 2<sup>3</sup> * ${bit3} + 2<sup>2</sup> * ${bit2} + 2<sup>1</sup> * ${bit1} + 2<sup>0</sup> * ${bit0} = ${value}`;
    document.getElementById('calculation').innerHTML = calculationString;
}

// Add event listeners to inputs for validation
document.getElementById('bit7').addEventListener('input', validateInput);
document.getElementById('bit6').addEventListener('input', validateInput);
document.getElementById('bit5').addEventListener('input', validateInput);
document.getElementById('bit4').addEventListener('input', validateInput);
document.getElementById('bit3').addEventListener('input', validateInput);
document.getElementById('bit2').addEventListener('input', validateInput);
document.getElementById('bit1').addEventListener('input', validateInput);
document.getElementById('bit0').addEventListener('input', validateInput);
