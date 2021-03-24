<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic11.jpg" width="100%" height="80%">
        </div>
        <div class="ui" id="history">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">建村历史</div>
                    </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">在山东省胶南市西北部。面积188平方千米。人口5.6万。镇人民政府驻六汪，人口2000。明洪武二年(1369年)樊可诚从云南迁来，在六个水汪(坑)附近立村，取名六汪。<p/>

                    </div>
                </div>
            </div>
        </div>
        <!--<div class="ui" id="renwu">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">历史事件</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <ul>
                            <div>
                                <span>　1月26日上午，六汪镇党委书记李海波同志主持召开中层以上领导干部会议，部署安排全镇新型冠状肺炎防控工作。镇长田明旭同志传达区防指工作会议精神，对防疫工作进行部署；
                                六汪镇构建起镇、管区、村三级防控网络，认真开展进出过武汉的人员排查工作，紧紧抓住防控、救治、舆论引导三个重点环节，细致科学地抓工作落实。全镇75个村居切实落实属地责任，守土有责，全力以赴抓好各项防控举措和应急准备，坚决打好打赢疫情防控这场“没有硝烟的战争”。
                                </span>
                                <el-divider></el-divider>
                                <span>
                                    自扫黑除恶专项斗争开展以来，六汪镇坚持“打早打小、露头就打”和“黑恶必除、除恶务尽”的原则，在辖区内持续发力，特别是在打击整治“市霸”“行霸”等方面，坚决清理黑恶势力滋生土壤，促使扫黑除恶专项斗争向纵深开展。全镇各部门实行联勤联动，
                                    将各种专业力量整合起来，共同投入到扫黑除恶专项行动中来。截至目前，
                                    六汪镇共发现并顺利处理了两起隐患事件，有效地维护了全镇社会治安的良好形势。
                                </span>
                                <el-divider></el-divider>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>-->
        <!--<div class="ui" id="shijian">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">历史事件</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>-->
        <div class="ui" id="people">
            <div class="mainbox-ld"  ng-controller="clls" style="height: 1000px ">
                <div class="title-ld">
                    <div class="title-1">视频集锦</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <iframe src="//player.bilibili.com/player.html?aid=798820905&bvid=BV1xy4y117mE&cid=288043772&page=1" style="width: 1000px;height: 600px" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="mainbox-ld bottominfo">
            <p class="crcn">版权所有：乡旅国际数字博物馆</p>
            <p class="cren">Copyright 2020 © All rights reserved by XCGJ.</p>
        </div>
        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name: "Lishi",

            }
        }

    }
</script>

<style scoped>
    @import "../../static/css/model.css";
    @import "../../static/css/main-new.css";
    .te{width:100%  !important; font-size:19px !important; margin-bottom:25px  !important; }
    .tw{width:100%  !important; font-size:18px !important; margin-bottom:25px !important;}
    td p{
        width: 100% !important;;
        font-size:18px !important;
        line-height:25px;
    }
    .txt_area{padding-left:30px !important;}
</style>