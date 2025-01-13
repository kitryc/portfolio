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
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 500);
});

window.onbeforeunload = () => {
    const transition_el = document.querySelector('.transition');
    transition_el.classList.add('is-active');
};
