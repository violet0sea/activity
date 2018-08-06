<template>
  <div class="coins_details">

    <topmenu>
      <h1>Details</h1>
    </topmenu>
    <div class="details_list">
      <div class="detail_item" v-for="item in coinsList">
        <div class="trans_info">
          <span>1233455566</span>
          <span class="date">MM/DD/YY</span>
        </div>
        <div class="coins_info">
          <img src="../../assets/images/coins_detail.png" />
          <span>+20</span>
        </div>
      </div>
    </div>
    <div class="rules_bottom">
      <a @click="gotoRules">Details</a>
    </div>

  </div>
</template>

<script>
  import Topmenu from '@/components/TopMenu';

  export default {
    name: 'Rules',
    components: {
      Topmenu
    },
    data: () => {
      return {
        coinsList: [{
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        }, {
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        }, {
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        },{
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        },{
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        }, {
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        }, {
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        },{
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        },{
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        }, {
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        }, {
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 20
        },{
          name: 'Transfer a file to xxx (New friend)',
          date: '09-09-2018',
          total: 21
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
              from: 'CoinsDetails'
          }
      });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .coins_details {
    background: linear-gradient(to bottom, #ef7f18, #e82f2a 50%, #e7292b );
    height: 100%;
    font-size: 40px * 2 / 3; /*px*/

    h1 {
      height: 64px;
      padding: 48px 0;
    }

    .details_list {
      padding-top: 160px;
      margin-bottom: 205px;

      .detail_item {
        padding-left: 32px;
        padding-right: 38px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 179px;
        border-bottom: 2px solid #ffa050;
        box-sizing: border-box;

        .trans_info {
          width: 650px;
          span {
            display: block;
          }
          .date {
            margin-top: 10px;
            font-size: 35px * 2 / 3; /*px*/
            color: #ffe566;
          }
          
        }

        .coins_info {
          display: flex;
          font-size: 48px * 2 / 3; /*px*/
          color: #ffe566;
          font-weight: bold;
          img {
            width: 110px;
            height: 63px;
          }

          span {
            display: inline-block;
            height: 63px;
            line-height: 63px;
            &:after {
              content: '  coins';
              color: #ffffff;
            }
          }
        }

      }
    }
    .rules_bottom {
      position: fixed;
      bottom: 0;
      z-index: 999;
      width: 100%;
      background-color: #e7292b;
      padding-bottom: 146px;
      text-align: center;
      text-decoration: underline;
      font-size: 50px * 2 / 3; /*px*/
      a {
        padding: 20px;
      }
    }
  }
</style>
