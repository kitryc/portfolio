// const glow = document.getElementById('glow');

// document.addEventListener('mousemove', (event) => {
//     const { clientX, clientY } = event;
//     glow.style.left = `${clientX}px`;
//     glow.style.top = `${clientY}px`;
// });

// grays out the other buttons when one is selected
//don't ask how this works pls
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

            //e.preventDefault();

            
            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    }
});

// window.onload = () => {
//     const transition_el = document.querySelector('.transition');
//     const anchors = document.querySelectorAll('a');

//     setTimeout(() => {
//         transition_el.classList.remove('is-active');
//     }, 500);

//     for (let i = 0; i < anchors.length; i++) {
//         const anchor = anchors[i];

//         if (anchor.target === "_blank") {
//             continue;
//         }

//         anchor.addEventListener('click', e => {
//             const target = anchor.href;

//             e.preventDefault();

            
//             transition_el.classList.add('is-active');

//             setTimeout(() => {
//                 window.location.href = target;
//             }, 500);
//         });
//     }
// };

// window.addEventListener('popstate', () => {
//     const transition_el = document.querySelector('.transition');
//     if (transition_el) {
//         transition_el.classList.add('is-active');
//     }
// });


window.onbeforeunload = () => {
    const transition_el = document.querySelector('.transition');
    transition_el.classList.add('is-active');
};
