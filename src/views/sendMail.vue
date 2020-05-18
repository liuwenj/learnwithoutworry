<template>
    <div id="sendMail">
        <TechnologicalProcess></TechnologicalProcess>

        <img src="../assets/information.png" alt="" class="information">
        <img src="../assets/BusinessLicense.png" alt="" class="BusinessLicense">
        <img src="../assets/TravelItinerary.png" alt="" class="BusinessLicense">
        <div class="behavior">
            <div class="behavior_main">
                <p>请将参保人员清单、营业执照、行程单</p>
                <p>以附件形式发送至邮箱</p>
                <p>邮件主题格式：公司名称+联系电话</p>
                <p>邮箱地址：yanxuebaoxian@163.com
                    <button class="tag-read" data-clipboard-text="yanxuebaoxian@163.com" @click="copy">点击复制</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Clipboard from "clipboard";
export default {
    components: {
        TechnologicalProcess: require("../components/TechnologicalProcess.vue")
            .default
    },
    data() {
        return {};
    },
    methods: {
        copy() {
            var clipboard = new Clipboard(".tag-read");
            clipboard.on("success", e => {
                 this.$notify({
                    // type: "danger",
                    message: "复制成功",
                    background: '#2ab5ca',

                    duration: 2000
                });// 释放内存
                clipboard.destroy();
            });
            clipboard.on("error", e => {
                // 不支持复制
                console.log("该浏览器不支持自动复制"); // 释放内存
                clipboard.destroy();
            });
        },
        forbidBack () {
            // window.location = 'http://www.baidu.com';          
            window.history.pushState('forward', null, '#');
            window.history.forward(1);
        },
          fun(){
            window.location.href="https://wkt.yanxuetoutiao.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile"
        }
    },
    // mounted () {
    //     // 监听手机物理返回键时禁止返回之前的路由
    //     if (window.history && window.history.pushState) {
    //         window.addEventListener('popstate', this.forbidBack, false);
            
    //         this.forbidBack()
            
    //     }
    // },
    // destoryed () {
    //     // 离开页面时销毁监听
    //     window.removeEventListener('popstate', this.forbidBack, false);

    // }
    mounted(){
  if (window.history && window.history.pushState) {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', this.fun, false);//false阻止默认事件
  }
},

    destroyed(){
  window.removeEventListener('popstate', this.fun, false);//false阻止默认事件
},
};
</script>


<style lang="less">
.tag-read {
    border: none;
    background-color: #2ab5ca;
    display: inline-block;
    margin-left: 0.1rem;
    border-radius: 0.1rem;
    width: 1.2rem;
    height: 0.5rem;
    /* margin-top: 0px; */
    line-height: 0.5rem;
    text-align: center;
    color: white;
}

#sendMail {
    // background-color: #ffffff;
    height: 100%;
    width: 100%;
}
.information {
    display: block;
    width: 4.14rem;
    height: 2.56rem;
    // background: url("../assets/information.png") no-repeat;
    // background-size: 100%;
    margin: 0.55rem auto 0 auto;
}

.BusinessLicense {
    display: block;
    width: 4.14rem;
    height: 2.56rem;
    // background: url("../assets/BusinessLicense.png") no-repeat;
    // background-size: 100%;
    margin: 0.55rem auto 0.55rem auto;
    // margin:0.3rem 1.68rem 3.62rem 1.66rem
}
.behavior {
    width: 100%;
    height: 3rem;
    background-color: white;
    // margin-top: 1rem;
}
.behavior_main {
    width: 92%;
    display: inline-block;
    margin: 0rem 0rem 0.31rem 0.6rem;
}
.behavior_main p:nth-child(1) {
    font-size: 0.26rem;
    font-weight: bold;
}
.behavior_main p:nth-child(2) {
    font-size: 0.26rem;
    font-weight: bold;
}
.behavior_main p {
    font-size: 0.24rem;
    margin-top: 0.25rem;

    // font-weight:bold;
}
</style>