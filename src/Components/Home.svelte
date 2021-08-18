<script>
    import {onMount} from 'svelte';

    import Button from "./Button.svelte";
    import ItemsGrid from "./ItemsGrid.svelte";
    import RocketInfo from "./RocketInfo.svelte";

    export let onCardClick;

    let itemsData = [];

    onMount(async () => {
        itemsData = Object.values(await getSpaceXData());
    })

    async function getSpaceXData() {
        const data = await fetch("https://api.spacexdata.com/v4/rockets/");
        return await data.json();
    }

</script>

<header>
    <div>Welcome to the</div>
    <div class="font-bold text-4xl">Svelte + Vite + Tailwind</div>
    <div class="text-xl">Test App</div>

    <Button classExpansions={"my-4"}>Click Me!</Button>

    <ItemsGrid {onCardClick} items={itemsData} />
</header>
