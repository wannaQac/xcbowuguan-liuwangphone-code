<template>
    <div>
        <div id="cunluo_index" style="margin-top: -215px;">
            <div class="sub_tit ng-binding">青岛西海岸新区</div>
            <div class="main_tit ng-binding" style="height: 430px;">六汪镇</div>
            <!--<div class="open_icon" onclick="showDiscript();" style="opacity: 1; display: none;"></div>-->
            <div class="descript" style="left: 0%;">
                <div class="cont">
                    <div class="txt_area ">
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">&nbsp;&nbsp;&nbsp;在山东省胶南市西北部。面积188平方千米。人口5.6万。镇人民政府驻六汪，人口2000。明洪武二年(1369年)樊可诚从云南迁来，在六个水汪(坑)附近立村，取名六汪。1949年属胶河县丰台区，后改五区。1953年改十五区，后复丰台区。1958年改六汪乡，后改公社。1984年改镇。2001年胶河镇并入。产小麦、玉米、大豆、甘薯、花生。
                            盛产胶州大白菜。有机械、粮食加工、木器、减速机、石灰、榨油、印刷、铸造、服装、建材等厂。泰薛公路经此。古迹有汉祝兹侯国遗址。<p/>
                        <p class="te ng-binding" ng-bind-html="cltd|to_trusted">    <br>近年来，六汪镇重点打造“医”、“食”、“宿”、“游”、“康”、“养”等6大产业，促进一二三产融合发展。以“健康小镇、锦绣六汪”为目标，坚持以业为根基，着力推进产业振兴集聚区和田园综合体建设。
                            六汪镇位于青岛西海岸新区西北部，西接诸城市、北靠胶州市，是西海岸新区的门户重镇。341国道、215省道贯穿镇境，距青岛西客站仅15分钟车程，距前湾港码头35公里、青岛胶东国际机场50公里，区位优势显著，发展前景十分广阔。 <br/><p/>


                        <!--<table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                            <tr>
                                <td valign="top"><p class="ng-binding">现有居民：982户3017人</p>
                                  &lt;!&ndash;  <p class="ng-binding">耕地面积：9.53平方公里</p>
                                    <p class="ng-binding">户籍人口：2553人</p>
                                    <p class="ng-binding">主要民族：汉</p>&ndash;&gt;
                                </td>
                                <td valign="top"><p class="ng-binding">山林面积：1.58万亩</p>
                                   &lt;!&ndash; <p class="ng-binding">村庄占地面积：764.4亩</p>
                                    <p class="ng-binding">常住人口：2600人</p>
                                    <p class="ng-binding">主要产业：种植业和劳务输出</p>&ndash;&gt;
                                </td>
                                <td valign="top"><p class="ng-binding">耕地面积：4433亩</p>
                                </td>
                                &lt;!&ndash;<td valign="top"><p>&nbsp;</p>
                                    <p>&nbsp;</p>
                                    <p class="ng-binding">村民人均年收入：6484.7元</p>
                                </td>&ndash;&gt;
                            </tr>
                            </tbody>
                        </table>-->
                    </div>
                </div>
                <!--<div class="closeButton" onclick="hidDiscript();"></div>
                <div class="right_line"></div>-->
                <!--<div class="enter_cnt" style="opacity: 1;"> <span>进入村落</span></div>-->
                <router-link to="/Q1" class="enter_cnt" style="opacity: 1;" ><span>进入村落</span></router-link>
            </div>
        </div>

        <el-carousel :interval="5000" arrow="always" height="650px">
            <el-carousel-item v-for="item in address" :key="item">
                <img :src="item.addre" style="width: 100%">
            </el-carousel-item>
        </el-carousel>
        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>

    </div>

</template>

<script>
    export default {
        name: "Cunluo",
        data (){
            return {
                address:[
                    {addre: 'https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic1.jpg'},
                    {addre: 'https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/pic5.jpg'}
                ]
            }
        }
    }
</script>

<style scoped>
    @import "../../static/css/common.css";
    @import "../../static/css/section.css";
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
   /* .te{width:100%  !important; font-size:18px !important; margin-bottom:25px  !important; }
    .tw{width:100%  !important; font-size:18px !important; margin-bottom:25px !important;}
    td p{
        width: 100% !important;;
        font-size:18px !important;
        line-height:25px;
    }
    .txt_area{padding-left:30px !important;}*/

    /*本页正文内容样式*/
    .te{width:100%  !important; font-size:19px !important; margin-bottom:25px  !important; }
    .tw{width:100%  !important; font-size:18px !important; margin-bottom:25px !important;}
    td p{
        width: 100% !important;;
        font-size:18px !important;
        line-height:25px;
    }
    .txt_area{padding-left:30px !important;}
</style>