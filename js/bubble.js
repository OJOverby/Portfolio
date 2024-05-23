
const maxBubbles = 20;
let currentBubbles = 0;

const bubbleContainer = document.querySelector(".home-wrapper");


// function that creates bubbles
function createBubble() {
    //checks that the bubble limit is exceeded
    while (currentBubbles < maxBubbles) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * 100 + "%";
        bubble.style.animationDelay = Math.random() * 7 + "s";
        bubble.style.scale = Math.random() * 0.9 + 0.1;
        bubbleContainer.appendChild(bubble);
        // adds span to the bubble for color effects
        for (let i = 0; i < 5; i++) {
            let childSpan = document.createElement("span");
            bubble.appendChild(childSpan);
        }
        // Removes the bubbles (replace with burst animation later)
        bubble.addEventListener("click", function() {
            bubbleContainer.removeChild(bubble);
            currentBubbles--;
            createBubble();
        });
        currentBubbles++;
    }
}

createBubble();