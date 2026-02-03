document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('actionBtn');
    const display = document.getElementById('counter');
    let count = 0;

    btn.addEventListener('click', () => {
        count++;
        display.textContent = `Count: ${count}`;
        
        // Visual feedback
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 100);
    });
});
