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
        name: "Q2",
        data () {
            return{
                address: "https://venus.sheencity.com/project/publish/c025a275-5972-4b73-bbb0-9e31c075429c/ce33250f-d498-4c88-9e33-e75824a25403/index.html"
            }
        }
    }
</script>

<style scoped>

</style>