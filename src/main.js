import App from "./App.svelte";

const app = new App({
	target: document.querySelector("main"),
	props: {
		breakLength: 5,
		sessionLength: 25,
		timerType: "Session",
		timeLeft: 0
	}
});

export default app;
