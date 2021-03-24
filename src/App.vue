<template>
  <div>
    <el-row>
      <!--<el-col :span="5"><img :src="imgIcon" style="width: 100%"></el-col>-->
      <el-col :span="5"><img src="https://lw-1305062858.cos-website.ap-nanjing.myqcloud.com/logo.png" style="width: 100%"></el-col>
      <el-col :span="19" style="z-index: 1000">
        <el-menu router
              :default-active="this.$route.path"
              class="el-menu-demo"
              mode="horizontal">
          <el-submenu id="nav2" v-for="(item2,j) in $router.options.routes" :key="j+'2'" :index="item2.path"  v-if="item2.wshow">
            <template slot="title">
              <!--<i class="el-icon-s-platform"></i>-->
              <span>{{item2.name}}</span>
            </template>
            <el-menu-item  v-for="(item3,k) in $router.options.routes" :key="k+'3'" :index="item3.path" v-if="item3.subshow" :class="$route.path==item3.path?'is-active':''">
              <template slot="title">
                <!--<i class="el-icon-s-platform"></i>-->
                <span>{{item3.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item id="navv" v-for="(item,i) in $router.options.routes" :key="i+'1'" :index="item.path"  v-if="item.show">
            <template slot="title">
              <!--<i class="el-icon-s-platform"></i>-->
              <span>{{item.name}}</span>
            </template>
          </el-menu-item>


      </el-menu></el-col>
    </el-row>
    <el-main>
      <router-view>

      </router-view>
    </el-main>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList:[
          {name:'/Cunluo',navItem:'六汪镇'},
          {name:'/Quanjing',navItem:'全景展示'},
          {name:'/Lishi',navItem:'历史文化'},
          {name:'/Huanjing',navItem:'环境格局'},
          {name:'/Chuantong',navItem:'传统建筑'},
          {name:'/Minsu',navItem:'民俗文化'},
          {name:'/Meishi',navItem:'美食物产'},
          {name:'/Lvyou',navItem:'旅游导览'},
          {name:'/Zhaoshang',navItem:'招商信息'},
        ],
        /*imgIcon: require("../static/logo.png"),*/
      };
    },
    methods: {
    }
  }
</script>

<style>
  #navv{
    margin-top: 2%;
    padding: 0px 12px;
 /*   margin-left: 1%;
    margin-right: 1%;*/
  }
  #nav2{
    margin-top: 2%;

    /*margin-left: 1%;
    margin-right: 1%;*/
  }
</style>