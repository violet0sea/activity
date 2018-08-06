<template>
    <div class="topMenu">
        <p>loadmore data...</p>
    </div>
</template>

<script>
    export default {
        name: "topMenu",
        data: function() {
            return {
                timer: null
            };
        },
        mounted() {
            window.addEventListener('wheel', this.handleScroll, false);
        },
        destroyed() {
            console.log('destory');
            window.removeEventListener('wheel', this.handleScroll);
        },
        methods: {

            handleScroll() {
               
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    const innerHeight = window.innerHeight;
                    const app = document.querySelector('#app');
                    const scrollTop = app.scrollTop || document.documentElement.scrollTop;
                    const pageHeight = app.scrollHeight;
                    console.log(innerHeight, scrollTop, pageHeight)
                    if(innerHeight + scrollTop >= pageHeight - 10) {
                        console.log('loade more....');
                        // typeof handleLoadMore === 'function' && handleLoadMore() 
                    }
                },50);
            }
            
        }
    };
</script>

<style scoped lang="scss">
    .topMenu{
        position: relative;
        width:100%;
        height:120px;
        line-height:120px;
        background-color:#122d6b;
        text-align: center;
        font-size: 40px; /*px*/
        font-weight: 500;
        color:#dfcc9a;

        .backBtn{
            position: absolute;
            left:49px;
            top:34px;
            width:30px;
            height:52px;
            // background:url('../../assets/backBtn.png') no-repeat left top;
            // background-size:contain;
        }
    }
</style>