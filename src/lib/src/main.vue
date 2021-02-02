<template>
    <div class="det-marquee" :style="`background-color:${config.bgColor};align-items:${config.alignItems}`">
        <div ref="myMarquee" class="marquee-list first-marquee"
             :style="`line-height:${config.fontSize}px;font-family:${config.fontFamily};font-size:${config.fontSize}px;letter-spacing:${config.letterSpacing}px;font-weight:${config.fontWeight};color:${config.color};transition-duration:${animationBool ? config.animationTimer + 'ms' : ''};left:${animationBool ? 'calc(-100% - ' + marqueeEleWidth + 'px' : 0};`">
            {{config.content}}
        </div>
        <div class="marquee-list first-marquee"
             :style="`line-height:${config.fontSize}px;font-family:${config.fontFamily};font-size:${config.fontSize}px;letter-spacing:${config.letterSpacing}px;font-weight:${config.fontWeight};color:${config.color};transition-duration:${animationBool ? config.animationTimer + 'ms' : ''};left:${animationBool ? 0 : 'calc(100% + ' + marqueeEleWidth + 'px'};`">
            {{config.content}}
        </div>
    </div>
</template>

<script>

    export default {
        name: "vue-loop-marquee",
        data() {
            return {
                config: {
                    /**
                     * @description marquee background color
                     * @type {String}
                     * @default bgColor = 'transparent'
                     * @example header = ['column1', 'column2', 'column3']
                     */
                    bgColor: 'transparent',
                    /**
                     * @description Up and down position
                     * @type {String}
                     * @default alignItems = 'center'
                     * @example alignItems = 'flex-start' | 'center' | 'flex-end'
                     */
                    alignItems: 'center',
                    /**
                     * @description text content
                     * @type {String}
                     * @default content = '这是一个跑马灯组件'
                     */
                    content: '这是一个跑马灯组件',
                    /**
                     * @description font size
                     * @type {Number<String>}
                     * @default fontSize = 16
                     */
                    fontSize: 16,
                    /**
                     * @description font family
                     * @type {String}
                     * @default fontFamily = 'Microsoft YaHei'
                     */
                    fontFamily: 'Microsoft YaHei',
                    /**
                     * @description letter spacing
                     * @type {Number<String>}
                     * @default fontFamily = 0
                     */
                    letterSpacing: 0,
                    /**
                     * @description font weight
                     * @type {Number<String>}
                     * @default fontWeight = 'normal'
                     * @example alignItems = 'normal' | 'bold' | 100
                     */
                    fontWeight: 'normal',
                    /**
                     * @description text color
                     * @type {String}
                     * @default fontWeight = '#000'
                     */
                    color: '#000',
                    /**
                     * @description animation execution time
                     * @type {Number}
                     * @default animationTimer = 5000
                     */
                    animationTimer: 5000,
                    /**
                     * @description pause time
                     * @type {Number}
                     * @default stopTimer = 1000
                     */
                    stopTimer: 1000,
                    /**
                     * @description loop
                     * @type {Boolean}
                     * @default loop = true
                     */
                    loop: true,
                },
                animationBool: false,
                marqueeEle: null,
                marqueeEleWidth: 144,
            }
        },
        mounted() {
            this.marqueeEle = this.$refs['myMarquee'];
            this.getVanNoticeBarWidth();
        },
        methods: {
            getVanNoticeBarWidth() {
                this.animationBool = true;
                const {marqueeEle,myHandle} = this;
                if (marqueeEle) {
                    this.marqueeEleWidth = marqueeEle.offsetWidth;
                    marqueeEle.addEventListener('transitionend', myHandle, false);
                }
            },
            myHandle(){
                const {config} = this;
                let timer = null;
                let stopTimer = config.stopTimer,
                    loop = config.loop;
                this.animationBool = false;
                clearTimeout(timer);
                if (loop) {
                    timer = setTimeout(() => {
                        this.animationBool = true;
                    }, stopTimer);
                }
            },
            changeEleWidth() {
                const {marqueeEle} = this;
                if (marqueeEle) this.marqueeEleWidth = marqueeEle.offsetWidth;
            }
        },
        beforeDestroy() {
            const {marqueeEle,myHandle} = this;
            marqueeEle.removeEventListener('transitionend',myHandle,false);
        },
        watch: {
            "config.loop"(loop) {
                const {marqueeEle} = this;
                if (loop && marqueeEle) {
                    this.getVanNoticeBarWidth();
                }
            },
            "config.content"() {
                this.changeEleWidth();
            },
            "config.fontSize"() {
                this.changeEleWidth();
            },
            "config.letterSpacing"() {
                this.changeEleWidth();
            }
        }
    }
</script>

<style scoped>
@import "main.css";
</style>