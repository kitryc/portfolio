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

function navigate(target) {
    const transition_el = document.querySelector('.transition');
    transition_el.classList.add('is-active');

    setTimeout(() => {
        window.location.href = target;
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    const transition_el = document.querySelector('.transition');

    const removeActiveClass = () => {
        transition_el.classList.remove('is-active');
    };

    setTimeout(removeActiveClass, 500);

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            setTimeout(removeActiveClass, 500);
        }
    });

    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === 'visible') {
            setTimeout(removeActiveClass, 500);
        }
    });
});

window.onbeforeunload = () => {
    const transition_el = document.querySelector('.transition');
    transition_el.classList.add('is-active');
};
