<!--使用方法：<pop-up @reFreshData='刷新数据方法'v-bind:show="show" v-on:clearDialog="show=!show"></pop-up>,show是data中的bool型变量，弹出层出现和消失-->
<template>
  <div class="dialog" v-if="show">
  
    <transition name="popup">
    213123
      <div class="popup" v-if="showDialog">
        <div class="popup__header" v-on:click="clearDialog">
          <img src="./images/arrow.png" class="arrow"/>
        </div>
        <div class="popup__body">
          <div class="media_box media_box-padding">
            <img src="../../assets/images/whatsapp.png" class="popup__img" @click="whatsappShare"/>
            <label class="imgtext">WhatsApp</label>
          </div>
          <div class="media_box">
            <img src="../../assets/images/facebook.png" class="popup__img" @click="fbShare"/>
            <label class="imgtext">Facebook</label>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'PopUp',
    props: ['show', 'shareType'],
    updated() {
      if (this.show === true && this.showDialog === false && this.flag === 0) {
        var that = this
        setTimeout(function () {
          that.showDialog = !that.showDialog
        }, 20)
      } else if (this.flag === 1) {
        this.flag = 0
        // 用来清除clearDialog所带来的data变化
      } else if (this.count === 1) {
        this.count = 0
        // 用来判断组件是否mount
      }
    },
    data() {
      return {showDialog: false, flag: 0,  allTime: parseInt(this.$route.query.allTime) || 0}
    },
    methods: {
      getLevel() {
        let allTime = this.allTime
        if (allTime <= 20) {
          return `${shareHtml}/shareHtml1.html`
        } else if (allTime <= 40) {
          return `${shareHtml}/shareHtml2.html`
        } else if (allTime <= 60) {
          return `${shareHtml}/shareHtml3.html`
        } else if (allTime <= 80) {
          return `${shareHtml}/shareHtml4.html`
        } else if (allTime <= 100) {
          return `${shareHtml}/shareHtml5.html`
        }
      },
      clearDialog: function () {
        this.showDialog = !this.showDialog
        this.flag = 1
        // 使得接下来发出的事件不会使内部属性发生变化
        let that = this
        setTimeout(function () {
          that.$emit('clearDialog')
        }, 200)
      },
      fbShare() {
        window.FB.ui(
          {
            method: 'share',
            href: this.shareType == 1 ? `${this.getLevel()}?source=08` : `${shareUrl}?source=08`,
          },
          response => {
            // 统计 分享 fb
            window.ga('send', {
              hitType: 'event',
              eventCategory: `share${this.shareType || 2}`,
              eventAction: 'click',
              eventLabel: 'fb'
            })
            this.getCard()
          }
        )
        this.clearDialog()
      },
      whatsappShare() {
        // 统计 分享 wa
        window.ga('send', {
          hitType: 'event',
          eventCategory: `share${this.shareType || 2}`,
          eventAction: 'click',
          eventLabel: 'whatsapp'
        })
        window.open(`https://api.whatsapp.com/send?text=${this.shareType == 1 ? this.getLevel() : shareUrl}?source=07`)
        this.getCard()
        this.clearDialog()
      },
      getCard() {
        get('/share/get/revive/card', {m: 2}, {}).then(data => {
          // 分享成功以后，父组建重新调一下拉取最新的复活卡，别的地方看情况，不拉数据的话，把这个事件去掉
          if (data.result) {
            bus.$emit('cardNumAdd', 1);
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .dialog {
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .popup {
    display: flex;
    flex-direction: column;
    height: 326px;
    width: 100%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    bottom: 0px;
    transition: bottom 200ms;
  }

  .popup__img {
    width: 137px;
    height: 138px;
    margin-bottom: 27px;
  }

  .popup__header {
    display: flex;
    justify-content: flex-end;
  }

  .popup__body {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .imgtext {
    font-size: 36px*2/3;
  }

  .arrow {
    display: block;
    width: 48px;
    height: 49px;
    margin-top: 33px;
    margin-right: 49px;
  }

  .media_box {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .media_box-padding {
    padding-right: 270px;
  }

  .popup-enter,
  .popup-leave-to {
    bottom: -326px;
  }

  .popup-enter-to,
  .popup-leave {
    bottom: 0;
  }

  @media screen and (min-width: 1081px) {
    .imgtext {
      font-size: 36px; /*px*/
    }
  }
</style>
