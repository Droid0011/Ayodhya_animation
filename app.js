const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

const ramaImage = new Image();
const sitaImage = new Image();
ramaImage.src = "images/ramji.jpg"; // Replace with the actual path to Rama's sprite sheet
sitaImage.src = "images/sitaji.jpeg"; // Replace with the actual path to Sita's sprite sheet

const characters = [
    { image: ramaImage, x: 50, y: 200, frameWidth: 100, frameHeight: 200, frameCount: 8, speed: 2 },
    { image: sitaImage, x: 50, y: 200, frameWidth: 100, frameHeight: 200, frameCount: 8, speed: 2 }
  ];
  

function drawCharacter(character) {
  ctx.drawImage(
    character.image,
    (character.frameIndex % character.frameCount) * character.frameWidth,
    0,
    character.frameWidth,
    character.frameHeight,
    character.x,
    character.y,
    character.frameWidth,
    character.frameHeight
  );
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  characters.forEach(character => {
    drawCharacter(character);
    character.x += character.speed;

    // Reset position when the character goes off the canvas
    if (character.x > canvas.width) {
      character.x = -character.frameWidth;
    }

    // Update the frame index for the next frame
    character.frameIndex++;
  });

  requestAnimationFrame(update);
}

// Load sprite sheets and start the animation
ramaImage.onload = function () {
    console.log("Rama Image Loaded");
    update();
  };
  
  sitaImage.onload = function () {
    console.log("Sita Image Loaded");
    update();
  };