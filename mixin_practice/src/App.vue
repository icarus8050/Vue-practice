<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <label>
                    <input type="text" v-model="text">
                </label>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>Exercise 1</p>
                <div>{{ text | reverse }}</div>
                <hr>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>Exercise 2</p>
                <div>{{ text | calculateLength }}</div>
                <hr>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>Exercise 3</p>
                <div>{{ reverseFilter }}</div>
                <div>{{ lengthFilter }}</div>
                <hr>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>Exercise 4</p>
                <div>{{ textLength }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { textMixin } from "./TextMixin";

    export default {
        mixins: [textMixin],
        filters: {
            reverse(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reverseFilter() {
                return this.text.split("").reverse().join("");
            },
            lengthFilter() {
                return this.text + ' (' + this.text.length + ')';
            }
        }
    }
</script>

<style>
</style>
