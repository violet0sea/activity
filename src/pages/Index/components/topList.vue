<template>
    <div class="topList">
        <h2>
           RANKINGS
        </h2>
        <div class="ranking_list">
            <div class="ranking_header">
                <div class="rank">Rank</div>
                <div class="nickname">Nickname</div>
                <div>Coins</div>
            </div>
            <div class="ranking_item" :class="{'top_one': index === 0}" v-for="(item, index) in list">
                <div 
                    class="ranking_order rank" 
                >
                {{index ? (index + 1) : '' }}
                </div>
                <div class="nickname">{{item.name}}</div>
                <div>{{item.coins}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
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
            }]
        }
    },
    methods: {
        gotoShare() {
            console.log('goto share')
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
    .topList {
        margin: 0 45px;
        h2 {
            font-size: 45px * 2 / 3; /*px*/
            color: #ffe6d5;
            font-weight: bold;
            text-align: center;
            margin-bottom: 31px;
            position: relative;
            &:before {
                content: '';
                position: absolute;
                left: 332px - 45px;
                top: -5px;
                width: 74px;
                height: 52px;
                background: url('../../../assets/images/slash.png');
                background-size: 100% 100%;
            }
            &:after {
                content: '';
                position: absolute;
                right: 332px - 45px;
                top: -5px;
                width: 74px;
                height: 52px;
                background: url('../../../assets/images/slash.png');
                background-size: 100% 100%;
            }
        }

        .ranking_list {
            display: flex;
            flex-direction: column;
            color: #ffe6d5;
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
                  background: url('../../../assets/images/crown.png');
                  background-size: 100% 100%;
                  transform: scale(2) rotate(43deg);
                }
            }

            .nickname {
                width: 430px;
                padding-left: 300px;
            }

            .rank {
                width: 60px;
                font-weight: bold;
                margin-left: 39px;
            }
        }
    }      

</style>
