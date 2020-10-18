<template>
    <div class="tile is-parent">
        <div class="tile is-6 is-child is-flex is-flex-direction-column is-justify-content-center">
            <div class="content">
                <span style="font-size: 2rem">Yield:</span><br>
                <span class="has-text-weight-bold" style="font-size: 3.5rem">7.56%</span>
            </div>
            <div class="content">
                <span style="font-size: 2rem">Yield on cost:</span><br>
                <span class="has-text-weight-bold" style="font-size: 3.5rem">12.34%</span>
            </div>
        </div>
        <div class="tile is-6 is-child is-flex is-flex-direction-column is-justify-content-center"
            style="border-left: 1px solid #003459;">
            <div class="content">
                <span style="font-size: 1.5rem">Portfolio value:</span><br>
                <span class="has-text-weight-bold" style="font-size: 2rem">$23,575.45</span>
            </div>
            <div class="content">
                <span style="font-size: 1.5rem">Initial cost:</span><br>
                <span class="has-text-weight-bold" style="font-size: 2rem">$23,575.45</span>
            </div>
            <div class="content">
                <span style="font-size: 1.5rem">Cash:</span><br>
                <span class="has-text-weight-bold" style="font-size: 2rem">$0.00</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    * {
        color: #00171F;
    }

    .content {
        width: 100%;
        text-align: center;
        margin: 0 !important;
    }
</style>