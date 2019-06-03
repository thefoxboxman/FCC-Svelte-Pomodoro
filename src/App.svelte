<script>
  let breakLength = 5;
  let sessionLength = 25;
  function increaseBreakLength() {
    breakLength += 1;
  }
  function decreaseBreakLength() {
    breakLength -= 1;
  }

  function increaseSessionLength() {
    sessionLength += 1;
  }
  function decreaseSessionLength() {
    sessionLength -= 1;
  }
</script>

<style>

.title{
	color:tomato;
	text-align: center;
}

.top-display-container{

display: grid;
  grid-template-columns: 1fr ;
	grid-template-rows: repeat(3, 300px);
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
	align-items: center;
   justify-items: center;

}
  /* Break CSS */

	#break-section{
display: flex;
flex-direction: column;
align-items: center;
   justify-items: center;
	 border: 1px solid black;
	 min-width: 220px;

	}

  

  #break-label {
    color: purple;
  }

  #break-increment {
    font-size: 1.5rem;
    max-width: 4rem;
    border: 2px green solid;
    background: gainsboro;
    padding: 0.75rem 1rem 0 1rem;
  }

  .break-length-display {
    color: green;
    font-size: 2rem;
    border: 2px green solid;
    background: gainsboro;
    padding: 0 1rem;
    max-width: 1.5rem;
  }
  #break-decrement {
    font-size: 1.5rem;
    max-width: 4rem;
    border: 2px green solid;
    background: gainsboro;
    padding: 0.75rem 1rem 0 1rem;
  }

  /* Session CSS */
  #session-section {
		display: flex;
flex-direction: column;
align-items: center;
   justify-items: center;
    border: 1px solid black;
		min-width: 220px;
    
  }

  #session-label {
    color: purple;
  }

  #session-increment {
    font-size: 1.5rem;
    max-width: 4rem;
    border: 2px green solid;
    background: gainsboro;
    padding: 0.75rem 1rem 0 1rem;
  }

  .session-length-display {
    color: green;
    font-size: 2rem;
    border: 2px green solid;
    background: gainsboro;
    padding: 0 1rem;
    max-width: 1.5rem;
  }
  #session-decrement {
    font-size: 1.5rem;
    max-width: 4rem;
    border: 2px green solid;
    background: gainsboro;
    padding: 0.75rem 1rem 0 1rem;
  }
</style>

<h1 class="title">Pomodoro Clock</h1>

<div class="top-display-container">
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
    <button id="session-increment" on:click={increaseSessionLength}>➕</button>

    <h2 class="session-length-display">{sessionLength} </h2>

    <button id="session-decrement" on:click={decreaseSessionLength}>➖</button>
  </div>
</section>
<!-- end session section -->
</div>