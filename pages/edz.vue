<template>
<div>
<div id="loading1" class="loading"></div>
<div id="loading2" class="loading"></div>
<div id="loading3" class="loading"></div>
<header class="header">
    <nuxt-link to="/"><img class="header-logo" src="~/assets/img/ZDW_logo.svg"></nuxt-link>
    <ul>
        <li><nuxt-link v-scroll-to="'#top'" to>Top</nuxt-link></li>
    </ul>
</header>
<div id="scroll1" class="scroll-target"></div>
<div id="scroll2" class="scroll-target"></div>
<div id="scroll3" class="scroll-target"></div>
<div id="top" class="edz2">
    <div id="luxy">
        <div class="edz-wrapper">
            <div class="edz-title">
                <div class="number-block">
                    <p class="number">02</p>
                </div>
                <div class="title-block">
                    <h1 class="title">
                        <div class="block">
                            <p>Everyday</p>
                        </div>
                        <div class="block">
                            <p>Zarusoba</p>
                        </div>
                    </h1>
                    <ul class="font">
                        <li class="block"><nuxt-link class="all" v-scroll-to="'#scroll1'" to><p>- 20</p></nuxt-link></li>
                        <li class="block"><nuxt-link class="all" v-scroll-to="'#scroll2'" to><p>- 40</p></nuxt-link></li>
                        <li class="block"><nuxt-link class="all" v-scroll-to="'#scroll3'" to><p>- 60</p></nuxt-link></li>
                        <li class="block"><nuxt-link class="all" v-scroll-to="'#scroll4'" to><p>- 80</p></nuxt-link></li>
                    </ul>
                </div>
            </div>
            <div class="edz-article" v-for="(edz, index) in edzs" :key="edz.id" :id="index + 1">
                <div class="article-img">
                    <p class="number">{{index + 1}}</p>
                    <a :href="edz.link" target="_blank" :aria-label="edz.title" rel="noopener noreferrer">
                        <img
                            :src="edz.image.url"
                            :width="edz.image.width"
                            :height="edz.image.height"
                            :alt="edz.title"
                            loading="lazy"
                            oncontextmenu="return false;"
                            onselectstart="return false;"
                            onmousedown="return false;"
                        >
                    </a>
                </div>
                <h3 class="article-title">{{ edz.title }}</h3>
                <p class="article-subtitle font">{{ edz.created }}</p>
            </div>
            <div class="article-all">
                <nuxt-link class="all" v-scroll-to="'#top'" to>
                    <div class="all-btn">
                        <p class="arrow">←</p>
                    </div>
                </nuxt-link>
                <p class="all-item">Top</p>
            </div>
        </div>
    </div>
    <div id="scrollbar-hrz"></div>
    <div id="scrollbar-hrz1"></div>
</div>
</div>
</template>

<script>
import { gql } from 'graphql-request';

export default {
    async asyncData({ $graphcms }) {
        const { edzs } = await $graphcms.request(
            gql`
                {
                    edzs(orderBy: date_DESC) {
                        title
                        image {
                            url
                            height
                            width
                        }
                        link
                        created
                    }
                }
            `
        );

        return { edzs };
    },
    head() {
        return {
            title: 'Everyday Zarusoba | Zarusoba DesignWorks',
            name: 'description', content: 'ぴくせる - Motion Graphics Designer',
        }
    },
    mounted(){
        luxy.cancel();
        luxy.init({
            scrollY: false
        })

        const scroll1 = document.getElementById('20')
        const scroll2 = document.getElementById('40')
        const scroll3 = document.getElementById('60')
        if(scroll1){
            const clientRect1 = scroll1.getBoundingClientRect();
            const px1 = window.scrollX + clientRect1.left;
            document.getElementById('scroll1').style.top = px1 + 'px';
        }
        if(scroll2){
            const clientRect2 = scroll2.getBoundingClientRect();
            const px2 = window.scrollX + clientRect2.left;
            document.getElementById('scroll2').style.top = px2 + 'px';
        }
        if(scroll3){
            const clientRect3 = scroll3.getBoundingClientRect();
            const px3 = window.scrollX + clientRect3.left;
            document.getElementById('scroll3').style.top = px3 + 'px';
        }

        window.addEventListener('scroll', this.scrollbar)
    },
    methods: {
        scrollbar() {
            const scrollbarScale = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            document.getElementById("scrollbar-hrz").style.transform = 'scaleX(' + scrollbarScale + ')';
        },
    }
}
</script>