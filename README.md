<img src="./src/assets/images/dome.gif" alt="组件演示dome"/>

# vue-loop-marquee
这是一个跑马灯轮播组件，支持修改跑马灯字体样式、是否循环、跑马灯停顿时间、滚动一圈时间、跑马灯显示位置等配置。

## 安装
```
npm安装
npm install vue-loop-marquee

yarn安装
yarn add vue-loop-marquee
```

## 使用
```
全局
import vueLoopMarquee from 'vue-loop-marquee'
Vue.use(vueLoopMarquee);

局部
import vueLoopMarquee from 'vue-loop-marquee'
components{vueLoopMarquee};

组件位置
<vue-loop-marquee :options="{}" />
```

## 配置
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
   * @example alignItems = 'top' | 'center' | 'bottom'
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
