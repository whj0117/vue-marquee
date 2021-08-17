# vue-loop-marquee

## npm安装
```
npm i vue-loop-marquee
```

## 使用
```
main.js引用
import vueLoopMarquee from 'vue-loop-marquee'
Vue.use(vueLoopMarquee);

.vue页面中使用
<vue-loop-marquee :options="option"></vue-loop-marquee>
```

## 配置项
```
{
  /**
     * @description marquee background color
     * @type {String}
     * @default bgColor = 'transparent'
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
}
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
