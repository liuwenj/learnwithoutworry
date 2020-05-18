<template>
    <div id="TechnologicalProcess" >

      <div id="TechnologicalProcess_main">
            <div>
                <!-- <span v-if="status==0"><img src="../assets/select.png" alt=""></span> -->
                <span v-if="status==1 || status==2 || status==3"><img src="../assets/select_a.png" alt="" style="height:0.8rem"></span>
                <!-- <span class="text">选择投保计划</span> -->
                <span v-if="status==1 || status==2 || status==3" class="text_a">选择投保计划</span>
            </div>

            <div>
                <span v-if="status==1"><img src="../assets/Arrow.png" alt=""  class="Arrow"></span>
                <span v-if="status==2 ||status==3"><img src="../assets/Arrow_a.png" alt="" class="Arrow"></span>
            </div>
            <div>
                <span v-if="status==1" ><img src="../assets/write.png" alt=""></span>
        
                <span v-if="status==2 ||status==3"><img src="../assets/write_a.png" alt=""></span>
                <span v-if="status==1" class="text" style="margin-top: 0.4rem;">填写投保信息</span>
                <span v-if="status==2 ||status==3" class="text_a" style="margin-top: 0.4rem;">填写投保信息</span>
            </div>
            <div>
                <span v-if="status==1 || status==2"><img src="../assets/Arrow.png" alt="" class="Arrow"></span>
                <span v-if="status==3"><img src="../assets/Arrow_a.png" alt="" class="Arrow"></span>
            </div>
            <div>
               
                <span v-if="status==1 || status==2" ><img src="../assets/send.png" alt=""  style="height:0.63rem"></span>
                <span v-if="status==3" ><img src="../assets/send_a.png" alt=""  style="height:0.63rem"></span>
                <span v-if="status==1 || status==2" class="text" style="margin-top: 0.47rem;">发送邮件</span>
                <span v-if="status==3" class="text_a" style="margin-top: 0.47rem;">发送邮件</span>
            </div>

      </div>  

    </div>
</template>
<script>
export default {
    data(){
        return{
            status:1
        }
    },
    created() {
        switch (this.$route.path) {
            case  "/insurancePlan":
                this.status = 1
                break;
            case  "/insuranceInformation":
                this.status = 2
                break;
            case  "/sendMail":
                this.status = 3
                break;
          
        }
    },
    
}
</script>
<style>
    #TechnologicalProcess{
        width: 100%;
        height: 2.7rem;
        background-color: white;
         display:inline-block
    }
    #TechnologicalProcess_main{
        display: flex;
        justify-content:space-between;
        width: 85%;
        height: 50%;
        /* background-color: red; */
        margin: 0.6rem auto;
       
    }
    #TechnologicalProcess_main div span{
        display: block;

        /* display:flex; */
        /* flex-direction:column; */
    }
    #TechnologicalProcess_main div span img{
        display: block;
    margin: 0.1rem auto;
    width: 0.8rem;
    height: 0.7rem;
    }
   
     #TechnologicalProcess_main div span .Arrow{
        margin-top: 0.4rem;
        width: 0.52rem;
        height: 0.17rem;
        margin-right: 0.15rem;
    }
    
    #TechnologicalProcess_main div .text{
       font-size: 0.3rem;
       margin-top: 0.3rem;
       width: 125%;
       
    }
    #TechnologicalProcess_main div .text_a{
       font-size: 0.3rem;
       width: 125%;
       color: #2AB5CA;
       margin-top: 0.3rem;

    }

   

    
</style>