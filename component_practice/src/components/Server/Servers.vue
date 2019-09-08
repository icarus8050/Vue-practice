<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                <div
                        @click="submitStatus(server.status)">
                    Server #{{ server.id }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from '../../main'

    export default {
        data: function () {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'}
                ]
            }
        },
        methods: {
            submitStatus(status) {
                eventBus.submitStatus(status)
            }
        }
    }
</script>

<style>

</style>
