<template>
<div>
<header class="header">
    <nuxt-link v-scroll-to="'#top'" to><img class="header-logo" src="~/assets/img/ZDW_logo.svg"></nuxt-link>
    <ul>
        <li><nuxt-link v-scroll-to="'#about'" to>About</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#projects'" to>Projects</nuxt-link></li>
        <li><nuxt-link v-scroll-to="'#contact'" to>Contact</nuxt-link></li>
        <li>+ EDZ</li>
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
            <p>We are,</p>
            <p class="luxy-el title light" data-horizontal="1" data-speed-x="5">Zarusoba→</p>
            <p class="luxy-el title outline" data-horizontal="1" data-speed-x="-5">+DESIGN</p>
            <p class="luxy-el title light italic" data-horizontal="1" data-speed-x="5">Works.</p>
        </h1>
    </div>
    <div class="about">
        <div class="background"></div>
        <nuxt-link v-scroll-to="'#about'" to>
            <div class="about-top">
                <div class="top-btn">
                    <p>↓</p>
                </div>
                <p class="top-item">scroll</p>
            </div>
        </nuxt-link>
        <div class="about-img">
            <div class="luxy-el img-wrapper" data-horizontal="1" data-speed-x="-4">
                <img src="~/assets/img/moving_sakurai.png">
                <img src="~/assets/img/moving_pixel.png">
                <img src="~/assets/img/moving_cube.png">
                <img src="~/assets/img/moving_sakurai.png">
            </div>
            <p class="luxy-el parallax-txt" data-horizontal="1" data-speed-x="-8">WHAT IS WHAT IS</p>
        </div>
        <h2 id="about" class="about-title">
            <p class="subtitle">What is</p>
            <p class="title">"Zarusoba DesignWorks"</p>
        </h2>
        <div class="about-content">
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
        <div class="projects-content">
            <div class="content-img">
                <img src="~/assets/img/moving_cube.png">
                <img class="square" src="~/assets/img/moving_sakurai1.png">
                <img class="square" src="~/assets/img/moving_pixel1.png">
            </div>
            <div class="content-item">
                <div class="slider">
                    <h3 class="number">01.</h3>
                    <div class="slider-wrapper">
                        <img class="before" src="~/assets/img/ic_navigate_before_24px.svg">
                        <img class="next" src="~/assets/img/ic_navigate_next_24px.svg">
                    </div>
                </div>
                <h3 class="title">M∞ving 01</h3>
            </div>
            <p class="luxy-el parallax-txt" data-horizontal="1" data-speed-x="-8">M∞VING 01 M∞VING 01</p>
        </div>
    </div>
    <div class="edz">
        <h2 class="edz-title">
            <p class="all font">- view all</p>
            <p class="number">02</p>
            <p class="title">Everyday Zarusoba</p>
        </h2>
        <div class="viewport">
            <div class="edz-wrapper content">
                <div class="edz-article">
                    <div class="article-img">
                        <p class="number">01</p>
                        <img src="~/assets/img/city.png">
                    </div>
                    <h3 class="article-title">City</h3>
                    <p class="article-subtitle">@SELDO</p>
                </div>
                <div class="edz-article">
                    <div class="article-img">
                        <p class="number">02</p>
                        <img src="~/assets/img/dpm.png">
                    </div>
                    <h3 class="article-title">DPM_20210131</h3>
                    <p class="article-subtitle">@SELDO</p>
                </div>
                <div class="edz-article">
                    <div class="article-img">
                        <p class="number">03</p>
                        <img src="~/assets/img/ぬ.png">
                    </div>
                    <h3 class="article-title">ぬ</h3>
                    <p class="article-subtitle">@Sugar</p>
                </div>
                <div class="edz-article">
                    <div class="article-img">
                        <p class="number">04</p>
                        <img src="~/assets/img/焦土.jpg">
                    </div>
                    <h3 class="article-title">焦土</h3>
                    <p class="article-subtitle">@桜井貴志</p>
                </div>
                <div class="edz-article">
                    <div class="article-img">
                        <p class="number">05</p>
                        <img src="~/assets/img/iffor.png">
                    </div>
                    <h3 class="article-title">確定したifと 終着したforと</h3>
                    <p class="article-subtitle">@ぴくせる</p>
                </div>
                <div class="article-all">
                    <div class="all-btn">
                        <p>→</p>
                    </div>
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
                <h3 class="title">Zarusobadesignworks@gmail.com</h3>
            </div>
            <div class="content-item">
                <p class="subtitle font">Twitter -</p>
                <h3 class="title">https://twitter.com/Z_D_W_</h3>
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
export default {
    mounted(){
        new ScrollBooster({
            viewport: document.querySelector('.viewport'),
            content: document.querySelector('.content'),
            scrollMode: 'transform',
            direction: 'horizontal',
            
        });

        luxy.init({
        })
    }
}
</script>
