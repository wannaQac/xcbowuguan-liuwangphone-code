<template>
    <div>
        <iframe :src="address" width="100%" frameborder="0" height="800px"></iframe>
        <el-backtop :visibility-height="60">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
</template>

<script>
    export default {
        name: "Q1",
        data () {
            return{
                address: "https://venus.sheencity.com/project/publish/c025a275-5972-4b73-bbb0-9e31c075429c/f40d1963-0043-4a2d-9c03-ba58e5fdd098/index.html"
            }
        }
    }
</script>

<style scoped>

</style>