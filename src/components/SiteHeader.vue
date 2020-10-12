<template>
    <div id="header" :style="{height : headerHeight}">
        <span id="title" :style="{lineHeight : headerHeight}">{{title}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            height : "75px"
        }
    },
    props: ['title','headerHeight']
}
</script>

<style scoped>
    #header {
        position: absolute;
        width: 100%;
        left: 0px;
        top: 0px;

        text-align: center;

        background: #00A7E1;
    }

    #title {
        font-weight: bold;
        font-size: 36px;

        color: #FFFFFF;
    }
</style>