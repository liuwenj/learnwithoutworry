<template>
    <div id="Detail_main">
        <!-- 头图 -->
        <div class="banner">
        </div>
        <!-- 保障详情 -->
        <div class="GuaranteeDetails">

            <div class="GuaranteeDetails_main">
                <div class="GuaranteeDetails_one">保障详情</div>
                <div class="GuaranteeDetails_old">
                    <a href="javascript:">*</a>(10周岁以下学员只可选购计划一)</div>
                <div style="display: flex;justify-content:space-between;">
                    <!-- <span class="GuaranteeDetails_main_btn ">计划一</span>
                    <span class="GuaranteeDetails_main_btn">计划二</span> -->
                    <span v-for="(item,index) in list" :class="{active:num==index}" @click="getNum(index)">{{item.tab}}</span>
                </div>
                <div class="GuaranteeDetails_main_img">
                    <img v-show="num == 0" src='../assets/plan1.png' alt="">
                    <img v-show="num == 1" src='../assets/plan2.png' alt="">
                    <!-- <img v-show="index == num" src='../assets/plan2.png' alt=""> -->
                </div>
                <!-- <div class="GuaranteeDetails_main_img_b"><img :src=plan_two_Url alt=""></div> -->
            </div>
        </div>
        <!-- 产品介绍 -->
        <div class="ProductIntroduction">
            <van-tabs @click="onClick" color="#2AB5CA" title-active-color="#2AB5CA" swipeable>
                <van-tab title="产品介绍" v-html="ProductIntroduction"></van-tab>
                <van-tab title="理赔指引" v-html="ClaimGuidelines"></van-tab>
                <van-tab title="常见问题" v-html="CommonProblem" style="font-size:0.3rem"></van-tab>

            </van-tabs>
        </div>

        <div id="productDetail_footer">
            <div class="footer_left">
                <span>￥</span>{{price}}/人
                <span>元起</span>
            </div>
            <div class="footer_right" @click="go()">{{next}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ProductIntroduction: "",
            ClaimGuidelines: "",
            CommonProblem: "",
            imgUrl: "../assets/banner.png",
            price: "6",
            next: "立即投保",
            num: 0,
            list: [
                { tab: "计划一", show: true },
                { tab: "计划二", show: false }
                // {tab:"选项三",show:false,title:"333333333333"}
            ],
            productUuid: "2c91edc46fae10bb016fae34f1850c74"
            // plan_one_Url:"../assets/plan1.png",
            // plan_two_Url:"../assets/plan2.png"
        };
    },
    created() {
        let id = this.$route.query.username;
        // console.log(this.aaa)
        let that = this;
        // console.log(that.aaa)

        that.$http
            .get("/getProductInfo?productUuid=" + this.productUuid)
            .then(function(res) {
                // console.log(res)
                that.ProductIntroduction = res.descriptioin.extendedField3;

                that.ClaimGuidelines = res.descriptioin.extendedField2;
                that.CommonProblem = res.descriptioin.extendedField4;
                // console.log(that.ProductIntroduction)
                // console.log(_this.ProductIntroductions)
                // this.ClaimGuidelines = res.descriptioin.descriptioin3
                // this.CommonProblem = res.descriptioin.descriptioin4
            });
    },
    methods: {
        showToast() {
            alert("1111");
        },
        // next(){
        //     this.$router.push({path:'insurancePlan',})
        // },
        onClick(name, title) {
            // this.$toast(title);
        },
        go() {
            this.$router.push({
                path: "insurancePlan",
                query: {
                    productUuid: this.productUuid
                }
            });
        },
        getNum(index) {
            this.num = index;
            //   console.log(this.num)
        },
          fun(){
            alert("监听到了");
        }
    },
    mounted() {
        if (window.history && window.history.pushState) {
            history.pushState(null, null, document.URL);
            window.addEventListener("popstate", this.fun, false); //false阻止默认事件
        }
    },
    destroyed(){
        window.removeEventListener('popstate', this.fun, false);//false阻止默认事件
    }
};
</script>
<style>
/* *{
    padding: 0;
    margin: 0;
} */
/* .ProductIntroduction .van-tabs .van-tabs__content{
    height: 3.23rem;
} */
/* .van-tab__pane, .van-tab__pane-wrapper p{
    padding-left: 0.45rem;
} */
.ProductIntroduction .van-tabs .van-tabs__content .van-tab__pane p {
    line-height: 0.45rem;
    /* padding-left: 0.3rem; */
    font-size: 0.26rem;
    padding-right: 0.3rem;
    padding-left: 0.45rem;
}

#Detail_main
    .ProductIntroduction
    .van-tabs--line
    .van-tabs__content
    .van-tab__pane
    .lipei-text
    p {
    /* line-height:30px !important; */
    font-size: 0.3rem !important;
    padding-left: 0.45rem;
}
#Detail_main
    .ProductIntroduction
    .van-tabs--line
    .van-tabs__content
    .van-tab__pane
    div
    img {
    width: 100%;
}
#Detail_main
    .ProductIntroduction
    .van-tabs--line
    .van-tabs__content
    .van-tab__pane
    .product-problem-box {
    line-height: 0.6rem;
    padding-top: 0.2rem;
    padding-left: 0.58rem;
    padding-right: 0.58rem;
}
#Detail_main
    .ProductIntroduction
    .van-tabs--line
    .van-tabs__content
    .van-tab__pane
    .product-problem-box
    .product-problem-block
    .problem-box-name {
    /* line-height:30px !important; */
    font-size: 0.36rem !important;
}
#Detail_main
    .ProductIntroduction
    .van-tabs--line
    .van-tabs__content
    .van-tab__pane
    .lipei-text
    p {
    line-height: 0.7rem !important;
    /* line-height: 0.7rem !important; */
    padding-left: 0.45rem;
}
#Detail_main
    .ProductIntroduction
    .van-tabs--line
    .van-tabs__content
    .van-tab__pane
    .product-problem-box
    .product-problem-block
    .problem-box-text {
    /* line-height:30px !important; */
    font-size: 0.3rem !important;
    line-height: 0.5rem !important;
    padding-left: 0;
}
.banner {
    /* background-color: #2AB5CA; */
    background: url("../assets/banner.png") no-repeat;
    height: 4.3rem;
    width: 100%;
    /* background-color: #2AB5CA; */
    background-size: 120%;
}
.GuaranteeDetails {
    height: 4.7rem;
    width: 100%;
    background-color: #ffffff;
    margin-bottom: 0.14rem;
    padding-top: 0.14rem;
}
.GuaranteeDetails .GuaranteeDetails_one {
    font-size: 0.36rem;
    font-weight: 600;
    display: block;
    /* margin-top: 0.3rem; */
    /* padding-left: 0.58rem; */
    /* padding-top: .14rem; */
}
.GuaranteeDetails .GuaranteeDetails_old {
    color: #666666;
    font-size: 0.2rem;
    /* font-weight:600; */
    display: block;
    margin-top: 0.12rem;
    margin-bottom: 0.12rem;
    /* padding-left: 0.58rem */
}
.GuaranteeDetails .GuaranteeDetails_old a {
    color: #e61a14;
    font-size: 0.2rem;
}
.GuaranteeDetails .GuaranteeDetails_main {
    width: 6.3rem;
    margin: 0 auto;
}
.GuaranteeDetails .GuaranteeDetails_main span {
    font-size: 0.36rem;
    border-radius: 0.08rem;
    background-color: #ffffff;
    /* color:#2AB5CA; */
    font-weight: 300;
    text-align: center;
    line-height: 1rem;
    width: 3rem;
    height: 1.03rem;
    border: 1px solid #bfbfbf;
}

.GuaranteeDetails .GuaranteeDetails_main .GuaranteeDetails_main_btn {
    font-size: 0.36rem;
    border-radius: 0.08rem;
    background-color: #ffffff;
    /* color:#2AB5CA; */
    font-weight: 300;
    text-align: center;
    line-height: 1rem;
    width: 3rem;
    height: 1.03rem;
    border: 1px solid #bfbfbf;
}
.GuaranteeDetails .GuaranteeDetails_main .active {
    font-size: 0.36rem;
    border-radius: 0.08rem;
    background-color: #2ab5ca;
    border: none;
    color: #ffffff;
    font-weight: 300;
    text-align: center;
    line-height: 1rem;
    width: 3rem;
    height: 1.03rem;
}
.GuaranteeDetails .GuaranteeDetails_main .GuaranteeDetails_main_img {
    width: 100%;
    height: 2rem;
    /* background: url(../assets/plan1.png) no-repeat; */
    /* background-size:100%; */
    margin-top: 0.23rem;
}
.GuaranteeDetails .GuaranteeDetails_main .GuaranteeDetails_main_img img {
    width: 100%;
    height: 100%;
}

.ProductIntroduction {
    font-size: 0.3rem;
    /* color: #2AB5CA */
}
.van-tab__pane,
.van-tab__pane-wrapper {
    /* height: 4.1rem; */
    margin-bottom: 1rem;
}
#productDetail_footer {
    width: 100%;
    height: 0.98rem;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0rem;
    text-align: center;
    line-height: 50px;
}
.footer_left {
    background-color: #ffffff;
    font-size: 0.36rem;
    color: #fe7c00;
    font-weight: 800;
    width: 3.4rem;
}
.footer_left span {
    background-color: #ffffff;
    font-size: 0.27rem;
    color: #fe7c00;
    font-weight: 600;
}
.footer_right {
    background-color: #2ab5ca;
    font-size: 0.36rem;
    color: #f4f4f4;
    width: 4.1rem;
}
</style>
