<template>
    <div id="insuranceInformation">
        <TechnologicalProcess></TechnologicalProcess>
        <p style="font-size: 0.28rem;color: rgb(42, 181, 202);padding-left: 0.27rem; margin-bottom: 0.15rem;margin-top: 0.15rem;">投保人（必填）</p>

        <div v-for="(item,index) in List" :key=index>
            <div class="insuranceInformation_main">
                <span>{{item.name}}</span>
                <input type="text" :placeholder='item.name' v-model="item.key" id="inputData" :name="inputVal" >

            </div>
        </div>

        <p style="#2AB5CA;font-size:0.28rem;color:#2AB5CA;padding-left:0.27rem;margin-top:0.15rem">研学路线（必填）</p>
        <div class="insuranceInformation_main" style="margin-top:0.15rem">
            <span>出发城市</span>
            <input type="text" placeholder="请选择出发城市" v-model="address" @click="showPopup" readonly="readonly">

        </div>
        <!-- <van-cell is-link  v-model="carmodel">选择需要显示的城市</van-cell> -->
        <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
            <van-area :area-list="areaList" :columns-num="2" ref="myArea" title="出发城市" @change="onChange" @confirm="onConfirm" @cancel="onCancel" value="110000" />
        </van-popup>
        <div class="insuranceInformation_main" style=" height: 1rem">
            <!-- <van-field v-model="message" rows="2" autosize label="留言" type="textarea" maxlength="50" placeholder="请输入留言" show-word-limit /> -->
            <!-- <van-field v-model="message" rows="2" autosize label="留言" type="textarea" maxlength="50" placeholder="请输入留言" show-word-limit /> -->
            <span style="">研学城市</span>
                <textarea rows="3" cols="10" style="width:3.8rem;font-size:0.27rem;border:none;text-align:left;padding-top: 0.3rem;" placeholder="请选择研学城市" v-model="datahistory" @click="showPopups" readonly="readonly">
            </textarea>

            <!-- <input type="text" placeholder="请选择研学城市"  readonly="readonly">  -->
        </div>
        <div class="insuranceInformation_mains">
            <div style="margin: 0 auto;width:90%;" class="btn_main"> 
                <div ref="span" v-for="(item, index) in datahistory" :key="index">
                    <span style="line-height:37px">{{item}} </span>
                    <span @click="deleteFn(item,index)" style="float: right; margin-left: 0.17rem;">x</span> 
                </div>
            </div>
        </div>
        <!-- <van-field v-model="message" rows="2" autosize label="留言" type="textarea" maxlength="50" placeholder="请输入留言" show-word-limit /> -->
        <van-popup v-model="showss" position="bottom" :style="{ height: '50%' }">
            <van-area :area-list="areaList"  value="110000" :columns-num="2" ref="myAreas" title="研学城市(可多选)" @change="onChanges" @confirm="onConfirms" @cancel="onCancels" />
        </van-popup>

        <p style="font-size:0.28rem;color:#2AB5CA;padding-left:0.27rem;margin-top:0.15rem">开票信息（必填）</p>

        <div class="InvoiceSelection" style="margin-top:0.15rem; display: flex;justify-content: space-between;">
            <span class="yesOrNo">是否需要开具发票</span>
            <van-radio-group v-model="radio" style="display: flex;justify-content: space-between;">
                <van-radio name="1">
                    是
                    <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" style="width:30%">
                </van-radio>
                <van-radio name="2">
                    否
                    <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" style="width:30%">
                </van-radio>
            </van-radio-group>
            <div></div>
        </div>

        <div v-if="radio == 1">
            <div class="InvoiceSelection" style="display: flex;justify-content: space-between;">
                <span class="yesOrNo">投保企业类型</span>
                <van-radio-group v-model="radio_a" style="display: flex;justify-content: space-between;">
                    <van-radio name="1">
                        <p style="width:145%">一般纳税人</p>
                        <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" style="width:30%">
                    </van-radio>
                    <van-radio name="2">

                        <p style="width:150%">小规模纳税人</p>

                        <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" style="width:30%">
                    </van-radio>
                </van-radio-group>
                <div></div>
            </div>
            <div class="InvoiceSelection" style="display: flex;justify-content: space-between;">
                <span class="yesOrNo">发票类型</span>
                <van-radio-group v-model="radio_b" style="display: flex;justify-content: space-between;">
                    <van-radio name="1">
                        <p style="width:145%">普票</p>
                        <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" style="width:30%">
                    </van-radio>
                    <van-radio name="2">

                        <p style="width:150%">专票</p>

                        <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" style="width:30%">
                    </van-radio>
                </van-radio-group>
                <div></div>
            </div>
            <div class="InvoiceSelection" style="display: flex;justify-content: space-between;">
                <span class="yesOrNo">发票形式</span>
               
                <van-radio-group v-model="radio_c" style="display: flex;justify-content: space-between;">
                    <van-radio name="1" disabled v-if ="radio_b == 2">
                        <p style="width:145%">电子发票</p>
                        <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" style="width:30%" >
                    </van-radio>
                    <van-radio name="1" v-if ="radio_b == 1">
                        <p style="width:145%">电子发票</p>
                        <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" style="width:30%" >
                    </van-radio>
                    <van-radio name="2">

                        <p style="width:150%">纸质发票</p>

                        <img slot="icon" slot-scope="props" :src="props.checked ? activeIcon : inactiveIcon" style="width:30%">
                    </van-radio>
                </van-radio-group>
                <div></div>
            </div>

        </div>

        <div class="ConfirmationOptions" style="height:0.7rem">
            <div class="ConfirmationOptions_main" style="display: flex;justify-content:space-between;">
                <van-checkbox v-model="checked" color="green"></van-checkbox>
                <span style="width: 82%;">我已阅读
                    <a @click="InstructionsForInsuranceShow = true">《投保须知》</a>
                    <!-- <a>《健康告知书》</a> -->
                    <a @click="InsuranceClausesShow = true">《保险条款》</a>
                </span>
            </div>
        </div>
        <van-popup v-model="InstructionsForInsuranceShow">投保须知</van-popup>
        <van-popup v-model="InsuranceClausesShow">保险条款</van-popup>

        <div id="insuranceInformation_footer">

            <div class="footer_left">
                <span class="money">￥</span>{{price}}</div>
            <button @click="gos()" :class="this.checked == true ? 'footer_right' : 'active'" :disabled="this.checked == true ? goBtn : 'disabled'">{{next}}</button>
            <!-- <div  >{{next}}</div> -->
        </div>
            <!-- <van-dialog v-model="show" title="标题" show-cancel-button> -->
               
            <!-- </van-dialog> -->

            <!-- <input type="text" placeholder="请选择研学城市" >       -->
            <van-overlay :show="shows" @click="show = false">
                <div class="wrapper" @click.stop>
                    <!-- <div v-if="saveStatus == 3">{{}}</div> -->
                    <!-- <div v-if="saveStatus == 4"></div> -->
                    <div class="block">

                        <div class="success" style=" margin-top: 0.3rem;" v-if="saveStatus == 1">
                            <p style="color: #333333;font-size: 0.3rem;text-align: center">确认信息</p>
                            <!-- <p></p> -->
                            <p>是否提交投保信息</p>
                            <div style="display:flex;justify-content: space-between">
                                <div class="wrapper_button" @click="shows = false">取消</div>
                                <div class="wrapper_button" @click="goTo()">确认</div>
                                
                            </div>

                        </div>
                        <div class="success" style="margin-top: 0.5rem;" v-if="saveStatus == 2">
                            <p style="color: #333333;font-size: 0.3rem;text-align: center">提交失败</p>

                            <p>请重新提交</p>
                            <div class="wrapper_button" style="margin-top:0.5rem" @click="shows= false">确认</div>
                        </div>
                    </div>
                </div>
            </van-overlay>
            <!-- <button @click="submid()">sdasd</button> -->

    </div>
</template>
<script>
import areaList from "../components/area";
import inactiveIcon from "@/assets/icon.png";
import activeIcon from "@/assets/icon_a.png";
import $ from "jquery";
export default {
    components: {
        TechnologicalProcess: require("../components/TechnologicalProcess.vue")
            .default
    },
    data() {
        return {
            datahistory:[],
            InstructionsForInsuranceShow: false,
            InsuranceClausesShow: false,
            inputVal: "",
            goBtn: false,
            saveStatus: "",
            shows: false,
            tbName: "",
            CreditCode: "",
            ContactName: "",
            phone: "",
            mail: "",
            address: "",
            learnCity: [],
            areaList,
            show: false,
            showss: false,
            carmodel: "",
            checked: false,
            phone: "",
            mail: "",
            phoneStatus: "",
            mailStatus: "",
            tbNameStatus: "",
            CreditCodeStatus: "",
            ContactNameStatus: "",
            phoneMsg: "请输入正确的手机号",
            mailMsg: "请输入正确的邮箱地址",
            tbNameMsg: "",
            CreditCodeMsg: "",
            ContactNameStatus: "",
            radio: "2",
            radio_a: "",
            radio_b: "",
            radio_c: "",
            activeIcon: activeIcon,
            inactiveIcon: inactiveIcon,
            price: "",
            next: "下一步",
            people_msg: [],
            address: "",
            orderTime: "",
            inputId: "",
            List: [],
            policyholderInfo: "",
            Citys: "",
            endDate: "",
            startDate: this.$route.query.startDate,
            dataLists:''
        };
    },
    created() {
        // console.log(this.inputVal);
        // console.log()
        this.startDate = this.$route.query.startDate;
        // console.log(this.$route.query.endDate)
        // console.log(this.$route.query.startDate)

        // this.orderTime = this.formatDate(
        //     new Date(new Date() - 24 * 3600 * 1000)
        // );
        // console.log(this.formatDate(new Date(new Date() - 24 * 3600 * 1000)))
        //    his.$route.query.totalPremium
        this.price = this.$route.query.totalPremium;
        // console.log(this.price)
        let that = this;
        this.$http
            .get("/getProductInfo?productUuid="+this.$route.query.productUuid)
            .then(function(res) {
                // console.log(res)
                // console.log(res);
                // that.people_msg = res.template.holderJosn
                let list = [];
                that.people_msg = res.template.holderJosn
                    .replace("\n", "")
                    .replace("\r", "")
                    .split(";");
                // console.log(that.people_msg)
                for (var attr in that.people_msg) {
                    let keyValue = {};
                    keyValue.name = that.people_msg[attr];
                    keyValue.key = "";
                    list.push(keyValue);
                }
                // console.log(list)
                that.List = list;
                // console.log(this.List)

                // console.log(list)
                // that.InstructionsForInsurance =
            });
        // console.log(this.radio)
    },
    methods: {

            deleteFn (item,index) {

                // this.$refs.span[index].remove()
                // console.log(item)
            //    this.$refs.span[index].value.remove()
                const _this=this;
                this.datahistory.splice(index, 1) 
                // console.log(_this.$refs.yspan[index])
                // console.log(_this.datahistory)
                    _this.learnCity=_this.datahistory
                    // alert(_this.learnCity)
              

            },




        //投保须知
        // submid(){
        //     let str = '{';
        //     let data = this.List;
        //     for(var attr in data){
        //         if(attr == data.length -1){
        //             str = str + '\"' +  data[attr].name + '\":\"' +  data[attr].key + '\"';
        //         } else {
        //             str = str + '\"' +  data[attr].name + '\":\"' +  data[attr].key + '\",';
        //         }
        //     }
        //     str = str + "}";
        //     console.log(str);
        //     var json = JSON.parse(str);
        //     console.log(json);
        //     this.policyholderInfo = json

        // },
        transformToJson(formData) {
            var obj = {};
            for (var i in formData) {
                /*[{"name":"user","value":"hpc"},{"name":"pwd","value":"123"},{"name":"sex","value":"M"},{"name":"age","value":"100"},{"name":"phone","value":"13011112222"},{"name":"email","value":"xxx@xxx.com"}]
                */
                //下标为的i的name做为json对象的key，下标为的i的value做为json对象的value
                obj[formData[i].name] = formData[i]["value"];
            }
            return obj;
        },
        InstructionsForInsurance() {
            // this.shows = true;
            // this.saveStatus = 3;
        },
        InsuranceClauses() {},
        formatDate(date) {
            var date = new Date(date);
            var YY = date.getFullYear() + "-";
            var MM =
                (date.getMonth() + 1 < 10
                    ? "0" + (date.getMonth() + 1)
                    : date.getMonth() + 1) + "-";
            var DD =
                date.getDate() < 10 ? "0" + date.getDate()+1 : date.getDate()+1;
            var hh =
                (date.getHours() < 10
                    ? "0" + date.getHours()
                    : date.getHours()) + ":";
            var mm =
                (date.getMinutes() < 10
                    ? "0" + date.getMinutes()
                    : date.getMinutes()) + ":";
            var ss =
                date.getSeconds() < 10
                    ? "0" + date.getSeconds()
                    : date.getSeconds();
            return YY + MM + DD + " " + hh + mm + ss;
        },

        //提交
        gos() {
         

            // this.shows = true;
            // this.saveStatus = 1
            // return false
                        
            
            this.goBtn = false;

            let str = "{";
            let datas = this.List;
            for (var attr in datas) {
                if (datas[attr].key.length == 0) {
                    this.$notify({
                        type: "danger",
                        message: "请填写完整信息",
                        duration: 2000
                    });
                    this.shows = false
                    //    this.$notify.fail('请填写完整信息');
                    return false;
                }
                if (attr == datas.length - 1) {
                    str =
                        str +
                        '"' +
                        datas[attr].name +
                        '":"' +
                        datas[attr].key +
                        '"';
                } else {
                    str =
                        str +
                        '"' +
                        datas[attr].name +
                        '":"' +
                        datas[attr].key +
                        '",';
                }
            }
            str = str + "}";

            // console.log(str);

            // var json = JSON.parse(str);

            // console.log(json);

            this.policyholderInfo = str;
            console.log(this.policyholderInfo)
            return false
            let dataList = {
                orderSource: "1",
                productUuid: this.$route.query.productUuid,
                insurancePeriod: this.$route.query.days,
                periodUnit: "天",
                startDate: this.$route.query.startTime,
                endDate: this.$route.query.endTime,
                insurancePlan: "1",
                planName: this.$route.query.planName,
                insuredPersons: this.$route.query.insuredPersons,
                totalPremium: this.$route.query.totalPremium,
                policyholderInfo: this.policyholderInfo,
                departureCity: this.address,
                researchCity: this.datahistory,
                invoices: this.radio,
                businessType: this.radio_a,
                invoiceForm: this.radio_c,
                invoiceType: this.radio_b,
                orderTime: this.orderTime
            };

            this.dataLists = { entity: JSON.stringify(dataList) };
            // console.log(this.dataLists)
            this.shows = true;
            this.saveStatus = 1;
            // console.log(data);

            if (this.address == "" || this.address == "请选择") {
                this.$notify({ type: "danger", message: "请填写出发城市" });
                this.shows = false
                
            } else if (this.learnCity == ""|| this.learnCity == "请选择") {
                this.$notify({ type: "danger", message: "请填写研学城市" });
                this.shows = false
            } else {
                this.orderTime = this.formatDate( new Date(new Date() - 24 * 3600 * 1000));
                this.shows = true
            //     // this.$toast.loading({
            //     //     message: "加载中...",
            //     //     forbidClick: true
            //     //     // duration:
            //     // });
                

            //     // this.$http.post("/toSaveInfo", data).then(res => {
            //     //     // console.log(res)
            //     //     if (res == "SUCCESS") {
            //     //         this.goBtn = true;

            //     //         this.shows = true;
            //     //         this.saveStatus = 1;
            //     //         this.$toast.clear();

            //     //         // this.shows = true
            //     //         // this.$router.push({ path: "sendMail" });
            //     //     } else {
            //     //         this.$notify({ type: "danger", message: res });
            //     //         return false;
            //     //         this.goBtn = true;

            //     //         // this.shows = true;

            //     //         // this.saveStatus = 2;
            //     //     }
            //     // });
            }
        },
        goTo() {
            this.$toast.loading({
                    message: "加载中...",
                  forbidClick: true
                //    duration:
                });
            this.$http.post("/toSaveInfo", this.dataLists).then(res => {
                    // console.log(res)
                    if (res == "SUCCESS") {
                        this.goBtn = true;
                        this.$toast.clear();
                        
                        this.$router.replace({ path: "sendMail" });

                        this.shows = true;
                        this.saveStatus = 1;

                        // this.shows = true
                        // this.$router.push({ path: "sendMail" });
                    } else {
                        this.$toast.clear();
                        
                        this.$notify({ type: "danger", message: res });
                        this.shows = false;

                        return false;
                        this.goBtn = true;


                        // this.saveStatus = 2;
                    }
                });
        },
        showPopup() {
            this.show = true;
        },
        showPopups() {
            this.showss = true;
        },
        //value=0改变省，1改变市，2改变区
        onChange(picker, index, value) {
            let val = picker.getValues();
            // console.log(val)//查看打印
            let areaName = "";
            for (var i = 0; i < val.length; i++) {
                areaName = areaName + (i == 0 ? "" : "/") + val[i].name;
            }
            this.carmodel = areaName;
        },
        //确定选择城市
        onConfirm(val) {
            // console.log(val[0].name + "," + val[1].name);
            this.address = val[1].name;
            this.show = false; //关闭弹框
        },
        //取消选中城市
        onCancel() {
            this.show = false;
            
            this.$refs.myArea.reset(); // 重置城市列表
        },

        onChanges(picker, index, value) {
            let val = picker.getValues();
            // console.log(val)//查看打印
            let areaName = "";
            for (var i = 0; i < val.length; i++) {
                areaName = areaName + (i == 0 ? "" : "/") + val[i].name;
            }
            this.carmodel = areaName;
        },
        //确定选择城市
        onConfirms(val) {
            // console.log(val[0].name + "," + val[1].name);
            // this.learnCity += val[1].name+","
            this.Citys = val[1].name + ",";
            console.log(this.Citys)

            let num = this.Citys.substr(0, this.Citys.length - 1).split(",").length -1;
            // console.log(num)
           
                this.learnCity = this.Citys.substr(0, this.Citys.length - 1);
                if(this.datahistory.length > 9){
                    this.$notify({
                    type: "danger",
                    message: "研学城市上限为10",
                    duration: 2000
                    });
                    return false
                }else{
                    this.datahistory.push(this.Citys.substr(0, this.Citys.length - 1));
                        
                }
                // console.log(JSON.stringify(this.datahistory).replace(/[]/g,''))
                // alert(this.datahistory)
                
            

            // console.log()
            this.showss = false; //关闭弹框
        },
        //取消选中城市
        onCancels() {
            this.showss = false;
            this.$refs.myAreas.reset(); // 重置城市列表
        },

        search(event) {
            // console.log(event.currentTarget.value)
            // console.log(event.currentTarget.name)
        },

        tbNameMethod(item, index) {
            let List = [];
            // var username = $('input[name="item]').val().replace(/(^\s*)|(\s*$)/g, "");
            List.item = $('input[name="item]').val();
            // console.log(List)

            console.log($("#formData").serialize());

            // this.List.push({itemList:$("input[name=item]").val()})

            // console.log()
            // console.log(item)
            // let itemList = item
            // let List = []
            // console.log(itemList)
            // console.log(this.List)
            // let that = this
            // console.log(this.List)
            // console.log(index)
            // this.inputId = index
            // console.log(this.inputId)

            // if(this.tbName.length == 0){
            //         this.tbNameStatus = 1;
            //         this.tbNameMsg = "投保人不能为空"
            // }else{
            //     this.tbNameStatus = 0;
            // }
        },
        CreditCodeMethod() {
            if (this.CreditCode.length == 0) {
                this.CreditCodeStatus = 1;
                this.CreditCodeMsg = "社会统一信用代码";
            } else {
                this.CreditCodeStatus = 0;
            }
        },
        ContactNameMethod() {
            if (this.ContactName.length == 0) {
                this.ContactNameStatus = 1;
                this.ContactNameMsg = "投保人不能为空";
            } else {
                this.ContactNameStatus = 0;
            }
        },
        phoneMethod() {
            let regPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if (this.phone.length == 0) {
                this.phoneStatus = 1;
                this.phoneMsg = "手机号不能为空";
            } else if (!regPhone.test(this.phone)) {
                this.phoneStatus = 1;
                this.phoneMsg = "手机号格式不正确";
            } else {
                this.phoneStatus = 0;
            }
        },
        mailMethod() {
            let regMail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (this.mail.length == 0) {
                this.mailStatus = 1;
                this.mailMsg = "邮箱不能为空";
            } else if (!regMail.test(this.mail)) {
                this.mailStatus = 1;
                this.mailMsg = "邮箱不正确";
            } else {
                this.mailStatus = 0;
            }
        },

        getFocus() {
            $("input").on("blur", function() {
                window.scroll(0, 0);
            });
        }
    },
    watch: {

        // datahistory:function(){
        //     if(this.datahistory.length > 10){
        //          this.$notify({
        //             type: "danger",
        //             message: "研学城市上限为10",
        //             duration: 2000
        //         });
        //     }
        //     // this.datahistory = this.learnCity.split(",")
        //     console.log(this.datahistory.length)
        // },

        radio: function() {
            if (this.radio == 2) {
                this.radio_a = '';
                this.radio_b = '';
                this.radio_c = '';
                // console.log(this.radio_a);
                // console.log(this.radio_b);
                // console.log(this.radio_c);
            } else if (this.radio == 1) {
                this.radio_a = "1";
                this.radio_b = "1";
                this.radio_c = "1";
                // console.log(this.radio_a);
                // console.log(this.radio_b);
                // console.log(this.radio_c);
            }
        },
 
        radio_b:function(){
            if(this.radio_b == 2){
                this.radio_c = '2'
                console.log(this.radio_c)
                // return false
            }
        },
        radio_c:function(){
            console.log(this.radio_c)
        }
    }
};
</script>
<style>
.van-popup--center {
    width: 80%;
    height: 70%;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.block {
    height: 2.5rem;
    width: 4.14rem;
    background-color: #fff;
    border-radius: 0.1rem;
}
.block .success .wrapper_button {
    background-color: #2ab5ca;
    width: 40%;
    height: 0.6rem;
    font-size: 0.28rem;
    /* background:rgba(42,181,202,1); */
    border-radius: 0.1rem;
    margin: 0rem auto;
    text-align: center;
    margin-top: 0.3rem;
    line-height: 0.6rem;
    color: #fff;
}

.block div p {
    color: #999999;
    font-size: 0.22rem;
    text-align: center;
    margin-top: 0.15rem;
}

.van-radio__icon--round {
    width: 50%;
}
.van-checkbox {
    margin-left: 0.2rem;
}
.van-checkbox__icon--checked .van-icon {
    color: #fff;
    background-color: #fe7c00;
    border-color: #fe7c00;
    /* size:50px; */
    /* margin-left: -0.2rem; */
}
#insuranceInformation .insuranceInformation_main {
    width: 100%;
    height: 1rem;
    background: rgba(255, 255, 255, 1);
    border-top: 1px solid #f3f3f3;
    display: flex;
    justify-content: space-between;
}
#insuranceInformation .insuranceInformation_mains {
    width: 100%;
    /* height: 1rem; */
    background: rgba(255, 255, 255, 1);
    border-top: 1px solid #f3f3f3;
    /* display: flex;
    justify-content: space-between; */
}
#insuranceInformation .insuranceInformation_mains .btn_main div{
    display: inline-block;
    /* width: 2rem;
    height: 0.8rem; */
    /* border: 1px solid ; */
    font-size: 0.28rem;
    border: 1px solid #2ab5ca;
    border-radius: 0.1rem;
    text-align: center;
    margin-bottom: 0.14rem;
    margin-right: 0.15rem;
    padding: 0.1rem 0.1rem;
}
.msg_detail {
    font-size: 0.3rem;
    color: #fe7c00;
    /* padding-left: 0.6rem; */
    line-height: 0.9rem;
}
.msg_detail div {
    width: 0.6rem;
    display: inline;
}
#insuranceInformation .Information_main {
    width: 100%;
    height: 1rem;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #f3f3f3;
}
#insuranceInformation .Information_main span {
    display: block;
    font-size: 0.3rem;
    margin-top: 0.33rem;
    margin-left: 0.27rem;
}
#insuranceInformation .insuranceInformation_main span {
    display: block;
    font-size: 0.3rem;
    margin-top: 0.33rem;
    margin-left: 0.27rem;
}
#insuranceInformation .insuranceInformation_main input {
    width: 3.5rem;
    height: 0.7rem;
    margin-right: 0.32rem;
    margin-top: 0.18rem;
    border: none;
    /* border: 1px solid #2AB5CA; */
    /* border-radius: 0.07rem; */
    font-size: 0.29rem;
    padding-left: 0.09rem;
    /* text-align: center */
}
#insuranceInformation
    .insuranceInformation_main
    input::-webkit-input-placeholder {
    color: #bcbcbc;
}
.van-radio__label {
    margin-top: 0;
    margin-left: -23px;
    margin-right: 26px;
}
.InvoiceSelection {
    width: 100%;
    height: 1rem;
    background: rgba(255, 255, 255, 1);
}
.van-radio-group {
    width: 60%;
}
.van-radio-grou .van-radio__label {
    width: 3rem;
}
.InvoiceSelection .yesOrNo {
    width: 40%;
    display: block;

    font-size: 0.3rem;
    margin-top: 0.33rem;
    margin-left: 0.27rem;
}
.InvoiceSelection span {
    display: block;
    font-size: 0.25rem;
    width: 3rem;
}
.van-radio-group {
    color: red;
}

.ConfirmationOptions .ConfirmationOptions_main {
    display: block;
    margin: 0.33rem auto;
    width: 88%;
    font-size: 0.24rem;
    margin-top: 0.33rem;
}
.ConfirmationOptions .ConfirmationOptions_main span a {
    color: #2ab5ca;
}
#insuranceInformation_footer {
    width: 100%;
    height: 0.98rem;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    bottom: 0rem;
    text-align: center;
    line-height: 50px;
}
.footer_left {
    background-color: #ffffff;
    font-size: 0.36rem;
    color: #fe7c00;
    font-weight: 600;
    width: 3.4rem;
}
.footer_left .money {
    background-color: #ffffff;
    font-size: 0.27rem;
    color: #fe7c00;
    font-weight: 800;
}
.footer_right {
    background-color: #2ab5ca;
    font-size: 0.36rem;
    color: #f4f4f4;
    width: 4.1rem;
    border: none;
}
.active {
    background-color: #f3f3f3;
    font-size: 0.36rem;
    color: black;
    width: 4.1rem;
    border: none;
}
</style>
