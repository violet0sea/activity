<template>
  <div class="dialog-container">
    <div class="dialog-mask" @touchend="closeMask"></div>
    <div class="dialog">
        <h3 v-if="!claimed">Prize will be sent to this account</h3>
        <h3 v-else class="claimed"> Claimed successfully !</h3>
        <div class="prize_bg">
            <img></img>
        </div>
        <template v-if="!claimed">
            <p class="mi_nickanme">nickname</p>
            <div class="get_prize" @touchend="getPrize">OK</div>
            <a @touchend="miLogin">Switch accounts</a>
        </template>
        <template v-else>
            <p class="shareWithOthers">Share to friends</p>
            <div class="share-group">
                <img src="../../../assets/images/facebook.png" @touchend="shareToFB"/>
                <img src="../../../assets/images/whatsapp.png" @touchend="shareToWA" />
            </div>
        </template>

    </div>
  </div>
</template>

<script>
  import { setName, webMiLogin } from '@/utils';

  export default {
    name: 'Dialog',
    data: () => {
      return {
        nickname: '',
        claimed: false
      }
    },
    methods:{
      closeMask() {
        this.$emit('closeDialog');
      },
      getPrize() {
        console.log('get prize');
        //todo send ajax
        this.claimed = true;
      },
      miLogin() {
        webMiLogin();
      },
      shareToFB() {

      },
      shareToWA() {

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
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        width: 844px;
        height: 932px;
        border-radius: 50px;
        background-color: #ffffff;
        font-size: 40px * 2 / 3; /*px*/


        h3 {
            width: 430px;
            font-size: 50px * 2 / 3; /*px*/
            font-weight: bold;
            line-height:58px;
            margin-top: 90px; 
            margin-bottom: 36px;
            color: #d62c2c;
            text-align: center;
        }

        .claimed {
            margin-top: 114px;
            margin-bottom: 70px;
            width: 100%;
        }

        .prize_bg {
            width: 315px;
            height: 315px;
            background: linear-gradient(to bottom, #ee5e5e, #d93030);
            border-radius: 50%;
            text-align: center;

            img {
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                width: 226px;
                height: 282px;
            }
        }

        .mi_nickanme {
            margin-top: 27px;
            color: #9d0808;
            font-size: 45px * 2 / 3; /*px*/
            

            &:before {
                content: 'Nickname: ';
                font-weight: bold;
            }
        }

        .get_prize {
            width: 348px;
            height: 103px;
            line-height: 103px;
            text-align: center;
            border-radius: 50px;
            margin-top: 39px;
            margin-bottom: 26px;
            background: linear-gradient(to bottom, #ec5151, #d32828);
        }

        a {
            text-decoration: underline;
            color: #4a90e2;
            padding-bottom: 46px;
        }

        .shareWithOthers {
            position: relative;
            margin-top: 69px;
            margin-bottom: 33px;
            height: 74px;
            color: #9d0808;
            font-size: 50px * 2 / 3; /*px*/

            &:before {
                position: absolute;
                top: 30px;
                left: -130px;
                display: block;
                content: '';
                width: 103px;
                height: 10px;
                border-top: 3px solid #9d0808;
            }

            &:after {
                position: absolute;
                top: 30px;
                right: -130px;
                display: block;
                content: '';
                width: 103px;
                height: 1px;
                border-top: 3px solid #9d0808;
            }

        }

        .share-group {
            img {
                width: 113px;
                height: 113px;
            }
            img:nth-child(1) {
                margin-right: 118px;
            }
        }

    }

  
}

</style>
