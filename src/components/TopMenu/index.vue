<template>
    <div class="topMenu">
        <button class="backBtn" @touchend="goback"></button>
        <slot></slot>      
    </div>
</template>

<script>
    export default {
        name: "topMenu",
        data: function() {
            return {
                fromPath: 'Index'
            };
        },
        created() {
            const params = this.$route.params;
            const fromPath = params.from;

            if(fromPath) {
                this.fromPath = fromPath;
            }      
        },
        methods: {
            goback() {
                this.$router.push({
                    name: this.fromPath
                });
            }
        }
    };
</script>

<style scoped lang="scss">
    @media screen and (min-width: 1081px) {
        .topMenu {
            width: 1080px;
            margin: 0 auto;
        }
    }
    .topMenu{
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        height: 160px;
        background-color: #e83631;
        text-align: center;
        font-size: 40px; /*px*/
        font-weight: 500;
        z-index: 100;

        .backBtn{
            position: absolute;
            display: inline-block;
            left: 49px;
            top: 55px;
            width:30px;
            height:48px;
            background:url('../../assets/images/back.png') no-repeat left top;
            background-size:contain;
        }
    }
</style>