const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const eredmenyBekezdes = document.getElementById('eredmeny');

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    const random = Math.floor(Math.random() * 5) + 5;
    let kattido = undefined;
    const reflexTimeout = setTimeout(() => {
        document.body.style.backgroundColor = 'lightcoral';
        kattido = new Date();
    }, random * 1000);

    stopButton.addEventListener('click', () => {
        if (kattido === undefined) {
            eredmenyBekezdes.textContent = 'Túl korán kattintottál!';
            clearTimeout(reflexTimeout);
        } else {
            const elteltIdo = new Date() - kattido;
            eredmenyBekezdes.textContent = `A reflexidő: ${elteltIdo} ms`;
            clearTimeout(reflexTimeout);
        }
    });
});