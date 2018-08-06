<template>
    <div class="footer">
        <span class="info_item">
            100+
        </span>
        <span class="info_item username" @click="changeName">
            user100
        </span>
        <span class="info_item button" @click="gotoCoins">
            10000
        </span>
        <Dialog v-if="showDialog" />
    </div>
</template>

<script>
import Dialog from '@/components/Dialog';

export default {
    data() {
        return {
            showDialog: false
        }
    },
    components: {
        Dialog
    },
    created() {
        this.$bus.$on('closeDialog', this.handleCloseDialog);
    },
    beforeDestory() {
        this.$bus.$off('closeDialog', this.handleCloseDialog);
    },
    methods: {
        changeName() {
            console.log('changeName');
            this.showDialog = true;
        },
        gotoCoins() {
            this.$router.push({
                name: 'CoinsDetails',
                params: {
                    from: 'Index'
                }
            });
        },
        handleCloseDialog() {
            this.showDialog = false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        display: flex;
        padding-left: 74px;
        padding-right: 63px;
        height: 141px;
        box-sizing: border-box;
        font-size: 50px * 2 / 3; /*px*/
        font-weight: bold;
        color: #8d0e09;
        background: linear-gradient(to bottom, #ffe079, #ffd13d); 
        
        .info_item {
            display: inline-block;
        }
        
        .username:after {
            position: relative;
            top: 5px;
            content: '';
            display: inline-block;
            width: 46px;
            height: 46px;
            background: url('../../../assets/images/rename.png');
            background-size: 100% 100%;
        }

        .button {
            position: relative;
            width: 261px;
            height: 87px;
            padding-left: 60px;
            box-sizing: border-box;
            line-height: 87px;
            text-align: center;
            color: #ffffff;
            font-size: 45px * 2 / 3; /*px*/
            background: url('../../../assets/images/coin_btn.png');
            background-size: 100% 100%;

            &:before {
                position: absolute;
                left: 10px;
                top: 20px;
                content: '';
                display: inline-block;
                width: 85px;
                height: 49px;
                background: url('../../../assets/images/coins_detail.png');
                background-size: 100% 100%;
            }
            
        }

       
    }

</style>
