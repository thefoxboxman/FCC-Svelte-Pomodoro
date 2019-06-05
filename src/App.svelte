<script>
  import { onDestroy, onMount } from "svelte";

  export let breakLength = 0;
  export let sessionLength = 0;
  export let timerType = "Session";
  export let timeLeft = 0;
  let timerState = false;
  let shotClock = 0;
  export let minutes = 0;
  export let seconds = 0;
  let interval;
  let reset;

  //******************* 0n Mount
  onMount(() => {
    timeLeft = sessionLength * 60;
    showTime();
  });
  //***************** Interval Utility
  function onInterval(callback, milliseconds) {
    interval = setInterval(callback, milliseconds);

    onDestroy(() => {
      clearInterval(interval);
    });
  }

  //******************** convert display for single digit into min and secs
  function showTime() {
    minutes = Math.floor(timeLeft / 60);
    seconds = timeLeft - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  }

  //***************** Count down clock
  function timer() {
    console.log("in start timer");
    shotClock = onInterval(() => {
      timeLeft -= 1;
      displayMinSec();

      if (timeLeft < 0 && timerType === "Session") {
        console.log("ALARM end of session");
        myAlarm();
        timerType = "Break";
        console.log("timerType ", timerType);
        clearInterval(interval);
        runBreakTimer();
      } else if (timeLeft === 0 && timerType === "Break") {
        console.log("END OF BREAK GET BAKC TO WORK");
        play;
        clearInterval(interval);
        timerReset();
      }
    }, 1000);
  }
  //***************** Break button functions
  function increaseBreakLength() {
    if (breakLength >= 0 && breakLength <= 59) {
      breakLength += 1;
    } else {
      return;
    }
  }
  function decreaseBreakLength() {
    if (breakLength > 1 && breakLength <= 60) {
      breakLength -= 1;
    } else {
      return;
    }
  }
  //***************** Session button functions
  function increaseSessionLength() {
    if (sessionLength >= 0 && sessionLength <= 59) {
      sessionLength += 1;
      timeLeft = sessionLength * 60;
      showTime();
    } else {
      return;
    }
  }
  function decreaseSessionLength() {
    if (sessionLength > 1 && sessionLength <= 60) {
      sessionLength -= 1;
      timeLeft = sessionLength * 60;
      showTime();
    } else {
      return;
    }
  }
  //***************** Timer button functions
  // RESET
  function timerReset() {
    clearInterval(interval);
    breakLength = 5;
    sessionLength = 25;
    timerType = "Session";
    minutes = 0;
    seconds = 0;
    timeLeft = sessionLength * 60;
    showTime();
  }
  //RUN  session TIMER
  function runSeshTimer() {
    console.log("in runsheh");
    if (timeLeft === 0) {
      timeLeft = sessionLength * 60;
      timer();
    } else {
      timer();
    }
  }

  //RUN BREAK TIMER

  function runBreakTimer() {
    timerType = "Break";
    if (timeLeft === 0) {
      timeLeft = breakLength * 60;

      timer();
    } else {
      timeLeft = breakLength * 60;
      timer();
    }
  }
  //PLAY &  PAUSE toggle timerState
  function toggleTimerState() {
    timerState = !timerState;
    console.log("in Toggle");
    if (timerState) {
      runSeshTimer();
    }
  }
  //********** dispaly minutes and seconds
  function displayMinSec() {
    minutes = Math.floor(timeLeft / 60);
    seconds = timeLeft - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  }

  //************ Alarm
  const alarm = new Audio();
  function myAlarm() {
    alarm.src = "https://goo.gl/65cBl1";
    alarm.play();
  }
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

  #break-length {
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

  #session-length {
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

  .display {
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;
    margin: 10px;
  }

  #time-left {
    font-size: 1.5rem;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px 22px 10px 27px;
    float: right;
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

        <h2 id="break-length">{breakLength} </h2>

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

      <h2 id="session-length">{sessionLength} </h2>

      <button id="session-decrement" on:click={decreaseSessionLength}>
        ➖
      </button>
    </div>
  </section>
  <!-- end session section -->

  <!-- Timer Section -->
  <section id="timer-section">
    <div class="display">

      <div id="timer-label">
        <h1>{timerType}</h1>
      </div>
      <div id="time-left"> {minutes} : {seconds} </div>
    </div>
    <div class="timer-buttons">
      <button id="start_stop" on:click={toggleTimerState}>⏯️</button>
      <button id="reset" on:click={timerReset}>🔄</button>

    </div>

  </section>

</div>
<!-- Audio tag -->
<audio id="beep" preload="auto">
  src="https://goo.gl/65cBl1" type="audio/mpeg" Your browser does not support
  the audio element.
</audio>
