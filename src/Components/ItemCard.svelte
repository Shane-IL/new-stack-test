<script>
    export let item;
    export let onCardClick;

    function handleCardClick(item) {
        onCardClick(item);
    }
</script>

<div on:click={() => handleCardClick(item)} id="item-{item.id}" class="w-48 h-60 grid grid-rows-4 center bg-blue-300 text-white rounded-lg relative cursor-pointer">
    <div class="font-bold row-span-1">{item.name}</div>
    {#if item.flickr_images?.length > 0}
        <img alt="Image of {item.name}" class="w-5/6 m-auto row-span-3" src={item.flickr_images[0]}/>
    {/if}
</div>