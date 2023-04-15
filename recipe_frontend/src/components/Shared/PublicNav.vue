<template>
  <nav>
        <ul>
            <router-link 
                v-for="(navEl,idx) in navList" 
                :to="navEl.path" 
                :key="idx"
            >{{navEl.name}}</router-link>
        </ul>
    </nav>
</template>

<script lang="ts">
interface navListType {path:string,name:string}
const navList:navListType[] = [
    {path:"/", name:"Home"},
    {path:"/about", name:"About"},
    {path:"/contact", name:"Contact"},
];
export default {
    data(){
        return {
            navList,
        }
    }
}
</script>

<style>

</style>