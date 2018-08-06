<template>
  <div id="app" v-if="loadApp">
    <router-view/>
    <pop-up :show="showShare" @clearDialog="closePopUp" />
  </div>
</template>

<script>
  import PopUp from '@/components/PopUp';
  import { syncTransRecords } from '@/utils';
  import { fetch } from '@/utils/fetch'

  export default {
    name: 'App',
    data: () => {
      return {
        loadApp: false,
        showShare: false
      }
    },
    components: {
      PopUp
    },
    created() {
      this.$bus.$on('showPopUp', this.showPopUp)
    },
    mounted() {
      // this.initActivity();
      console.log('app mounted', this.$bus)
      this.loadApp = true;
    },
    beforeDestory() {
      this.$bus.$off('showPopUp', this.showPopUp)
    },
    methods: {
      initActivity() {
        fetch({
          activity: '',
          uid: ''
        }).then(() => {

        });
      },
      getInfo() {
        fetch({
          activity: '',
          uid: ''
        }).then(() => {

        });
      },
      showPopUp(shareType, cb) {
        // shareType: 'bannerShare' || 'medalShare';
        if (cb) {
          this.callback = cb;
        } else {
          this.callback = () => {}
        } 
        this.shareType = shareType;       
        this.showShare = true;
      },
      closePopUp() {
          this.showShare = false;
      }
    }

  }
</script>

<style lang="scss" scoped>

    @media screen and (min-width: 1081px) {
        #app {
            width: 1080px;
            margin: 0 auto;
        }
    }

    #app {
      height: 100%;
      font-family: "sans-serif";
      box-sizing: border-box;
    }
</style>
