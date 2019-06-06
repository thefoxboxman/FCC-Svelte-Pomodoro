import App from "./App.svelte";

const app = new App({
	target: document.querySelector("main"),
	props: {
		breakLength: 5,
		sessionLength: 25,
		timerType: "Session",
		timerState: false,
		timeLeft: 0,
		counter: 0
	}
});

export default app;
