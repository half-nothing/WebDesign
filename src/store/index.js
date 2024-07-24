import {defineStore} from "pinia";

export const useMainStore = defineStore("MainStore", {
    state: () => {
        return {
            nowPage: 0
        }
    },
    actions: {
        updatePage(page) {
            this.nowPage = page;
        }
    }
});