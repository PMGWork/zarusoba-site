import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
    duration: 1000,
    easing: [.7, 0, .3, 1],
    offset: -100,
    x: true,
    y: true
})