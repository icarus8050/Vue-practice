<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <p v-myon:click="clicked" class="btn btn-primary">Click me!!</p>
                <hr>
                <span class="row">{{ count }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                count: 0
            }
        },
        directives: {
            myon: {
                bind(el, binding) {
                    el.addEventListener(binding.arg, binding.value);
                }
            }
        },
        methods: {
            clicked() {
                this.count++;
            }
        }
    }
</script>

<style>
</style>
