<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic15.jpg" width="100%">
        </div>
        <div class="ui" id="address">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">祝兹文化</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">&nbsp;&nbsp;
                            据史料记载，祝兹侯国是2000多年前西海岸新区的政治、经济、文化中心，西汉高后(吕雉)八年五月置，封吕侯昆弟吕荣为祝兹侯；汉武帝元封元年封胶东康王刘寄之子刘延年为祝兹侯。祝兹故国汉文化及古陶瓷文化底蕴深厚，陶瓷制作传承久远，悠久的历史积淀形成了如今厚重的祝兹文化。
                            目前，祝兹田园综合体位于六汪镇塔桥新村，核心启动区规划总面积10平方公里，分为祝兹文化核心区、塔桥美食文旅区、乡村记忆体验区和现代农业产业区。341国道、预留京沪二线贯穿其中，是田园旅游的首先之地。祝兹田园综合体以文化为引领，以农业为根本，以美丽乡村为支撑，实现农业、文旅、社区三位一体。农业主要包括万亩粮田、上上农业、常回家蔬菜、祝兹侯农业、供销集团现代农业示范园、沃林蓝莓、梦圆生态科技、益农食品等；文旅产业包括祝兹文化，塔桥美食，传统民俗，摄影采风等；田园村居方面，祝兹田园综合体有塔桥村、龙庵村、常家庄村等3个青岛市美丽乡村示范村，祝兹陌陶等特色民宿。
                        <p/>

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
        name: "Minsu"
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