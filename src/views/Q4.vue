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
        name: "Q4",
        data () {
            return{
                address: "https://venus.sheencity.com/project/publish/f46476d1-31f1-4a63-83d9-9f714ffcb914/baa20e0b-9636-4273-b349-b3e2b47da940/index.html"
            }
        }
    }
</script>

<style scoped>

</style>