<template>
    <div id="content">
        <div class="banner-ld" ng-controller="clgkbanner">
            <img src="https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic10.jpg" width="100%">
        </div>
        <div class="ui" id="address"  >
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">村落选址</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">&nbsp;&nbsp;&nbsp;六汪镇位于中国山东省青岛市黄岛区（青岛西海岸新区）西北部，下设11个管区，共辖75个行政村，常住人口49137人<p/>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="ui" id="geju">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">村落格局</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </div>-->
       <!-- <div class="ui" id="build">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">建村智慧</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="environment">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">自然环境</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>
        <div class="ui" id="mingsheng">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">风景名胜</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">

                    </div>
                </div>
            </div>
        </div>-->
        <div class="ui" id="wenwu" >
            <div class="mainbox-ld"  ng-controller="clls" >
                <div class="title-ld">
                    <div class="title-1">村落发展</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">&nbsp;&nbsp;近年来，青岛西海岸新区铁山街道立足独特的自然禀赋，大力发展优势特色产业，打造四季旅游新常态，乡村振兴“六化”并举，实施“片区化规划、景区化建设、生态化提升、文旅化融合、产业化联动、党建化聚力”，逐步探索出乡村振兴齐鲁样板新路径。<p/>

                    </div>
                    <div class="block" style="margin-top: 3%">
                        <el-timeline>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>
                                        生态园区
                                    </h4>
                                    <p>六汪镇规划建设了祝兹、铁橛山、儒农家园三大田园综合体。通过将山、水、园、村融合为一体，依托“康养+农业+文旅”开发模式，实现了生产、生活、生态三“生”同步推行。  </p>
                                    </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>
                                        祝兹文化
                                    </h4>
                                    <p>
                                        祝兹侯国是2000多年前西海岸新区的政治、经济、文化中心,陶瓷文化底蕴深厚，陶瓷制作传承久远，悠久的历史积淀形成了如今厚重的祝兹文化。兹田园综合体以文化为引领，以农业为根本，以美丽乡村为支撑，实现农业、文旅、社区三位一体。农业主要包括万亩粮田、上上农业、常回家蔬菜、祝兹侯农业、供销集团现代农业示范园、沃林蓝莓、梦圆生态科技、益农食品等；文旅产业包括祝兹文化，塔桥美食，传统民俗，摄影采风等；田园村居方面，祝兹田园综合体有塔桥村、龙庵村、常家庄村等3个青岛市美丽乡村示范村，祝兹陌陶等特色民宿。
                                    </p>
                                   </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>
                                        农业产业
                                    </h4>
                                    <p>
                                        全镇田园秀美，万亩花果飘香。依托西海岸现代农业示范区直管区优势，重点打造了六汪镇万亩农业转型发展产业带，培育形成“花、果、林、茶、药、菜、肉、蛋”等8大特色农业集群。六汪镇推进品牌强农，不断提升产品质量，做大做强农业品牌。其中，悬泉茶荣获全国第七届中茶杯金奖，被选为“2018东亚海洋合作平台青岛论坛”指定用茶，琅琊鸡和鲜鸡蛋被选为“2018上合组织青岛峰会”、“2019年海军节”指定食材，胶河大白菜成功注册国家地理标志证明商标，塔桥全羊入选区非物质文化遗产，吾彩宝实蓝莓获2019年中国国际有机产品博览会年度美味奖，隆铭牛、胶河马铃薯等9个品牌入选优质农产品“瑯琊榜”，益农食品出口欧盟市场，农业品牌影响力不断提升。
                                    </p>
                                    </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>
                                        工业产业
                                    </h4>
                                    <p>
                                        按照“一核双翼”发展思路，六汪镇规划了六汪镇驻地和胶河经济区两个产业振兴集聚区片区，重点布局健康医养、医疗器材、农产品深加工、健康食品营销、机械加工等五大产业，带动全镇引进工业项目58个，总投资40亿元。2020年以来新建或投产项目14个，全部达产后年可实现产值15.8亿元、税收3000万元，可新增就业岗位1400个，每年带动群众增收6000万元，以产业振兴引领带动乡村振兴。
                                    </p>
                                    </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>
                                        医疗健康
                                    </h4>
                                    <p>
                                        六汪镇规划打造总面积3000亩的产业振兴集聚区，发展医疗器材、中医药生产等现代工业项目30余个，不断完善医疗健康产业链，构建集康复医疗、中医药种植、医药研发、中医养生、健康食品、休闲旅游等业务于一体的大健康全产业链。目前已引进工业项目20个，其中2020年以来新引进或在建投产项目14个，总投资15亿元，为财源增收和固定资产投资提供有力支撑。新项目全部达产后可提供1400个就业岗位，年可增加财政税收收入3000万元，带动群众增收6000万元。六汪镇通过布局“医、食、宿、游、康、养”六大健康产业，实现农业小镇向深度体验和健康养生的过渡。
                                    </p>
                                    </el-card>
                            </el-timeline-item>
                            <el-timeline-item  placement="top">
                                <el-card>
                                    <h4>党建化聚力 建强基层战斗新堡垒</h4>
                                    <p>杨家山里社区党委深入传承红色基因，全面深化拓展“莱西经验”，按照“党建核心引领、红色文化支撑、治理六共六联、区域统筹发展”的理念，打造“山里别样红”党建品牌，创新“六共六联”工作机制，构建“党建区域化、发展融合化、治理网格化、服务社会化”的区域化党建工作新格局。</p>
                                </el-card>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="ui" id="lishihuanjing">
            <div class="mainbox-ld"  ng-controller="clls">
                <div class="title-ld">
                    <div class="title-1">历史环境</div>
                </div>
                <div class="text-ld">
                    <div class="imgvideo">
                        <el-table
                                :data="tableData"
                                height="250"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="num"
                                    label="编号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="历史环境要素名称">
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </div>
        </div>-->
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
        name: "Huanjing",
        data() {
            return {
                tableData: [{
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }, {
                    num: '王小虎',
                    name: '上海市普陀区金沙江路 1518 弄'
                }]
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