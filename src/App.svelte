<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Tailwind from './Tailwind.svelte';
  import Home from "./Components/Home.svelte";

  function handleCardClick(item) {
    console.log(item);
  }
</script>

<Tailwind />

<main class="text-center p-4 mx-0 font-sans">
  <Home onCardClick={handleCardClick}/>
</main>
