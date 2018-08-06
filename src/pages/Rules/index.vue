<template>
  <div class="hello">
    <topmenu />
    Rules page
  </div>
</template>

<script>
  import Topmenu from '@/components/TopMenu';

  export default {
    name: 'Rules',
    components: {
      Topmenu
    },
    created() {
      console.log(12,this.$router.params)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
