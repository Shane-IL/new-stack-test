<script>
    export let classExpansions;
</script>

<button class={`bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600 active:bg-red-700 font-bold ${classExpansions}`}>
    <slot></slot>
</button>