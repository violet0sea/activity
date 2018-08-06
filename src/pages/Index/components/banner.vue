<template>
    <div class="banner">
        <img 
            src="../../../assets/images/share_icon.png"
            @click="gotoShare" />
        <p class="banner-desc">Transfer files using Mi Drops to get coins. 100 people with most coins will get a chance to win a prize!</p>
        <p 
            class="more-details"
            @click="gotoDetails">Details&nbsp; &nbsp;&nbsp;>></p>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {
        gotoDetails() {
            this.$router.push({
                name: 'Rules',
                params: {
                    from: 'Index'
                }
            });
        },
        gotoShare() {
            console.log(this.$bus)
            this.$bus.$emit('showPopUp');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .container {

        .banner {
            position: relative;
            height: 1065px;
            background: url('../../../assets/images/banner.jpg');
            background-size: 100% 100%;

            img {
                position: absolute;
                top: 84px;
                right: 61px;
                width: 67px;
                height: 71px;

            }

            .banner-desc {
                position: absolute;
                margin: 0 75px;
                bottom: 74px;
                font-size: 32px * 2 / 3; /*px*/
                color: #ffe6aa;
            }

            .more-details {
                position: absolute;
                right: 75px;
                bottom: 30px;
                font-size: 35px * 2 / 3; /*px*/
                font-weight: bold;
                color: #ffffff;
            }
        }
       
    }

</style>
