<template>
    <div class="prizes">
        <h2>
            <img src="../../../assets/images/prize_title.png"/>
        </h2>
        <div class="prize_group">
            <div class="prize_item" v-for="item in prizeList">
                <img :src="item.prizeUrl"/>
            </div>
        </div>
        <button @touchend="gotoShare"></button>
    </div>
</template>

<script>
import { prizeList } from '@/utils/constant';

console.log(prizeList)
export default {
    data: () => {
        return {
            prizeList
        }
    },
    methods: {
        gotoShare() {
            this.$router.push({
                name: 'Ranking',
                params: {
                    from: 'Index'
                }
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    .prizes {
        height: 522px;
        display: flex;

        justify-content: center;
        position: relative;

        h2 {
            position: absolute;
            img {
                width: 525px;
                height: 122px;
            }
        }

        .prize_group {
            margin: 20px 40px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1037px;
            height: 424px;
            background:  url('../../../assets/images/prize_group.png');
            background-size: 100% 100%;

            .prize_item {
                position: relative;
                width: 315px;
                height: 279px;
                background:  url('../../../assets/images/prize_bg.png');
                background-size: 100% 100%;
                img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 155px;
                    height: 193px; 
                    transform: translate(-50%, -50%);
                }
                img:nth-child(2) {
                    transform: scale(2);
                }
                &:nth-child(2):before {
                    display: block;
                    position: absolute;
                    top: -35px;
                    left: -35px;
                    z-index: 10;
                    content: '';
                    width: 145px;
                    height: 141px;
                    background:  url('../../../assets/images/crown.png');
                    background-size: 100% 100%;
                    
                }
                &:nth-child(1):after {
                    display: block;
                    position: absolute;
                    right: 0;
                    z-index: 10;
                    content: '';
                    width: 3px;
                    height: 275px;
                    background:  url('../../../assets/images/line.png');
                    background-size: 100% 100%;
                }
                &:nth-child(2):after {
                    display: block;
                    position: absolute;
                    right: 0;
                    z-index: 10;
                    content: '';
                    width: 3px;
                    height: 275px;
                    background:  url('../../../assets/images/line.png');
                    background-size: 100% 100%;
                }

            }
        }

        button {
            position: absolute;
            bottom: 20px;
            width: 757px;
            height: 156px;
            background: url('../../../assets/images/start_btn.png');
            background-size: 100% 100%;
        }
    }      

</style>
