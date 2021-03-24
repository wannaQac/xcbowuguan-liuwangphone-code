<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic16.jpg" width="100%">
        </div>
        <div class="ui" id="address">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">美食物产</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <el-row>
                            <el-col :span="12">
                                <p class="te ng-binding" ng-bind-html="cltd|to_trusted">悬泉茶 :传说，清朝末年的时候，有几个崂山道士听说铁橛山上有悬泉，而悬泉之下有棵茶树。因此茶树常年被悬泉之水滋润，采摘的茶叶泡水不仅能明目清心，而且还能解渴消食。他们
                                    ,抬着杀好的一头驴上了山,几个人围着锅吃肉喝茶，一边吃着一边喝着，从天亮到天黑，一直吃到山下鸡叫之时，一头整驴已经吃光了。可是他们的肚子却依然觉得空空如也。老道拍拍肚子。吧嗒吧嗒嘴，连连夸赞说，好茶好茶！<p/>
                                <p class="te ng-binding" ng-bind-html="cltd|to_trusted">胶河马铃薯 ：目前，胶河土豆已成为六汪镇种植面积最广的农作物之一，六汪镇土豆生产面积达12000亩，辐射农户5400户，年生产马铃薯2.4万吨，销售收入实现3600万元<p/>
                                <p class="te ng-binding" ng-bind-html="cltd|to_trusted">琅琊鸡 ：
                                    琅琊鸡位列岛城畜禽四宝之首。而今，琅琊鸡成为青岛市都市现代农业的靓丽名片，与胶州里岔黑猪、豁眼鹅、崂山奶山羊一并享誉“畜禽四宝”。<p/>
                            </el-col>
                            <el-col :span="10" style="margin-left: 5%">
                                <div>
                                    <el-carousel>
                                        <el-carousel-item v-for="(item,i) in address" :key="i">
                                            <img :src="item.addre" style="width: 100%;height: 300px">
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                            </el-col>
                        </el-row>
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
        name: "Meishi",
        data(){
            return{
                address:[
                    {addre: 'https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic19.jpg'},
                    {addre: 'https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic20.jpg'},
                    {addre: 'https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic21.jpg'},
                    {addre: 'https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic22.jpg'},
                    {addre: 'https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic23.jpg'}
                ]
            }
        }
    }
</script>

<style scoped>

    .te{width:100%  !important; font-size:19px !important; margin-bottom:25px  !important; }
    .tw{width:100%  !important; font-size:18px !important; margin-bottom:25px !important;}
    td p{
        width: 100% !important;;
        font-size:18px !important;
        line-height:25px;
    }
    .txt_area{padding-left:30px !important;}
</style>