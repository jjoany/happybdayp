const pam = document.querySelector('.pam');
const pipe = document.querySelector('.pipe');

const jump = () => {
    pam.classList.add('jump');

    setTimeout(() => {
        pam.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const pamPosition = +window.getComputedStyle(pam).bottom.replace('px', '');
    
    console.log(pamPosition);

    if (pipePosition <= 120 && pipePosition > 0 && pamPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pam.style.animation = 'none';
        pam.style.bottom = `${pamPosition}px`;

        pam.src = './imagens/gameover.png';
        pam.style.width = '150px';
        pam.style.marginLeft = '50px';
    document.querySelector('.restart').style.display = 'block';

    
            
    clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);

document.querySelector('.restart').addEventListener('click', () => {
    window.location.reload();
});

