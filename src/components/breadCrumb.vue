<template>
    <div>
        <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path"  v-if="item.meta.title">
            <span v-if="item.redirect === 'noredirect' || index == levelList.length-1">
                {{item.meta.title}}
            </span>
            <router-link v-else :to="item.redirect || item.path">{{item.meta.title}}</router-link>
        </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    created(){
        this.getBreadcrumb()
    },
    data(){
        return {
            levelList:null
        }
    },
    watch:{
    $route(){
        this.getBreadcrumb()
    }
},
methods:{
    getBreadcrumb(){
        let matched = this.$route.matched.filter(item => item.nae)
        const first = matched[0]
        if(first && first.name !== "home"){
            matched = [{path:"/home",meta:{title:"首页"}}].concat(matched)
        }
        this.levelList = matched
    }
}
}
</script>
<style scoped>
</style>