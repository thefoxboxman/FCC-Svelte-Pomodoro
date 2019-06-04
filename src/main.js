import App from "./App.svelte";

const app = new App({
	target: document.querySelector('main'),
	props:{
		breakLength: 0.1,
sessionLength: 0.1,
timerType: "Session",
minutes: 0,
seconds: 6


	}
});

export default app;
