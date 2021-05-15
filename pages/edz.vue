<template>

<div id="overflow">
<div id="loading1" class="loading"></div>
<div id="loading2" class="loading"></div>
<div id="loading3" class="loading"></div>

<header class="header">
    <nuxt-link to="/"><img class="header-logo" src="~/assets/img/ZDW_logo.svg"></nuxt-link>
    <ul>
        <li>
            <nuxt-link v-if="$device.isDesktop" v-scroll-to="'#top'" to>Top</nuxt-link>
            <nuxt-link v-else v-scroll-to="{ el: '#top', container: '#scroll' }" to>Top</nuxt-link>
        </li>
        <li class="toggle-switch">
            <input type="checkbox" name="dark-mode" id="btn-dark-mode" class="toggle-input">
            <div class="toggle-label">
                <img class="toggle-light" src="~/assets/img/sun-regular.svg">
                <img class="toggle-dark" src="~/assets/img/moon-solid.svg">
            </div>
        </li>
    </ul>
</header>

<div id="scroll1" class="scroll-target"></div>
<div id="scroll2" class="scroll-target"></div>
<div id="scroll3" class="scroll-target"></div>

<div id="top" class="edz2">
    <div id="luxy">
        <div id="scroll">
            <div class="edz-wrapper">
                <div class="edz-title">
                    <div class="number-block">
                        <h4 class="number">02</h4>
                    </div>
                    <div class="title-block">
                        <div class="title">
                            <div class="block">
                                <h1>Everyday</h1>
                            </div>
                            <div class="block">
                                <h1>Zarusoba</h1>
                            </div>
                        </div>
                        <ul v-if="$device.isDesktop" class="font">
                            <li class="block"><nuxt-link class="all" v-scroll-to="'#scroll1'" to><p>- 20</p></nuxt-link></li>
                            <li class="block"><nuxt-link class="all" v-scroll-to="'#scroll2'" to><p>- 40</p></nuxt-link></li>
                            <li class="block"><nuxt-link class="all" v-scroll-to="'#scroll3'" to><p>- 60</p></nuxt-link></li>
                            <li class="block"><nuxt-link class="all" v-scroll-to="'#scroll4'" to><p>- 80</p></nuxt-link></li>
                        </ul>
                        <ul v-else class="font">
                            <li class="block"><nuxt-link class="all" v-scroll-to="{ el: '#scroll1', container: '#scroll' }" to><p>- 20</p></nuxt-link></li>
                            <li class="block"><nuxt-link class="all" v-scroll-to="{ el: '#scroll2', container: '#scroll' }" to><p>- 40</p></nuxt-link></li>
                            <li class="block"><nuxt-link class="all" v-scroll-to="{ el: '#scroll3', container: '#scroll' }" to><p>- 60</p></nuxt-link></li>
                            <li class="block"><nuxt-link class="all" v-scroll-to="{ el: '#scroll4', container: '#scroll' }" to><p>- 80</p></nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="edz-article" v-for="(edz, index) in edzs" :key="edz.id" :id="index + 1">
                    <div class="article-img">
                        <h3 class="number">{{index + 1}}</h3>
                        <div class="img-block">
                            <a :href="edz.link" target="_blank" :aria-label="edz.title" rel="noopener noreferrer">
                                <picture>
                                    <source :srcset="edz.image.webp" type="image/webp"/>
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
                                </picture>
                            </a>
                        </div>
                    </div>
                    <h4 class="article-title">{{ edz.title }}</h4>
                    <p class="article-subtitle font">{{ edz.created }}</p>
                </div>
                <div class="article-all">
                    <nuxt-link v-if="$device.isDesktop" class="all" v-scroll-to="'#top'" to>
                        <div class="btn">
                            <h3 class="arrow">←</h3>
                        </div>
                    </nuxt-link>
                    <nuxt-link v-else class="all" v-scroll-to="{ el: '#top', container: '#scroll' }" to>
                        <div class="btn">
                            <h3 class="arrow">←</h3>
                        </div>
                    </nuxt-link>
                    <h5 class="all-item">Top</h5>
                </div>
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
                            webp: url(
                                transformation: {
                                    document: { output: { format: webp } }
                                }
                            )
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
        }
    },
    mounted(){
        //Darkmode toggle
        const btn = document.querySelector("#btn-dark-mode");

        btn.addEventListener("change", () => {
            if (btn.checked === true) {
                document.body.classList.add("dark-mode");
                localStorage.setItem('dark-mode-settings', 'dark');
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem('dark-mode-settings', 'light');
            }
        });

        if(localStorage.getItem('dark-mode-settings')==='dark') {
            document.body.classList.add("dark-mode");
        }else if (localStorage.getItem('dark-mode-settings')==='light') {
        //light modeの時
        }else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add("dark-mode");
        }

        //Luxy
        luxy.cancel();

        //Scroll
        const
        scroll1 = document.getElementById('20'),
        scroll2 = document.getElementById('40'),
        scroll3 = document.getElementById('60');

        var _ua = (function(u){
            return {
                Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
                    || u.indexOf("ipad") != -1
                    || u.indexOf('macintosh') > -1 && 'ontouchend' in document
                    || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
                    || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
                    || u.indexOf("kindle") != -1
                    || u.indexOf("silk") != -1
                    || u.indexOf("playbook") != -1,
                Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
                    || u.indexOf("iphone") != -1
                    || u.indexOf("ipod") != -1
                    || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
                    || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
                    || u.indexOf("blackberry") != -1
            }
        })(window.navigator.userAgent.toLowerCase());

        if(!_ua.Mobile&&!_ua.Tablet){
            luxy.init({
                scrollY: false
            })

            if(scroll1){
                const clientRect1 = scroll1.getBoundingClientRect();
                document.getElementById('scroll1').style.top = clientRect1.left + 'px';
            }
            if(scroll2){
                const clientRect2 = scroll2.getBoundingClientRect();
                document.getElementById('scroll2').style.top = clientRect2.left + 'px';
            }
            if(scroll3){
                const clientRect3 = scroll3.getBoundingClientRect();
                document.getElementById('scroll3').style.top = clientRect3.Left + 'px';
            }

            this.scrollbar();
            window.addEventListener('scroll', (this.scrollbar))
        } else {
            if(scroll1){
                const clientRect1 = scroll1.getBoundingClientRect();
                document.getElementById('scroll1').style.left = clientRect1.left + 'px';
            }
            if(scroll2){
                const clientRect2 = scroll2.getBoundingClientRect();
                document.getElementById('scroll2').style.left = clientRect2.left + 'px';
            }
            if(scroll3){
                const clientRect3 = scroll3.getBoundingClientRect();
                document.getElementById('scroll3').style.left = clientRect3.Left + 'px';
            }

            this.scrollbar2();
            document.getElementById("scroll").style.overflowX = 'scroll';
            document.getElementById("scroll").addEventListener('scroll', (this.scrollbar2))
        }
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.scrollbar);
        window.removeEventListener('scroll', this.scrollbar2);
    },
    methods: {
        scrollbar() {
            const scrollbarScale = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            document.getElementById("scrollbar-hrz").style.transform = 'scaleX(' + scrollbarScale + ')';
        },
        scrollbar2() {
            const scroll = document.getElementById("scroll");
            const scrollbarScale = scroll.scrollLeft / (scroll.scrollWidth - window.innerWidth);
            document.getElementById("scrollbar-hrz").style.transform = 'scaleX(' + scrollbarScale + ')';
        }
    },
}
</script>