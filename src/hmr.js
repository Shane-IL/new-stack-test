// Customized HMR-safe stores
// Based off https://github.com/svitejs/svite/blob/ddec6b9/packages/playground/hmr/src/stores/hmr-stores.js
import { writable } from 'svelte/store';
import { count } from './lib/stores';

let stores = {};

export function registerStore(id, store) {
    stores[id] = store;
}

registerStore('count', count);

// preserve the store across HMR updates
if (import.meta.hot) {
    if (import.meta.hot.data.stores) {
        stores = import.meta.hot.data.stores
    }
    import.meta.hot.accept()
    import.meta.hot.dispose(() => {
        import.meta.hot.data.stores = stores
    })
}