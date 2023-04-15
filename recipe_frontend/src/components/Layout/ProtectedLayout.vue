<template>
  <main>
    <nav>
        <ul>
            <router-link 
                v-for="(navEl,idx) in navList" 
                :to="navEl.path" 
                :key="idx"
            >{{navEl.name}}</router-link>
        </ul>
    </nav>
    <div>
        <slot />
    </div>
  </main>
</template>

<script>
const navList = [
    {path:"/", name:"Dashboard"},
    {path:"/profile", name:"Profile"},
    {path:"/pay", name:"Payment"},
];

export default {
    data(){
        return{
            navList
        }
    }

}
</script>

<style>

</style>