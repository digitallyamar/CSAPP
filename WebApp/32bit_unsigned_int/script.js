document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.bit-container input');
    const resultDiv = document.getElementById('result');
    const calculationDiv = document.getElementById('calculation');

    inputs.forEach(input => {
        input.addEventListener('input', updateResult);
    });

    function updateResult() {
        let value = 0;
        let calculation = 'Resulting Value: ';
        let first = true;

        inputs.forEach((input, index) => {
            const bit = parseInt(input.value) || 0;
            const power = 31 - index; // Start from 2^31 down to 2^0

            if (bit === 1) {
                if (!first) {
                    calculation += ' + ';
                }
                calculation += `2<sup>${power}</sup>`;
                value += Math.pow(2, power);
                first = false;
            }
        });

        calculation += ` = ${value}`;
        calculationDiv.innerHTML = calculation;
        resultDiv.innerText = value;
    }

    updateResult(); // Initialize with default values
});
