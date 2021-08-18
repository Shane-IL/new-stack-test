<script>
    import ItemCard from "./ItemCard.svelte";

    export let items = [];
    export let onCardClick;
</script>

<div>
    Items:
    <div class="grid grid-cols-3 gap-4 w-7/12 m-auto relative place-items-center pt-6">
        {#each items as item}
            <ItemCard {onCardClick} {item}/>
        {/each}
    </div>
</div>