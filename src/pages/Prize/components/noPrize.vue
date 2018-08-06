<template>
  <div class="no_prize">
   
    <div class="prize_tip">
        <img src="../../../assets/images/upset.png"/>
        <span>Luck wasn't on your side this time. </span>
        <span>Don't give up!</span>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'Rules',
    components: {
    },
    data: () => {
      return {
     
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
              from: 'Ranking'
          }
      });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .no_prize {
        height: calc(100vh - 141px);
        font-size: 40px * 2 / 3; /*px*/

        .prize_tip {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 869px;
            height: 372px;
            background-color: #ffffff;
            border-radius: 57px;
            text-align: center;

            img {
                position: absolute;
                left: 50%;
                top: -119px;
                transform: translateX(-50%);
                width: 239px;
                height: 239px;
            }

            span {
                display: inline-block;
            }
        
            span:nth-of-type(1) {
                font-size: 45px * 2 / 3; /*px*/
                color: #650404;
                margin-top: 127px;
                margin-bottom: 40px;
            }

            span:nth-of-type(2) {
                font-size: 68px * 2 / 3; /*px*/
                color: #e93635;
                
            }
        }

    }

</style>
