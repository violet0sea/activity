<template>
  <div class="container" @click="handleClick">
    <div class="test-wrap">
        <div class="test" @touchend="getDeviceId">getDeviceId</div>
        <div class="test" @touchend="syncTransRecords">syncTransRecords</div>
        <div class="test" @touchend="hasRenamed">hasRenamed</div>
        <div class="test" @touchend="goHome">goHome</div>
      </div>
    <banner />
    <prizes />
    <top-list />
    <bottom-tip />
    <load-more />
  </div>
</template>

<script>
import banner from './components/banner';
import prizes from './components/prizes';
import topList from './components/topList';
import bottomTip from './components/bottomTip';
import LoadMore from '@/components/LoadMore';

import { getDeviceId, hasRenamed, syncTransRecords, goHome,toast } from '@/utils';

export default {
  name: 'Index',
  props: {
    msg: String
  },
  components: {
    banner,
    prizes,
    topList,
    bottomTip,
    LoadMore
  },
  data() {
      return {

      }
  },
  mounted() {
    console.log(this.$MiGlobal)
    // toast(1111)
  },
  methods: {
    handleClick() {

    },
    getDeviceId() {
      getDeviceId().then(result => {console.log('getDeviceId', result)});
    },
    syncTransRecords() {
      syncTransRecords().then(result => {console.log('syncTransRecords', result)});
    },
    hasRenamed() {
      hasRenamed().then(result => console.log('isRename',result));
    },
    goHome() {
      goHome().then(result => console.log('goHome',result));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .container {
      padding-bottom: 141px;
      .test-wrap {
        position: absolute;
        z-index: 9999;
        .test {

          width: 500px;
          height: 100px;
          background-color: #ff00ee;
          font-size: 40px;
          line-height: 100px;
          text-align: center;
          margin-bottom: 20px;
        }
      }

        
    }
</style>
