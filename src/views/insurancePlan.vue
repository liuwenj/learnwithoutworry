<template>
    <div id="insurancePlan">
        <TechnologicalProcess></TechnologicalProcess>
        <div class="insurancePlan_main">
            <span style="font-weight: bold;font-size:0.36rem;margin-top:0.25rem;">研学无忧-中国人寿财险</span>
            <img src="../assets/rsLogo.png" alt="" style="display: block;width: 27%;height: 80%;margin-right: 0.3rem;margin-top: 0.1rem;">
        </div>
        <div class="insurancePlan_main">
            <span>开始日期</span>
            <input type="text" :value="timeDate" @click="show = true" readonly="readonly">
        </div>

        <van-calendar v-model="show" @confirm="onConfirm" color="#2AB5CA" />
        <!-- <van-cell title="开始日期" :value="timeDate" @click="show = true" /> -->

        <div class="insurancePlan_main">
            <span>结束日期</span>
            <input type="text" :value="timeDate_a" @click="shows = true" readonly="readonly">

        </div>
        <!-- <van-cell title="结束日期" :value="timeDate_a" @click="shows = true" /> -->

        <van-calendar v-model="shows" @confirm="onConfirms" color="#2AB5CA" />

        <div class="insurancePlan_main">
            <span>日期区间</span>
            <span class="insurancePlan_main_a">{{days}}天</span>
            <!-- <input type="text" :value="days+'天'" disabled="disabled"> -->

        </div>
        <!-- <van-cell title="选择日期区间" :value="days+'天'" /> -->

        <!--<van-calendar v-model="show" type="range" @confirm="onConfirm" color="#2AB5CA" /> -->
        <div class="insurancePlan_mains">

            <!-- <span>保险期间</span>   -->

            <!-- <input type="text"  @focus="getFocus" > -->
            <!-- <select v-model="selecteds" class="active">
            　　<option>--请选择--</option>
            　　<option v-for="item in optList">{{ item }}</option>
        　　</select> -->

        </div>
                <div class="GuaranteeDetails_old"><a href="javascript:">*</a>(10周岁以下学员最高投保死亡伤残保险金额为20万元)</div>
        
        <div class="insurancePlan_main">
            <div>
                <span>保险计划</span>
            </div>
            
            
            <select v-model="selecteds" class="active">

                <!-- <option>--请选择--</option> -->

                <option v-for="item in optList_a">{{ item.name}}</option>
            </select>
            <!-- <input type="text" @focus="getFocus"> -->

        </div>
        <div class="insurancePlan_main">
            <span>产品单价</span>
            <span class="insurancePlan_main_a">{{onePrice}}元/人</span>
            <!-- <input type="number" v-model="onePrice" @blur="getFocus"> -->

        </div>

        <div class="insurancePlan_main">
            <span>参保人数</span>
            <input type="number" v-model="people_num" @blur="getFocus">

        </div>
        <div id="footer">
            <div class="footer_left">
                <span>￥</span>{{price}}</div>
            <div class="footer_right" @click="go()">{{next}}</div>
        </div>

    </div>
</template>
<script>
import $ from "jquery";

export default {
    components: {
        TechnologicalProcess: require("../components/TechnologicalProcess.vue")
            .default,
        Footer: require("../components/footer.vue").default
    },
    data() {
        return {
            onePrice:"6",
            timeDate: "请选择",
            timeDate_a: "请选择",
            people_num: "1",
            days: "1",
            selecteds: "60万(责任)+20万(意外)",
            price: "6",
            next: "下一步",
            // selecteds:"",
            show: false,
            shows: false,
            // optList:['1 天','2 天','3 天','4 天','5 天','6 天','7 天'],
            // optList_a:['60万(责任)+20万(意外)','90万(责任)+20万(意外)','120万(责任)+20万(意外)','60万(责任)+30万(意外)','90万(责任)+30万(意外)','120万(责任)+30万(意外)'],
            optList_a: [
                { name: "60万(责任)+20万(意外)", value: 1 },
                { name: "90万(责任)+20万(意外)", value: 2 },
                { name: "120万(责任)+20万(意外)", value: 3 },
                { name: "60万(责任)+30万(意外)", value: 4 },
                { name: "90万(责任)+30万(意外)", value: 5 },
                { name: "120万(责任)+30万(意外)", value: 6 }
            ],
            startTime: "",
            endTime: ""
        };
    },
    created() {
        // this.onePrice = this.getPrice(this.selecteds, this.days, 1)
        // console.log(this.onePrice)
        // this.timeDate_a = this.formatDate(new Date())
        // this.timeDate = this.formatDate(new Date())
        // console.log(this.formatDate(new Date()))
        // this.days = this.dateDiff(this.timeDate_a,this.timeDate)
        // console.log(this.days)
    },
    methods: {
        formatDates(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
        },
        onConfirm(date) {
            this.show = false;
            // console.log(this.formatDate(date));
            this.timeDate = this.formatDate(date);

            // console.log(this.timeDate);
        },
        onConfirms(date) {
            this.shows = false;
            // console.log(this.formatDate(date));
            this.timeDate_a = this.formatDate(date);
            // console.log(this.timeDate_a);
        },
        // formatDate(date) {
        //     return `${date.getMonth() + 1}/${date.getDate()}`;
        // },
        //格式化时间
        formatDate(date) {
            var myyear = date.getFullYear();
            var mymonth = date.getMonth() + 1;
            var myweekday = date.getDate();

            if (mymonth < 10) {
                mymonth = "0" + mymonth;
            }
            if (myweekday < 10) {
                myweekday = "0" + myweekday;
            }
            return myyear + "-" + mymonth + "-" + myweekday;
        },
        // 时间减
        dateDiff(firstDate, secondDate) {
            var firstDate = new Date(firstDate);
            var secondDate = new Date(secondDate);
            var diff = Math.abs(firstDate.getTime() - secondDate.getTime());
            var result = parseInt(diff / (1000 * 60 * 60 * 24));

            return result;
        },
        getDays(endTime, startTime) {
            this.days = this.dateDiff(endTime, startTime) + 1;
            if (endTime < startTime) {
                this.$notify({
                    type: "danger",
                    message: "结束时间不得早于开始时间",
                    duration: 2000
                });
                this.timeDate_a = "请选择";
                this.timeDate = "请选择";
            }
            if (this.days > 7) {
                this.$notify({
                    type: "danger",
                    message: "保险期间不超过7天，请重新选择时间",
                    duration: 2000
                });
                this.timeDate_a = "请选择";
                this.timeDate = "请选择";
            }
        },
        //获取当前时间结束时间
        // onConfirm(date) {
        //     const [start, end] = date;
        //     this.show = false;
        //     this.startTime = this.formatDate(start)
        //     this.endTime = this.formatDate(end)
        //     console.log()

        //     // this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        //     this.days = this.dateDiff(end, start) + 1;
        //     if (this.days > 7) {
        //         alert("日期不能超过七天");
        //         this.days = 1;
        //     }
        //     console.log(this.dateDiff(end, start));
        // },
        go() {
            if (this.timeDate == "请选择" || this.timeDate_a == "请选择") {
                this.$notify({
                    type: "danger",
                    message: "请填写日期",
                    duration: 2000
                });
                //    t
            } else if (this.people_num < 1) {
                this.$notify({
                    type: "danger",
                    message: "参保人数必须大于0",
                    duration: 2000
                });
            } else {
                this.$router.push({
                    path: "insuranceInformation",
                    query: {
                        days: this.days,
                        startTime: this.timeDate,
                        endTime: this.timeDate_a,
                        planName: this.selecteds,
                        insuredPersons: this.people_num,
                        totalPremium: this.price,
                        productUuid: this.$route.query.productUuid,
                        insurancePlan: this.$route.query.productUuid
                        // price:
                        // startDate:this.
                        // state: 6
                    }
                });
            }
            console.log(this.people_num);
            // this.$router.push({ path: "insuranceInformation" });
        },
        getFocus() {
            $("input").on("blur", function() {
                window.scroll(0, 0);
            });
        },
        getPrice(plans, days, nums) {
            // console.log(plans, days, nums);
            if (this.selecteds == "60万(责任)+20万(意外)" && this.days == 1) {
                this.price = 6 * nums;
            } else if (
                this.selecteds == "60万(责任)+20万(意外)" &&
                this.days == 2
            ) {
                this.price = 7 * nums;
            } else if (
                this.selecteds == "60万(责任)+20万(意外)" &&
                this.days == 3
            ) {
                this.price = 8 * nums;
            } else if (
                this.selecteds == "60万(责任)+20万(意外)" &&
                this.days == 4
            ) {
                this.price = 9 * nums;
            } else if (
                this.selecteds == "60万(责任)+20万(意外)" &&
                this.days == 5
            ) {
                this.price = 11 * nums;
            } else if (
                this.selecteds == "60万(责任)+20万(意外)" &&
                this.days == 6
            ) {
                this.price = 13 * nums;
            } else if (
                this.selecteds == "60万(责任)+20万(意外)" &&
                this.days == 7
            ) {
                this.price = 14 * nums;
            } else if (
                this.selecteds == "90万(责任)+20万(意外)" &&
                this.days == 1
            ) {
                this.price = 7 * nums;
            } else if (
                this.selecteds == "90万(责任)+20万(意外)" &&
                this.days == 2
            ) {
                this.price = 9.5 * nums;
            } else if (
                this.selecteds == "90万(责任)+20万(意外)" &&
                this.days == 3
            ) {
                this.price = 12 * nums;
            } else if (
                this.selecteds == "90万(责任)+20万(意外)" &&
                this.days == 4
            ) {
                this.price = 13.5 * nums;
            } else if (
                this.selecteds == "90万(责任)+20万(意外)" &&
                this.days == 5
            ) {
                this.price = 15 * nums;
            } else if (
                this.selecteds == "90万(责任)+20万(意外)" &&
                this.days == 6
            ) {
                this.price = 18 * nums;
            } else if (
                this.selecteds == "90万(责任)+20万(意外)" &&
                this.days == 7
            ) {
                this.price = 20 * nums;
            } else if (
                this.selecteds == "120万(责任)+20万(意外)" &&
                this.days == 1
            ) {
                this.price = 9 * nums;
            } else if (
                this.selecteds == "120万(责任)+20万(意外)" &&
                this.days == 2
            ) {
                this.price = 11.5 * nums;
            } else if (
                this.selecteds == "120万(责任)+20万(意外)" &&
                this.days == 3
            ) {
                this.price = 14 * nums;
            } else if (
                this.selecteds == "120万(责任)+20万(意外)" &&
                this.days == 4
            ) {
                this.price = 16.5 * nums;
            } else if (
                this.selecteds == "120万(责任)+20万(意外)" &&
                this.days == 5
            ) {
                this.price = 19 * nums;
            } else if (
                this.selecteds == "120万(责任)+20万(意外)" &&
                this.days == 6
            ) {
                this.price = 22 * nums;
            } else if (
                this.selecteds == "120万(责任)+20万(意外)" &&
                this.days == 7
            ) {
                this.price = 25 * nums;
            } else if (
                this.selecteds == "60万(责任)+30万(意外)" &&
                this.days == 1
            ) {
                this.price = 7 * nums;
            } else if (
                this.selecteds == "60万(责任)+30万(意外)" &&
                this.days == 2
            ) {
                this.price = 8 * nums;
            } else if (
                this.selecteds == "60万(责任)+30万(意外)" &&
                this.days == 3
            ) {
                this.price = 9 * nums;
            } else if (
                this.selecteds == "60万(责任)+30万(意外)" &&
                this.days == 4
            ) {
                this.price = 11 * nums;
            } else if (
                this.selecteds == "60万(责任)+30万(意外)" &&
                this.days == 5
            ) {
                this.price = 14 * nums;
            } else if (
                this.selecteds == "60万(责任)+30万(意外)" &&
                this.days == 6
            ) {
                this.price = 16 * nums;
            } else if (
                this.selecteds == "60万(责任)+30万(意外)" &&
                this.days == 7
            ) {
                this.price = 18 * nums;
            } else if (
                this.selecteds == "90万(责任)+30万(意外)" &&
                this.days == 1
            ) {
                this.price = 8 * nums;
            } else if (
                this.selecteds == "90万(责任)+30万(意外)" &&
                this.days == 2
            ) {
                this.price = 10.5 * nums;
            } else if (
                this.selecteds == "90万(责任)+30万(意外)" &&
                this.days == 3
            ) {
                this.price = 13 * nums;
            } else if (
                this.selecteds == "90万(责任)+30万(意外)" &&
                this.days == 4
            ) {
                this.price = 15.5 * nums;
            } else if (
                this.selecteds == "90万(责任)+30万(意外)" &&
                this.days == 5
            ) {
                this.price = 18 * nums;
            } else if (
                this.selecteds == "90万(责任)+30万(意外)" &&
                this.days == 6
            ) {
                this.price = 21 * nums;
            } else if (
                this.selecteds == "90万(责任)+30万(意外)" &&
                this.days == 7
            ) {
                this.price = 24 * nums;
            } else if (
                this.selecteds == "120万(责任)+30万(意外)" &&
                this.days == 1
            ) {
                this.price = 10 * nums;
            } else if (
                this.selecteds == "120万(责任)+30万(意外)" &&
                this.days == 2
            ) {
                this.price = 12.5 * nums;
            } else if (
                this.selecteds == "120万(责任)+30万(意外)" &&
                this.days == 3
            ) {
                this.price = 15 * nums;
            } else if (
                this.selecteds == "120万(责任)+30万(意外)" &&
                this.days == 4
            ) {
                this.price = 18.5 * nums;
            } else if (
                this.selecteds == "120万(责任)+30万(意外)" &&
                this.days == 5
            ) {
                this.price = 22 * nums;
            } else if (
                this.selecteds == "120万(责任)+30万(意外)" &&
                this.days == 6
            ) {
                this.price = 25 * nums;
            } else if (
                this.selecteds == "120万(责任)+30万(意外)" &&
                this.days == 7
            ) {
                this.price = 29 * nums;
            }
        },
        onePrices(){
            this.onePrice = this.price/this.people_num
        }
        
    },
    watch: {
        
        selecteds: function() {
            this.getPrice(this.selecteds, this.days, this.people_num);
            this.onePrices()
        },
        days: function() {
            this.getPrice(this.selecteds, this.days, this.people_num);
            this.onePrices()
            // console.log(this.onePrice)
            
        },
        people_num: function() {
            this.getPrice(this.selecteds, this.days, this.people_num);
            // this.onePrices()
            
            // this.onePrice = this.getPrice(this.selecteds, this.days, 1)
            
        },
        // priceChange:function(){
        //     this.onePrice = this.getPrice(this.selecteds, this.days, 1)
        //     // console.log(this.onePrice)
        //     // console.log(1111)
        // },
        dataTimeChange() {
            // if(this.timeDate_a < this.timeDate){
            //     // alert("1111")
            // }
            if (this.timeDate_a == "请选择" || this.timeDate == "请选择") {
                this.days = "1";
            } else {
                
                this.getDays(this.timeDate_a, this.timeDate);
           
            }
        }
     
    },
    computed: {
        dataTimeChange() {
            const { timeDate, timeDate_a } = this;
            return {
                timeDate,
                timeDate_a
            };
        },
        // priceChange:function(){
        //      const { selecteds, days } = this;
        //     return {
        //         selecteds,
        //         days
        //     };
        // }
    }
};
</script>
<style >
   .GuaranteeDetails_old{
         color: #666666;
         font-size: 0.2rem;
         /* font-weight:600; */
         display: block;
         margin-top: 0.12rem;
         margin-bottom: 0.12rem;
         margin-left: 0.3rem
         /* padding-left: 0.58rem */
    }
     .GuaranteeDetails_old a{
        color: #E61A14;
        font-size: 0.2rem;
    }   
.van-cell__title {
    padding-top: 0.58rem;
}

.van-cell__value span {
    margin-top: 0.38rem;
    display: inline-block;
    border: 1px solid;
    width: 2.28rem;
    display: block;
    margin-left: 1.1rem;
    height: 0.7rem;
    text-align: center;
    line-height: 0.6rem;
    color: #2ab5ca;
    /* margin-top: 0.38rem; */
}
.van-cell__value actives {
    border: 1px solid;
    width: 2.28rem;
    display: block;
    margin-left: 1.1rem;
    height: 0.7rem;
    text-align: center;
    line-height: 0.6rem;
    color: #2ab5ca;
}
#insurancePlan .insurancePlan_main {
    width: 100%;
    height: 1rem;
    background: rgba(255, 255, 255, 1);
    border-top: 1px solid #f3f3f3;
    display: flex;
    justify-content: space-between;
}
/* #insurancePlan .insurancePlan_mains{
        width:100%;
        height:1rem;
        background:rgba(255,255,255,1);
        border-top: 1px solid #f3f3f3;
        display: flex;
        justify-content:space-between
        
    } */
#insurancePlan .insurancePlan_main span {
    display: block;
    font-size: 0.3rem;
    margin-top: 0.33rem;
    margin-left: 0.27rem;
}
#insurancePlan .insurancePlan_main input {
    width: 3.8rem;
    height: 0.7rem;
    margin-right: 0.32rem;
    margin-top: 0.15rem;
    border: 1px solid #2ab5ca;
    border-radius: 0.07rem;
    font-size: 0.29rem;
    text-align: center;
    color: #2ab5ca;
}
#insurancePlan .insurancePlan_main .insurancePlan_main_a {
    width: 3.8rem;
    height: 0.7rem;
    margin-right: 0.32rem;
    margin-top: 0.15rem;
    border: 1px solid #2ab5ca;
    border-radius: 0.07rem;
    font-size: 0.29rem;
    text-align: center;
    color: #2ab5ca;
        line-height: 0.7rem;
}
#insurancePlan .insurancePlan_main select {
    width: 3.8rem;
    height: 0.7rem;
    margin-right: 0.32rem;
    margin-top: 0.15rem;
    border: 1px solid #2ab5ca;
    border-radius: 0.07rem;
    font-size: 0.29rem;
    text-align: center;
    text-align-last: center;
    color: #2ab5ca;
    font-size: 0.29rem;
}
#insurancePlan .insurancePlan_main select option {
    color: black;
}

#footer {
    width: 100%;
    height: 0.98rem;
    margin-top: 2rem;
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
