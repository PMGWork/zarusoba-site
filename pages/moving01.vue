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
    </ul>
</header>

<div id="luxy">
    <div id="top" class="moving">
        <h4 class="moving-title">M∞ving 01 ダウンロードについて</h4>
        <div class="moving-content">
            <p class="txt font">M∞ving 01のご購入、ありがとうございます。</p>
            <p class="txt font">音源、および映像のダウンロードに関してですが、DLカードの有効期限切れてしまいましたので、現在ダウンロードができない状態にあります。</p>
            <p class="txt font">対策として、DLカードのシリアルコードを下記のフォームに添付していただき、メール、またはTwitterのDMにて映像、音源データをお渡しする形をとらせていただきます。</p>
            <p class="txt font">お手数をおかけしてしまい、大変申し訳ございません。</p>
            <div class="content-item">
                <a href="https://forms.gle/E8dWvwsH2fWNbamT9" target="_blank" aria-label="form" rel="noopener noreferrer">
                    <h5 class="title">Form</h5>
                </a>
            </div>
        </div>

    </div>
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
        //Luxy
        luxy.cancel();

        var _ua = (function(u){
            return {
                Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
                    || u.indexOf("ipad") != -1
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
    }
}
</script>