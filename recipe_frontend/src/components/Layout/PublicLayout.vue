<template>
  <main>
    <PublicNav />
    
    <div>
        <slot />
    </div>
  </main>
</template>

<script>
import PublicNav from "../Shared/PublicNav.vue"


export default {
    components:{
        PublicNav
    },
    data(){
        return{
            
        }
    },
    mounted(){
        
    },

}
</script>

<style>

</style>