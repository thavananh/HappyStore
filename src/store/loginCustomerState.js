import { defineStore } from 'pinia';

export const useAppState = defineStore('appState', {
    state: () => ({
        Username: undefined,
    }),
    actions: {
        setUsername(value) {
            this.Username = value;
        }
    }
});
