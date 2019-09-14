export const textMixin = {
    data() {
        return {
            text: ''
        }
    },
    computed: {
        textLength() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
};