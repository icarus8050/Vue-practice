<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <app-name v-model="fullName"></app-name>
                    <div class="form-group">
                        <label>Mail</label>
                        <input
                                type="text"
                                class="form-control"
                                v-model="mail">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input
                                type="password"
                                v-model="password">
                    </div>
                    <div class="form-group">
                        <label>
                            <input
                                    type="radio"
                                    value="true"
                                    v-model="isStore"> Yes
                        </label>
                        <label>
                            <input
                                    type="radio"
                                    value="false"
                                    v-model="isStore"> No
                        </label>
                    </div>
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ isStore }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NameComponent from "./NameComponent.vue";

    export default {
        data() {
            return {
                fullName: 'a b',
                mail: '',
                password: '',
                isStore: false,
                isSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
        components: {
            appName: NameComponent
        }
    }
</script>

<style>
</style>
