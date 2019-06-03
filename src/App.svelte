<script>
import { onDestroy } from "svelte";

  let breakLength = 5;
  let sessionLength = 25;
  let timerType = "Session";
  let timeLeft=5;
	let timerState = "start";
	let myClock;
	let minutes = 0;
	let seconds = 0;
	let interval;

	let reset;

function onInterval(callback, milliseconds) {
	 interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}

	//***************** Count down clock
  myClock = onInterval(() => {
		timeLeft -= 1
		minutes = Math.floor(timeLeft / 60);
		 seconds = timeLeft - (minutes * 60);
		 seconds = seconds < 10 ? '0' + seconds : seconds;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		if (timeLeft === 0){
	clearInterval(interval);
	}
		}, 1000);


  //***************** Break button functions
  function increaseBreakLength() {
    breakLength += 1;
  }
  function decreaseBreakLength() {
    breakLength -= 1;
  }
  //***************** Session button functions
  function increaseSessionLength() {
    sessionLength += 1;
  }
  function decreaseSessionLength() {
    sessionLength -= 1;
  }
  //***************** Timer button functions

  function timerReset() {
    breakLength = 5;
    sessionLength = 25;
    stage = "Session";
    timer = 0;
	}
	
	 function clockify(){
     minutes = Math.floor({timeLeft} / 60);
     seconds = {timeLeft} - (minutes * 60);
    
    return; 
	};
	
	

</script>

<style>
  .title {
    color: tomato;
    text-align: center;
  }

  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 200px);
    grid-gap: 10px;
    background-color: #fff;
    color: #444;
    align-items: center;
    justify-items: center;
  }
  /* Break CSS */

  #break-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid black;
    min-width: 220px;
  }

  .break-buttons {
    display: flex;

    flex-direction: row;
  }

  #break-label {
    color: purple;
  }

  #break-increment {
    font-size: 1.5rem;
    max-width: 4rem;
    cursor: pointer;
  }

  .break-length-display {
    color: black;
    font-size: 2rem;
    border: 2px black solid;
    background: whitesmoke;
    padding: 0 1rem;
    max-width: 1.5rem;
  }
  #break-decrement {
    font-size: 1.5rem;
    max-width: 4rem;
    cursor: pointer;
  }

  /* Session CSS */
  #session-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid black;
    min-width: 220px;
  }
  .session-buttons {
    display: flex;

    flex-direction: row;
  }

  #session-label {
    color: purple;
  }

  #session-increment {
    font-size: 1.5rem;
    max-width: 4rem;
    cursor: pointer;
  }

  .session-length-display {
    color: black;
    font-size: 2rem;
    border: 2px black solid;
    background: whitesmoke;
    padding: 0 1rem;
    max-width: 1.5rem;
  }
  #session-decrement {
    font-size: 1.5rem;
    max-width: 4rem;
    cursor: pointer;
  }
</style>

<h1 class="title">Pomodoro Clock</h1>

<div class="grid-wrapper">
  <!-- Break Section -->
  <div class="break-section-container">
    <section id="break-section">
      <h2 id="break-label">Break Length</h2>

      <div class="break-buttons">
        <button id="break-increment" on:click={increaseBreakLength}>➕</button>

        <h2 class="break-length-display">{breakLength} </h2>

        <button id="break-decrement" on:click={decreaseBreakLength}>➖</button>
      </div>
    </section>
  </div>
  <!-- end break section -->

  <!-- Session Section -->

  <section id="session-section">
    <h2 id="session-label">Session Length</h2>

    <div class="session-buttons">
      <button id="session-increment" on:click={increaseSessionLength}>
        ➕
      </button>

      <h2 class="session-length-display">{sessionLength} </h2>

      <button id="session-decrement" on:click={decreaseSessionLength}>
        ➖
      </button>
    </div>
  </section>
  <!-- end session section -->

  <!-- Timer Section -->
  <section id="timer-section">
    <div id="timer-label">
      <h1>{timerType}</h1>
    </div>
    <div id="time-left" >
		
		{minutes} : {seconds} 
		</div>

    <div class="timer-buttons">
      <button id="start_stop">{timerState}</button>
      <button id="reset" on:click={timerReset}>reset</button>

    </div>

  </section>

</div>
<!-- grid-wrapper -->
