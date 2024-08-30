document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.bit-container input');
    const resultElement = document.getElementById('result');
    const calculationElement = document.getElementById('calculation');

    inputs.forEach(input => {
        input.addEventListener('input', updateResult);
    });

    function updateResult() {
        let value = 0;
        let calculation = '';
        let isNegative = false;

        inputs.forEach((input, index) => {
            const bitValue = parseInt(input.value) || 0;
            const bitPosition = 15 - index; // 0 for 2^0 to 15 for 2^15
            const bitWeight = 2 ** bitPosition;

            if (bitPosition === 15 && bitValue === 1) {
                isNegative = true;
            }

            if (bitValue === 1) {
                value += bitWeight;
                calculation += `+ 2<sup>${bitPosition}</sup> * 1 `;
            } else {
                calculation += `+ 2<sup>${bitPosition}</sup> * 0 `;
            }
        });

        if (isNegative) {
            value -= 2 ** 16; // Apply two's complement for signed representation
        }

        calculationElement.innerHTML = `Resulting Value: ${calculation.replace(/^\+ /, '')} = ${value}`;
        resultElement.textContent = value;
    }
});
