<template>
  <div class="root">
    <topmenu>
      <h1>Transfer files to get coins</h1>
    </topmenu>
    <div class="content">
      <div class="rules_wrap">
        <a @touchend="gotoRules">RULES</a>
      </div>
      <h2>The event ended</h2>
      <p>Here are the rankings:</p>
      <h3>Top 15 winners</h3>
      <div class="ranking_list">
            <div class="ranking_header">
                <div class="rank">Rank</div>
                <div class="nickname">Nickname</div>
                <div class="coins">Coins</div>
                <div>Prize</div>
            </div>
            <div class="ranking_item" :class="{'top_one': index === 0}" v-for="(item, index) in list">
                <div 
                    class="ranking_order rank" 
                    
                >
                {{index ? (index + 1) : '' }}
                </div>
                <div class="nickname">{{item.name}}</div>
                <div class="coins">{{item.coins}}</div>
                <div class="prize">
                  <img src="../../assets/images/prize1.png" />
                </div>
            </div>
        </div>
        <h3 class="lucky_winners">Lucky winners</h3>
        <div class="ranking_list">
            <div class="ranking_header">
                <div class="rank">Rank</div>
                <div class="nickname">Nickname</div>
                <div class="coins">Coins</div>
                <div>Prize</div>
            </div>
            <div class="ranking_item" v-for="(item, index) in list">
                <div 
                    class="ranking_order rank" 
                    
                >
                {{index ? (index + 1) : '' }}
                </div>
                <div class="nickname">{{item.name}}</div>
                <div class="coins">{{item.coins}}</div>
                <div class="prize">
                  <img src="../../assets/images/prize1.png" />
                </div>
            </div>
        </div>
    </div>
    <bottom-tip />

  </div>
</template>

<script>
  import Topmenu from '@/components/TopMenu';
  import BottomTip from './components/bottomTip';

  export default {
    name: 'Rules',
    components: {
      Topmenu,
      BottomTip
    },
    data: () => {
      return {
        list: [{
          name: 'abc',
          coins: 100
        }, {
            name: 'abc',
            coins: 100
        }, {
            name: 'abc',
            coins: 100
        },{
            name: 'abc',
            coins: 100
        },{
          name: 'abc',
          coins: 100
        }, {
            name: 'abc',
            coins: 100
        }, {
            name: 'abc',
            coins: 100
        },{
            name: 'abc',
            coins: 100
        },{
          name: 'abc',
          coins: 100
        }, {
            name: 'abc',
            coins: 100
        }, {
            name: 'abc',
            coins: 100
        },{
            name: 'abc',
            coins: 100
        },{
          name: 'abc',
          coins: 100
        }, {
            name: 'abc',
            coins: 100
        }, {
            name: 'abc',
            coins: 100
        },{
            name: 'abc',
            coins: 100
        }]
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
  $bg1: #ca2023;
  $bg2: #e7292b;

  .list_layout {
    display: flex;
    // justify-content: space-around;
    align-items: center;
  }

  .root {
    background: linear-gradient(to bottom, #ef7f18, #e82f2a 50%, #e7292b );
    font-size: 40px * 2 / 3; /*px*/
    padding-bottom: 247px;

    h1 {
      height: 64px;
      padding: 48px 0;
    }

    .content {
      position: relative;
      padding-top: 160px;
      text-align: center;

      .rules_wrap {
        position: absolute;
        right: 46px;
        width: 138px;
        height: 157px;
        background-color: #ffca4b;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;

        a {
          position: relative;
          top: 45px;
          transform: translateY(-50%);
          padding: 10px;
          font-size: 36px * 2 / 3; /*px*/
          font-weight: bold;
          color: #ca2023;
          text-decoration: underline;
        }
      }

      h2 {
        margin-top: 92px;
        margin-bottom: 5px;
        font-size: 82px * 2 / 3; /*px*/
        font-weight: bold;
      }

      p {
        margin-bottom: 76px;
        font-size: 45px * 2 / 3; /*px*/
        font-weight: bold;
        color: #fffcaa
      }

      h3 {
        position: relative;
        margin-bottom: 38px;
        font-size: 45px * 2 / 3; /*px*/
        font-weight: bold;
        &:before {
          content: '';
          position: absolute;
          left: 332px - 45px;
          top: 0;
          width: 74px;
          height: 52px;
          background: url('../../assets/images/slash.png');
          background-size: 100% 100%;
        }
        &:after {
            content: '';
            position: absolute;
            right: 332px - 45px;
            top: 0;
            width: 74px;
            height: 52px;
            background: url('../../assets/images/slash.png');
            background-size: 100% 100%;
        }
      }

      .lucky_winners {
        margin-top: 71px;
        margin-bottom: 42px;
      }

      .ranking_list {
        display: flex;
        flex-direction: column;
        color: #ffe6d5;
        margin: 0 45px;

        .ranking_header {
            @extend .list_layout;
            height: 98px;
            font-weight: bold;
            background-color: $bg1;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }

        .ranking_item {
          @extend .list_layout;
          height: 85px;
          border-left: 1px solid $bg1;
          border-right: 1px solid $bg1;
          &:nth-child(odd) {
              background-color: $bg1;
          }
          &:nth-child(even) {
              background-color: $bg2;
          }
          &:last-child {
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
          }

          .ranking_order {
              width: 60px;
              height: 60px;
              line-height: 60px;
              text-align: center;
              color: #b62922;
              font-size: 35px * 2 / 3; /*px*/
              background-color: #ffcc00;
              border-radius: 50%;
          }
        }

        .top_one {
          color: #ffc748;
          font-weight: bold;
          .ranking_order {
            position: relative;
            top: -5px;
            background: url('../../assets/images/crown.png');
            background-size: 100% 100%;
            transform: scale(2) rotate(43deg);
          }
        }

        .nickname {
            width: 310px;
            text-align: left;
            padding-left: 200px;
        }

        .rank {
            width: 60px;
            margin-left: 39px;
            font-weight: bold;
        }

        .coins {
          width: 200px;
          text-align: left;
        }

        .prize {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: #920101;
          img {
            width: 64px;
            height: 64px;
          }
        }
    }
    }
  }
</style>
