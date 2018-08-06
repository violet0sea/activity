<template>
  <div class="dialog-container">
    <div class="dialog-mask" @touchend="closeMask"></div>
    <div class="dialog">
      <h3 class="title">EDIT NICKNAME</h3>
      <input 
        type="text" 
        ref="input"
        placeholder="Up to 15 chracters (letters&digits)" 
        v-on:input="handleInput">
      <div class="button-group">
        <div @touchend="closeMask">CANCEL</div>
        <div @touchend="submitChange">OK</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { setName } from '@/utils';
  export default {
    name: 'Dialog',
    data: () => {
      return {
        nickname: ''
      }
    },
    methods:{
      closeMask() {
        this.$bus.$emit('closeDialog');
      },
      submitChange() {
        const nickname = this.$refs.input.value;
        if(nickname.trim() === '') {
          return;
        }
        console.log('change name: ', nickname.trim())
        setName({name: nickname.trim()})
      },
      handleInput(e) {
        const value = e.target.value;
        if(value.length > 15) {
          this.$refs.input.value = value.slice(0, 15);
        } else {
          this.$refs.input.value = value;
        }
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .dialog-container {
    @extend .mask;
    height: 100%;
    width: 100%;
    z-index: 999;

    .dialog-mask {
      @extend .mask;
      background-color: #3b3b3b;
      opacity: .45;
    }

  .dialog {
    box-sizing: border-box;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 844px;
    height: 457px;
    border-radius: 50px;
    background-color: #ffffff;

    input {
      display: block;
      width: 687px;
      height: 110px;
      margin: 0 auto;
      border: 1px solid #ababab;
      border-radius: 60px;
      padding-left: 30px;
    }

    .button-group {
      display: flex;
      justify-content: space-around;
      margin-top: 36px;
      margin-left: 134px;
      margin-right: 131px;

      div {
        width: 270px;
        height: 103px;
        line-height: 103px;
        color: #ffffff;
        font-size: 40px *2 / 3; /*px*/
        font-weight: normal;
        border-radius: 50px;
        background: linear-gradient(to bottom, #ec5151, #d32828); 
      }

    }
  }

  .title {
    margin-top: 56px;
    margin-bottom: 24px;
    font-size: 55px * 2 / 3; /*px*/
    text-align: center;
    color: #dd3737;

  }
  
}

</style>
