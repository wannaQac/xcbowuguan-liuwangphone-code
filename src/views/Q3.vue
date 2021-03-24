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
        name: "Q3",
        data () {
            return{
                address: "https://venus.sheencity.com/project/publish/c025a275-5972-4b73-bbb0-9e31c075429c/72c10e10-a46d-41f9-86be-cc06f8d4f80e/index.html"
            }
        }
    }
</script>

<style scoped>

</style>