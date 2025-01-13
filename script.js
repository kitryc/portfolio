const buttons = document.querySelectorAll('.nav');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        buttons.forEach(b => {
            if (b !== button) {
                b.classList.add('gray-out');
            }
        });
    });

    button.addEventListener('mouseleave', () => {
        buttons.forEach(b => {
            b.classList.remove('gray-out');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        if (anchor.target === "_blank") {
            continue;
        }

        anchor.addEventListener('click', e => {
            const target = anchor.href;
            
            //transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }
});

window.onbeforeunload = () => {
    const transition_el = document.querySelector('.transition');
    transition_el.classList.add('is-active');
};
