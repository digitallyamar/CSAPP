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
            const bitPosition = 31 - index; // 0 for 2^0 to 31 for 2^31
            const bitWeight = 2 ** bitPosition;

            if (bitPosition === 31 && bitValue === 1) {
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
            value -= 2 ** 32; // Apply two's complement for signed representation
        }

        calculationElement.innerHTML = `Resulting Value: ${calculation.replace(/^\+ /, '')} = ${value}`;
        resultElement.textContent = value;
    }
});
