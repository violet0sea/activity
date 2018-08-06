<template>
  <div class="root">
    <topmenu>
      <h1>My prizes</h1>
    </topmenu>
    <show-prize v-if="hasPrize" @receivePrize="receivePrize"/>
    <no-prize  v-else/>
    <prize-dialog v-if="showDilaog"  @closeDialog="closeDialog"/>

  </div>
</template>

<script>
  import Topmenu from '@/components/TopMenu';
  import NoPrize from './components/noPrize';
  import ShowPrize  from './components/showPrize';
  import PrizeDialog from './components/prizeDialog';

  export default {
    name: 'Rules',
    components: {
      Topmenu,
      NoPrize,
      ShowPrize,
      PrizeDialog
    },
    data: () => {
      return {
        hasPrize: true,
        showDilaog: false
      }
    },
    created() {
      console.log(12,this.$router.params)
    },
    methods: {
      gotoRules() {
        this.$router.push({
          name: 'Rules',
          params: {
              from: 'CoinsDetails'
          }
        });
      },
      receivePrize() {
        
        this.showDilaog = true;
      },
      closeDialog() {
        console.log(235);
        this.showDilaog = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .root {
    background: linear-gradient(to bottom, #ef7f18, #e82f2a 70%, #e7292b );
    font-size: 40px * 2 / 3; /*px*/
    box-sizing: border-box;

    h1 {
      height: 64px;
      padding: 48px 0;
    }

    .content {
      
    }
    
  }
</style>
