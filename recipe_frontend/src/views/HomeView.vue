<template>
  <div class="home-test">
    Home Page q
    <Layout >
      <h2>I am Layout</h2>
    </Layout>
  </div>
</template>

<script lang='ts'>
import Layout from "../components/Layout/PublicLayout.vue"
export default {
  components:{
    Layout
  },
}
</script>

<style >
.home-test{
  color: aqua;
}
</style>