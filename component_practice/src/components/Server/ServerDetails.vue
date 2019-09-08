<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ serverStatus }}</p>
    </div>

</template>

<script>
    import {eventBus} from '../../main'

    export default {
        props: {
            serverStatus: String
        },
        created() {
            eventBus.$on('serverStatus', (status) => {
                this.serverStatus = status;
            });
        }
    }
</script>

<style>

</style>
