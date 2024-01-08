document.addEventListener('DOMContentLoaded', (event) => {
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', motionHandler, false);
    } else {
        console.log("DeviceMotionEvent is not supported");
    }
});

let lastY;

function motionHandler(event) {
    const acceleration = event.accelerationIncludingGravity;
    const ball = document.getElementById('ball');
    
    if (!lastY) {
        lastY = acceleration.y;
        return;
    }

    if (acceleration.y > lastY + 10) { // Adjust sensitivity as needed
        jumpBall();
    }
    lastY = acceleration.y;
}

function jumpBall() {
    const ball = document.getElementById('ball');
    let bottom = parseInt(window.getComputedStyle(ball).bottom, 10);

    // Simple jump animation
    let id = setInterval(frame, 5);
    let direction = 1;

    function frame() {
        if (bottom >= 300) { // Adjust jump height as needed
            direction = -1;
        } else if (bottom <= 0) {
            clearInterval(id);
        }

        bottom += 5 * direction;
        ball.style.bottom = bottom + 'px';
    }
}
