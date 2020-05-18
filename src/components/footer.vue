<template>
    <div id="footer">
        <div class="footer_left"><span>￥</span>{{price}}</div>
        <div class="footer_right" @click="go()">{{next}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            price:60,
            next:"下一步"
        }
    },
    methods: {
        go(){
            this.$router.push({path:'insuranceInformation',})
        }
    },
}
</script>
<style>
    #footer{
        width: 100%;
        height: 0.98rem;
        margin-top: 5.1rem;
        margin-bottom: 0;
        display: flex;
        justify-content:space-between;
        /* position: fixed; */
        bottom: 0rem;
        text-align: center;
        line-height: 50px;

    }
    .footer_left{
        background-color: #ffffff;
        font-size: 0.36rem;
        color:#FE7C00;
        font-weight: 800;
        width: 3.4rem;
    }
    .footer_left span{
        background-color: #ffffff;
        font-size: 0.27rem;
        color:#FE7C00;
        font-weight: 600;
        
    }
    .footer_right{
        background-color: #2AB5CA;
        font-size: 0.36rem;
        color:#F4F4F4;
        width: 4.1rem;
    }
</style>
