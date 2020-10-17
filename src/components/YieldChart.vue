<template>
    <div class="tile is-parent">
        <div class="tile is-6 is-child is-flex yield-tile">
                <div class="yield">
                    <span style="font-size: 3rem">Yield:</span><br>
                    <span class="has-text-weight-bold" style="font-size: 4.5rem">7.56%</span>
                </div>
        </div>
        <div class="tile is-6 is-child is-flex yield-tile">
                <div class="yield">
                    <span style="font-size: 3rem">Value:</span><br>
                    <span class="has-text-weight-bold" style="font-size: 4.5rem">$23575.45</span>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .yield-tile {
        align-items: center;
        height: 100%;
        color: #00171F;
    }

    .yield {
        width: 100%;
        text-align: center;
    }
</style>