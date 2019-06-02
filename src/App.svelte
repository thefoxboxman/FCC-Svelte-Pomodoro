<script>
  let name = "Max";
  let age = 62;

  function increaseAge() {
    age += 1;
  }
</script>

<style>
  h1 {
    color: rgb(28, 114, 190);
    border: 2px solid black;
  }

  button {
    background-color: bisque;
  }
</style>

<h1>Hello {name}, your age is {age}!</h1>
<button on:click="{increaseAge}">Change age</button>
