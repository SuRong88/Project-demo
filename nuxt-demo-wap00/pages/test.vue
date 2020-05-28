<template>
    <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
    <div class="swiper-box" v-swiper:mySwiper1="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in 4">{{ item }}</div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
</template>

<script>
export default {
    fetch({ app }) {
        console.log('fetch');
        console.log(app.$axios);
    },
    asyncData({ app }) {
        console.log('asyncData');
        console.log(app.$axios);
    },
    created() {
        console.log('created');
        console.log(this.$axios);
        this.$successToast('成功')
    },
    mounted() {
        // this.mySwiper1.slideTo(3);
    },
    data() {
        return {
            swiperOption: {
                loop: false,
                speed: 800,
                direction: 'vertical',
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true
                },
                on: {
                    slideChange() {
                        // console.log('onSlideChangeEnd', this);
                    },
                    tap() {
                        // console.log('onTap', this);
                    }
                }
            }
        };
    }
};
</script>

<style lang="less" scoped>
.swiper-box {
    height: 100vh;
    width: 100vw;
    .swiper-slide {
        text-align: center;
        font-size: 38px;
        font-weight: 700;
        background-color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-pagination {
        & .swiper-pagination-bullet {
            background-color: red;
        }
    }
}
</style>
