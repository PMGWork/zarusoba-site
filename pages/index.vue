<template>
<div>

<div id="loading1" class="loading"></div>
<div id="loading2" class="loading"></div>
<div id="loading3" class="loading"></div>

<header class="header">
    <nuxt-link v-scroll-to="'#top'" to><img class="header-logo" src="~/assets/img/ZDW_logo.svg" alt="logo"></nuxt-link>
    <ul>
        <li class="hide"><nuxt-link v-scroll-to="'#about'" to>About</nuxt-link></li>
        <li class="hide"><nuxt-link v-scroll-to="'#projects'" to>Projects</nuxt-link></li>
        <li class="hide"><nuxt-link v-scroll-to="'#members'" to>Members</nuxt-link></li>
        <li><nuxt-link to="/edz">+ EDZ</nuxt-link></li>
        <li class="toggle-switch">
            <input type="checkbox" name="dark-mode" id="btn-dark-mode" class="toggle-input">
            <div class="toggle-label">
                <img class="toggle-light" src="~/assets/img/sun-regular.svg">
                <img class="toggle-dark" src="~/assets/img/moon-solid.svg">
            </div>
        </li>
    </ul>
</header>

<div id="luxy">
    <div id="top" class="main">
        <div class="main-block">
            <h5>OTHER</h5>
            <h5>GRAPHIC</h5>
            <h5>MOVIE</h5>
            <h5>DESIGN</h5>
        </div>
        <div class="main-title">
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
        </div>
    </div>
    <div class="about">
        <div class="background"></div>
        <div class="about-top">
            <div class="btn">
                <nuxt-link v-scroll-to="'#about'" to>
                    <h3 class="arrow">↓</h3>
                </nuxt-link>
            </div>
            <h5 class="top-item">scroll</h5>
        </div>
        <div class="about-img">
            <div class="luxy-el img-wrapper" data-horizontal="1" data-speed-x="-4">
                <picture>
                    <source srcset="~/assets/img/moving_sakurai.webp" type="image/webp"/>
                    <img src="~/assets/img/moving_sakurai.png" width="640" height="480" alt="moving" loading="lazy"/>
                </picture>
                <picture>
                    <source srcset="~/assets/img/moving_pixel.webp" type="image/webp"/>
                    <img src="~/assets/img/moving_pixel.png" width="640" height="480" alt="moving" loading="lazy"/>
                </picture>
                <picture>
                    <source srcset="~/assets/img/moving_cube.webp" type="image/webp"/>
                    <img src="~/assets/img/moving_cube.png" width="640" height="480" alt="moving" loading="lazy"/>
                </picture>
                <picture>
                    <source srcset="~/assets/img/moving_sugar.webp" type="image/webp"/>
                    <img src="~/assets/img/moving_sugar.png" width="640" height="480" alt="moving" loading="lazy"/>
                </picture>
            </div>
            <p class="luxy-el parallax-txt" data-horizontal="1" data-speed-x="-8">WHAT IS WHAT IS</p>
        </div>
        <div id="about" class="about-title">
            <h5 class="subtitle scroll">What is</h5>
            <h3 class="title scroll">"Zarusoba DesignWorks"</h3>
        </div>
        <div class="about-content">
            <div class="content-img">
                <div class="img-block luxy-el" data-speed-y="5">
                    <video
                        src="~/assets/img/video.mp4"
                        autoplay loop muted playsinline
                        oncontextmenu="return false;"
                        onselectstart="return false;"
                        onmousedown="return false;"
                    >
                    </video>
                </div>
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
        <div class="projects-title">
            <h6 class="number font">01</h6>
            <h2 class="title">Projects</h2>
        </div>
        <div class="projects-content" v-for="(project, index) in projects" :key="project.id">
            <div class="content-img">
                <div class="img-block">
                    <picture>
                        <source :srcset="project.image1.webp" type="image/webp"/>
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
                    </picture>
                </div>
                <div class="img-block">
                    <picture>
                        <source :srcset="project.image2.webp" type="image/webp"/>
                        <img
                            :src="project.image2.url"
                            :width="project.image2.width"
                            :height="project.image2.height"
                            :alt="project.title"
                            loading="lazy"
                            oncontextmenu="return false;"
                            onselectstart="return false;"
                            onmousedown="return false;"
                        >
                    </picture>
                </div>
                <div class="img-block">
                    <picture>
                        <source :srcset="project.image3.webp" type="image/webp"/>
                        <img
                            :src="project.image3.url"
                            :width="project.image3.width"
                            :height="project.image3.height"
                            :alt="project.title"
                            loading="lazy"
                            oncontextmenu="return false;"
                            onselectstart="return false;"
                            onmousedown="return false;"
                        >
                    </picture>
                </div>
            </div>
            <div class="content-item">
                <h2 class="number">0{{ index + 1 }}.</h2>
                <h3 class="title">{{ project.title }}</h3>
            </div>
            <p class="luxy-el parallax-txt" :style="`padding-left: ${ index * 400 }px;`" data-horizontal="1" data-speed-x="-10">{{ project.title }} {{ project.title }}</p>
        </div>
    </div>
    <div class="edz">
        <div class="edz-title">
            <h6 class="number font">02</h6>
            <h2 class="title">Everyday Zarusoba</h2>
        </div>
        <div class="viewport">
            <div class="edz-wrapper content">
                <div class="edz-article" v-for="(edz, index) in edzs" :key="edz.id">
                    <div class="article-img">
                        <h3 class="number">{{ index + 1 }}</h3>
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
                    <h4 class="article-title">{{ edz.title }}</h4>
                    <p class="article-subtitle font">{{ edz.created }}</p>
                </div>
                <div class="article-all">
                    <nuxt-link class="all" to="/edz">
                        <div class="btn">
                            <h3 class="arrow">→</h3>
                        </div>
                    </nuxt-link>
                    <h5 class="all-item">View all</h5>
                </div>
            </div>
        </div>
    </div>
    <div id="members" class="members">
        <div class="members-title">
            <h6 class="number font">03</h6>
            <h2 class="title">Members</h2>
        </div>
        <div class="members-wrapper">
            <div class="members-content">
                <a href="https://twitter.com/sl_dndn" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <picture>
                        <source srcset="~/assets/img/seldo.webp" type="image/webp"/>
                        <img class="content-logo" src="~/assets/img/seldo.jpg" height="200" width="200" alt="icon" loading="lazy"/>
                    </picture>
                </a>
                <div class="title-block">
                    <h3 class="content-title">SELDO</h3>
                    <p class="content-subtitle font">Leader - Design / Motion Graphics / 3DCG</p>
                </div>
            </div>
            <div class="members-content">
                <a href="https://twitter.com/sakurai_tacker" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <picture>
                        <source srcset="~/assets/img/sakurai.webp" type="image/webp"/>
                        <img class="content-logo" src="~/assets/img/sakurai.jpg" height="200" width="200" alt="icon" loading="lazy"/>
                    </picture>
                </a>
                <div class="title-block">
                    <h3 class="content-title">桜井貴志</h3>
                    <p class="content-subtitle font">Member - Motion Graphics / 3DCG</p>
                </div>
            </div>
            <div class="members-content">
                <a href="https://twitter.com/pmgwork" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <picture>
                        <source srcset="~/assets/img/pixel.webp" type="image/webp"/>
                        <img class="content-logo" src="~/assets/img/pixel.jpg" height="200" width="200" alt="icon" loading="lazy"/>
                    </picture>
                </a>
                <div class="title-block">
                    <h3 class="content-title">ぴくせる</h3>
                    <p class="content-subtitle font">Member - Motion Graphics / 3DCG / Web Design</p>
                </div>
            </div>
            <div class="members-content">
                <a href="https://twitter.com/cubezeero" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <picture>
                        <source srcset="~/assets/img/cube.webp" type="image/webp"/>
                        <img class="content-logo" src="~/assets/img/cube.jpg" height="200" width="200" alt="icon" loading="lazy"/>
                    </picture>
                </a>
                <div class="title-block">
                    <h3 class="content-title">Cube</h3>
                    <p class="content-subtitle font">Member - Motion Graphics / 3DCG / Programming</p>
                </div>
            </div>
            <div class="members-content">
                <a href="https://twitter.com/sugar_mgx" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <picture>
                        <source srcset="~/assets/img/sugar.webp" type="image/webp"/>
                        <img class="content-logo" src="~/assets/img/sugar.jpg" height="200" width="200" alt="icon" loading="lazy"/>
                    </picture>
                </a>
                <div class="title-block">
                    <h3 class="content-title">Sugar</h3>
                    <p class="content-subtitle font">Member - Motion Graphics / 3DCG / XR Design</p>
                </div>
            </div>
        </div>
    </div>
    <div id="contact" class="contact">
        <div class="contact-title">
            <h6 class="number font">04</h6>
            <h2 class="title">Contact</h2>
        </div>
        <div class="contact-content">
            <div class="content-item">
                <p class="subtitle font">Mail -</p>
                <a href="mailto:zarusobadesignworks@gmail.com" target="_blank" aria-label="EMail" rel="noopener noreferrer">
                    <h5 class="title">zarusobadesignworks@gmail.com</h5>
                </a>
            </div>
            <div class="content-item">
                <p class="subtitle font">Twitter -</p>
                <a href="https://twitter.com/Z_D_W_" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <h5 class="title">https://twitter.com/Z_D_W_</h5>
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
        const { projects } = await $graphcms.request(
            gql`
                {
                    projects( orderBy: date_DESC ) {
                        title
                        image1 {
                            webp: url(
                                transformation: {
                                    document: { output: { format: webp } }
                                }
                            )
                            url
                            height
                            width
                        }
                        image2 {
                            webp: url(
                                transformation: {
                                    document: { output: { format: webp } }
                                }
                            )
                            url
                            height
                            width
                        }
                        image3 {
                            webp: url(
                                transformation: {
                                    document: { output: { format: webp } }
                                }
                            )
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
    head() {
        return {
            meta: [
                { name: "description", content: "Zarusoba DesignWorksは、5人のクリエイターによるデザイナーグループです。" },
            ]
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
            luxy.init();
        } else {
            luxy.init({
                wrapperSpeed: 1
            });
        }

        //ScrollBooster
        new ScrollBooster({
            viewport: document.querySelector('.viewport'),
            content: document.querySelector('.content'),
            scrollMode: 'transform',
            direction: 'horizontal',
        });
    }
}
</script>