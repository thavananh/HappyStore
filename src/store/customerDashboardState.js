import { defineStore } from 'pinia';

export const customerDashboardState = defineStore('appState', {
    state: () => ({
        CustomerType: undefined,
    }),
    actions: {
        setCustomerType(value) {
            this.CustomerType = value;
        }
    }
});
