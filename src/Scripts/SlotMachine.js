

const symbols = ['🍒', '🍋', '🍉', '⭐', '💎', '🔔','🎃'];  // List of slot symbols
function autoSpin() {
    spinSlots();
}
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function riggedSymbol() {
  return '⭐';  // Rigged final symbol (always a star)
}

function spinReel(reelId) {
  return new Promise((resolve) => {
    let count = 0;
    const interval = setInterval(() => {
      document.getElementById(reelId).textContent = getRandomSymbol();  // Random symbols while rolling
      count++;
      if (reelId=='reel3'){
        if (count > 35) {  // Simulate the reel slowing down
            clearInterval(interval);
            document.getElementById(reelId).textContent = riggedSymbol();  // Rigged final result
            resolve();
          }
      }else{
        if (count > 25) {  // Simulate the reel slowing down
            clearInterval(interval);
            document.getElementById(reelId).textContent = riggedSymbol();  // Rigged final result
            resolve();
          }
      }
      
    }, 90);  // Speed of reel spin
  });
}

async function spinSlots() {
  // Clear previous result message
  document.getElementById("resultMessage").textContent = '';

  // Spin all reels (random first, then rigged)
  await spinReel('reel1');
  await spinReel('reel2');
  await spinReel('reel3');

  // Display the correct winning message after all reels stop
  document.getElementById("resultMessage").textContent = "🎉Jackpot🎉 You won!";
}

export function pullLever() {
document.getElementById("resultMessage").textContent = "🎉Jackpot🎉 You won!";
const lever = document.getElementById('lever');
lever.classList.add('active');
setTimeout(() => {
  lever.classList.remove('active');  // Move lever back up
  spinSlots();  // Spin reels
}, 600);  // Delay for better lever animation timing
}

// lever.addEventListener('mousedown', function() {
//   // Add active class to move the lever down
//   lever.classList.add('active');
  
//   // Trigger the spinning after the lever is pulled down
//   setTimeout(() => {
//     lever.classList.remove('active');  // Move lever back up
//     spinSlots();  // Spin reels
//   }, 600);  // Delay for better lever animation timing
// });
