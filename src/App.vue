<template>
    <div id="app">
        <div style="width: 80%">
            <vue-loop-marquee :options="option"></vue-loop-marquee>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components:{

        },
        data() {
            return {
                option:{
                    bgColor:'#f60',
                }
            }
        },
        mounted() {

        },
        methods: {
        }
    }
</script>

<style>

</style>
