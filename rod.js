
const switchButton = document.querySelectorAll('.switchBtn');

    switchButton.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                startVapoursAndBubbles();
            } else {
                stopVapoursAndBubbles();
            }
        });
    });

    let vapourInterval;

    function startVapoursAndBubbles() {
        const circle = document.querySelector('.circle');

        vapourInterval = setInterval(() => {
            createEffect(circle, 'vapour');
            createEffect(circle, 'bubble');
        }, 100); 
    }

    function stopVapoursAndBubbles() {
        clearInterval(vapourInterval);
        document.querySelectorAll('.vapour, .bubble').forEach(el => el.remove());
    }

    function createEffect(parent, type) {
        const effect = document.createElement('div');
        effect.classList.add(type);

        const rect = parent.getBoundingClientRect();
        const randomX = Math.random() * rect.width - rect.width / 2;
        const randomY = Math.random() * rect.height - rect.height / 2;

        effect.style.left = `${rect.left + rect.width / 2 + randomX}px`;
        effect.style.top = `${rect.top + rect.height / 2 + randomY}px`;

        document.body.appendChild(effect);

        effect.addEventListener('animationend', () => {
            effect.remove();
        });
    }

