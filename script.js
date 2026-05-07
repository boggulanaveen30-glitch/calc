const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    const clearBtn = document.getElementById('clear');

    // Handle button clicks
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.textContent;
            if (value === '=') {
                calculate();
            } else if (value === 'C') {
                display.value = '';
            } else {
                display.value += value;
            }
        });
    });

    // Handle keyboard input
    document.addEventListener('keydown', (e) => {
        if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
            display.value += e.key;
        } else if (e.key === 'Enter') {
            calculate();
        } else if (e.key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (e.key === 'Escape') {
            display.value = '';
        }
    });

    // Calculation function with error handling
    function calculate() {
        try {
            display.value = eval(display.value) || '';
        } catch {
            display.value = 'Error';
        }
    }