import './App.css';
import './Styles/slotMachine.css'
import { pullLever } from './Scripts/SlotMachine.js';

function App() {
  setTimeout(() => {
    // Create a new event
  //  const event = new MouseEvent('mousedown', {
  //     bubbles: true,
  //     cancelable: true,
  //     view: window
  //   });
    // Dispatch the event on the lever
    pullLever()
    // document.getElementById('lever').dispatchEvent(event);
  }, 4000); // Trigger after 2 seconds
  return (
    <>
    <div class="slot-machine">
    <div class="reels">
      <div class="reel" id="reel1">🎃</div>
      <div class="reel" id="reel2">🍋</div>
      <div class="reel" id="reel3">🍉</div>
    </div>
    <div class="lever-container">
      <div class="lever" id="lever">
        <div class="lever-handle"></div>
      </div>
    </div>
  </div>
  <p id="resultMessage"></p>
  </>
  );
}

export default App;
