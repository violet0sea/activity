<template>
  <div class="prize_wrap">
   
    <div class="prize_tip">
        <img class="happy" src="../../../assets/images/happy.png"/>
        <span>Congrats! </span>
        <span>a Redmi Note 5</span>
        <img class="prize" src="../../../assets/images/prize1.png"/>
    </div>
    <div class="receive_prize" @touchend="receivePrize"></div>
    <p>Coupons for claimed prizes ，will be sent to your account  within 7 days after the event ends.</p>
    <div class="prize_rules">
        <h3>Receiving prizes :</h3>
        <ol>
            <li>Prize coupons which can be redeemed in the Mi   
    Store app will be sent to Mi Accounts of all the
    winners within one week after the event ends.</li>
            <li>You must add your Mi Account to receive prizes. 
     If you haven&apos;t done that yet, tap &quot;Claim prize&quot; to 
     create or add your account.
</li>
            <li>The coupons can be redeemed in the Mi Store app
     and  website (http://www.mi.com/in/). Note that:
     <br />
     a) You should sign in to Mi Store using the  
          account you added during the event.
          <br />
     b) You should redeem your coupons before they
           expire.</li>
            <li>Coupons do not cover delivery fees. All delivery
    fees will  be borne by the users.
</li>
            <li>Feel free to share your feedback with us by
    dropping a line to global_midrop@xiaomi.com./li>
            <li>Xiaomi reserves the rights of final decision on the 
     interpretation of these Terms and Conditions.</li>
        </ol>
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
      },
      receivePrize() {
          console.log('receive prize');
          this.$emit('receivePrize');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .prize_wrap {
        font-size: 40px * 2 / 3; /*px*/
        padding-top: 338px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .prize_tip {
            position: relative;
            width: 587px;
            height: 555px;
            background-color: #e83631;
            border-radius: 57px;
            text-align: center;

            .happy {
                position: absolute;
                left: 50%;
                top: -140px;
                transform: translateX(-50%);
                width: 239px;
                height: 239px;
            }

            span {
                display: inline-block;
                color: #ffcf00;
            }
        
            span:nth-of-type(1) {
                font-size: 65px * 2 / 3; /*px*/
                margin-top: 110px;
                margin-bottom: 40px;
            }

            span:nth-of-type(2) {
                font-size: 45px * 2 / 3; /*px*/
                color: #ffffff;
                margin-bottom: 26px;

                &:before {
                    content: 'You got ';
                    color: #ffcf00;
                }
                
            }

            .prize {
                width: 201px;
                height: 251px;
            }
        }

        .receive_prize {
            width: 762px;
            height: 145px;
            margin-top: 22px;
            margin-bottom: 34px;
            background: url('../../../assets/images/obtain.png');
            background-size: 100% 100%;
        }

        p {
            width: 961px;
            color: #ffd46c;
            line-height: 50px;
            font-size: 42px * 2 / 3; /*px*/
            font-weight: bold;
            margin-bottom: 90px;
        }

        .prize_rules {
            width: 891px;
            h3 {
                font-size: 45px * 2 / 3; /*px*/
                font-weight: bold;
                margin-bottom: 90px;
            }

            ol {
                list-style-type: decimal;

                li {
                    margin-left: 30px;
                    list-style-position:outside;
                    font-size: 40px * 2 / 3; /*px*/
                    line-height: 50px;
                    margin-bottom: 60px;
                }
            }

        }

    }

</style>
