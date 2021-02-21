<template>
<div>
<div id="loading1" class="loading"></div>
<div id="loading2" class="loading"></div>
<div id="loading3" class="loading"></div>
<header class="header">
    <nuxt-link v-scroll-to="'#top'" to><img class="header-logo" src="~/assets/img/ZDW_logo.svg"></nuxt-link>
    <ul>
        <li><nuxt-link v-scroll-to="'#about'" to>About</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#projects'" to>Projects</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#contact'" to>Contact</nuxt-link></li>
        <li><nuxt-link to="/edz">+ EDZ</nuxt-link></li>
    </ul>
</header>
<div id="luxy">
    <div id="top" class="main">
        <div class="main-block">
            <p>OTHER</p>
            <p>GRAPHIC</p>
            <p>MOVIE</p>
            <p>DESIGN</p>
        </div>
        <h1 class="main-title">
            <div class="title-block">
                <p>We are,</p>
            </div>
            <div class="luxy-el title-block" data-horizontal="1" data-speed-x="5">
                <p class="title light">Zarusoba→</p>
            </div>
            <div class="luxy-el title-block" data-horizontal="1" data-speed-x="-5">
                <p class="title outline">+DESIGN</p>
            </div>
            <div class="luxy-el title-block" data-horizontal="1" data-speed-x="5">
                <p class="title light italic">Works.</p>
            </div>
        </h1>
    </div>
    <div class="about">
        <div class="background"></div>
        <div class="about-top">
            <div class="top-btn">
                <nuxt-link v-scroll-to="'#about'" to>
                    <p class="arrow">↓</p>
                </nuxt-link>
            </div>
            <p class="top-item">scroll</p>
        </div>
        <div class="about-img">
            <div class="luxy-el img-wrapper" data-horizontal="1" data-speed-x="-4">
                <img src="~/assets/img/moving_sakurai.png">
                <img src="~/assets/img/moving_pixel.png">
                <img src="~/assets/img/moving_cube.png">
                <img src="~/assets/img/moving_sugar.png">
            </div>
            <p class="luxy-el parallax-txt" data-horizontal="1" data-speed-x="-8">WHAT IS WHAT IS</p>
        </div>
        <h2 id="about" class="about-title">
            <p class="subtitle scroll">What is</p>
            <p class="title scroll">"Zarusoba DesignWorks"</p>
        </h2>
        <div class="about-content">
            <div class="content-img">
                <video
                    src="~/assets/img/video.mp4"
                    autoplay loop muted playsinline
                    oncontextmenu="return false;"
                    onselectstart="return false;"
                    onmousedown="return false;"
                >
                </video>
            </div>
            <div class="content-txt">
                <p class="em">・Zarusoba Design Works</p>
                <p>は、5人のクリエイターによる</p>
                <p class="em">・デザイナーズグループ</p>
                <p>です。</p>
                <p>音楽×映像のコンピレーションアルバム、</p>
                <p class="em">・M∞ving</p>
                <p>毎週日曜日に作品をアウトプットする</p>
                <p class="em">・EDZ（えぶりでいざるそば）</p>
                <p>等の活動をしています。</p>
            </div>
        </div>
    </div>
    <div id="projects" class="projects">
        <h2 class="projects-title">
            <p class="number">01</p>
            <p class="title">Projects</p>
        </h2>
        <div class="projects-content" v-for="(project, index) in projects" :key="project.id">
            <div class="content-img">
                <div class="img-block luxy-el" data-speed-y="2" data-offset="-200">
                    <img
                        :src="project.image1.url"
                        :width="project.image1.width"
                        :height="project.image1.height"
                        alt="image"
                        loading="lazy"
                        oncontextmenu="return false;"
                        onselectstart="return false;"
                        onmousedown="return false;"
                    >
                </div>
                <div class="img-block luxy-el" data-speed-y="4" data-offset="-350">
                    <img
                        class="square"
                        :src="project.image2.url"
                        :width="project.image2.width"
                        :height="project.image2.height"
                        alt="image"
                        loading="lazy"
                        oncontextmenu="return false;"
                        onselectstart="return false;"
                        onmousedown="return false;"
                    >
                </div>
                <div class="img-block luxy-el" data-speed-y="6" data-offset="-600">
                    <img
                        class="square"
                        :src="project.image3.url"
                        :width="project.image3.width"
                        :height="project.image3.height"
                        alt="image"
                        loading="lazy"
                        oncontextmenu="return false;"
                        onselectstart="return false;"
                        onmousedown="return false;"
                    >
                </div>
            </div>
            <div class="content-item">
                <div class="slider">
                    <h3 class="number">0{{ index + 1 }}.</h3>
                </div>
                <h3 class="title">{{ project.title }}</h3>
            </div>
            <p class="luxy-el parallax-txt" :style="`padding-left: ${ index * 400 }px;`" data-horizontal="1" data-speed-x="-10">{{ project.title }} {{ project.title }}</p>
        </div>
    </div>
    <div class="edz">
        <h2 class="edz-title">
            <p class="number">02</p>
            <p class="title">Everyday Zarusoba</p>
        </h2>
        <div class="viewport">
            <div class="edz-wrapper content">
                <div class="edz-article" v-for="(edz, index) in edzs" :key="edz.id">
                    <div class="article-img">
                        <p class="number">{{index + 1}}</p>
                        <a :href="edz.link" target="_blank" :aria-label="edz.title" rel="noopener noreferrer">
                            <img
                                :src="edz.image.url"
                                :width="edz.image.width"
                                :height="edz.image.height"
                                alt="video"
                                loading="lazy"
                                oncontextmenu="return false;"
                                onselectstart="return false;"
                                onmousedown="return false;"
                            >
                        </a>
                    </div>
                    <h3 class="article-title">{{ edz.title }}</h3>
                    <p class="article-subtitle">{{ edz.created }}</p>
                </div>
                <div class="article-all">
                    <nuxt-link class="all" to="/edz">
                        <div class="all-btn">
                            <p class="arrow">→</p>
                        </div>
                    </nuxt-link>
                    <p class="all-item">View all</p>
                </div>
            </div>
        </div>
    </div>
    <div class="members">
        <h2 class="members-title">
            <p class="number">03</p>
            <p class="title">Members</p>
        </h2>
        <div class="members-wrapper">
            <div class="members-content">
                <img class="content-logo" src="~/assets/img/seldo.jpg"/>
                <h3 class="content-title">SELDO</h3>
                <p class="content-subtitle font">Leader - Design / Motion Graphis / 3DCG</p>
            </div>
            <div class="members-content">
                <img class="content-logo" src="~/assets/img/sakurai.jpg"/>
                <h3 class="content-title">桜井貴志</h3>
                <p class="content-subtitle font">Member - Motion Graphis / 3DCG</p>
            </div>
            <div class="members-content">
                <img class="content-logo" src="~/assets/img/pixel.jpg"/>
                <h3 class="content-title">ぴくせる</h3>
                <p class="content-subtitle font">Member - Motion Graphics / 3DCG / Web Design</p>
            </div>
            <div class="members-content">
                <img class="content-logo" src="~/assets/img/cube.jpg"/>
                <h3 class="content-title">Cube</h3>
                <p class="content-subtitle font">Member - Motion Graphics / 3DCG / Programming</p>
            </div>
            <div class="members-content">
                <img class="content-logo" src="~/assets/img/sugar.jpg"/>
                <h3 class="content-title">Sugar</h3>
                <p class="content-subtitle font">Member - Motion Graphics / 3DCG</p>
            </div>
        </div>
    </div>
    <div id="contact" class="contact">
        <h2 class="contact-title">
            <p class="number">04</p>
            <p class="title">Contact</p>
        </h2>
        <div class="contact-content">
            <div class="content-item">
                <p class="subtitle font">Mail -</p>
                <a href="mailto:zarusobadesignworks@gmail.com" target="_blank" aria-label="EMail" rel="noopener noreferrer">
                    <h3 class="title">zarusobadesignworks@gmail.com</h3>
                </a>
            </div>
            <div class="content-item">
                <p class="subtitle font">Twitter -</p>
                <a href="https://twitter.com/Z_D_W_" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <h3 class="title">https://twitter.com/Z_D_W_</h3>
                </a>
            </div>
        </div>
    </div>
    <footer class="footer font">
        <p class="copyright">© 2021 Zarusoba Design Works</p>
        <nuxt-link v-scroll-to="'#top'" to class="top"><p>Top</p></nuxt-link>
    </footer>
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
                    edzs( orderBy: date_DESC, first: 5 ) {
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
        const { projects } = await $graphcms.request(
            gql`
                {
                    projects( orderBy: date_DESC ) {
                        title
                        image1 {
                            url
                            height
                            width
                        }
                        image2 {
                            url
                            height
                            width
                        }
                        image3 {
                            url
                            height
                            width
                        }
                    }
                }
            `
        );

        return { edzs,projects };
    },
    data() {
        return {
            number: 1
        };
    },
    head() {
        return {
            name: 'description', content: 'Zarusoba DesignWorksは、5人のクリエイターによるデザイナーグループです。',
        }
    },
    mounted(){
        //Luxy
        luxy.cancel();
        luxy.init();

        //ScrollBooster
        new ScrollBooster({
            viewport: document.querySelector('.viewport'),
            content: document.querySelector('.content'),
            scrollMode: 'transform',
            direction: 'horizontal',

        });
    },
    methods: {
        addOne() {
            this.number = this.number + 1;
        }
    }
}
</script>