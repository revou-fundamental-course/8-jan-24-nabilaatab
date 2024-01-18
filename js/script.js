document.addEventListener('DOMContentLoaded', function () {
    const areaInput = document.querySelector('.main-container-area input');
    const circumInput = document.querySelector('.main-container-circum input');
    const areaResult = document.querySelector('.main-container-area p.result');
    const circumResult = document.querySelector('.main-container-circum p.result');
    const areaButton = document.querySelector('.main-container-area button');
    const circumButton = document.querySelector('.main-container-circum button');
    const trashButtons = document.querySelectorAll('.calculate button:last-child');

   
    function isValidNumber(input) {
        return !isNaN(input) && input !== '' && input !== null;
    }


    function formatNumber(number) {
        return Number.isInteger(number) ? number.toString() : number.toFixed(2);
    }

    
    function calculateArea() {
        const sideLength = parseFloat(areaInput.value);
        if (isValidNumber(sideLength)) {
            const area = sideLength * sideLength;
            areaResult.textContent = `Luas: ${sideLength} x ${sideLength} = ${formatNumber(area)}`;
        } else {
            areaResult.textContent = 'Masukkan panjang sisi dengan angka!';
        }
    }

    
    function calculatePerimeter() {
        const sideLength = parseFloat(circumInput.value);
        if (isValidNumber(sideLength)) {
            const perimeter = 4 * sideLength;
            circumResult.textContent = `Keliling: 4 x ${sideLength} = ${formatNumber(perimeter)}`;
        } else {
            circumResult.textContent = 'Masukkan panjang sisi dengan angka!';
        }
    }

    
    function clearResults() {
        areaInput.value = '';
        circumInput.value = '';
        areaResult.textContent = '';
        circumResult.textContent = '';
    }

    
    areaButton.addEventListener('click', calculateArea);

    
    circumButton.addEventListener('click', calculatePerimeter);


    trashButtons.forEach(trashButton => {
        trashButton.addEventListener('click', clearResults);
    });

    
    [areaInput, circumInput].forEach(inputField => {
        inputField.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9.]/g, '');
        });
    });
});

