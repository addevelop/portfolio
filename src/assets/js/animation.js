export function animation(id, animation, display, time, delay)
{
    var element = document.getElementById(id);
    element.style.display = display;
    element.style.animation = time + 's ' + animation
    element.style.animationDelay = delay + 's'

    element.addEventListener('animationend', () => {
        element.style.animation = 'none';
        element.style.animationDelay = 'none';
        element.style.display = 'none';
    })
}

export function animationAppear(id, animation, display, time, delay)
{
    var element = document.getElementById(id);
    element.style.display = 'none';
    setTimeout( () => {
        element.style.animation = time + 's ' + animation
        element.style.display = display

        element.addEventListener('animationend', () => {
        element.style.animation = 'none';
    })

    }, delay * 1000)
    
}
