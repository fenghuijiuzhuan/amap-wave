<!--
 * @path        : \amap-wave\README.md
 * @message     : 
 * @Author      : yvangod
-->
# 基于高德地图jsapi的水波扩散特效

这是我很早之前做的一个效果
此特效借鉴了网上的某篇博客，进行了优化修改
博客地址暂时忘记了，有同学发现了可以联系我将地址加上来

## npm安装
```
npm install amap-wave
```
### 模块化导入
```
import AMapWave from 'amap-wave'
```
### 在html中的引入
```
<script src="/dist/amap-wave.js"></script>
```
### 示例
```
var map = new AMap.Map('container', {
  zoom: 11,//级别
  center: [116.397428, 39.90923],//中心点坐标
  viewMode: '3D'//使用3D视图
});

<!-- 实例化 -->
var wave = new AMapWave(map, 5000, 3, map.getCenter(), {
  fillColor: '#1fc315',
  fillOpacity: 0.8
})
<!-- 开始动画 -->
wave.start(5000, 2500)
<!-- 暂停动画 -->
wave.stop()
<!-- 销毁 -->
wave.remove()
```
## 参数
- map 高德地图实例对象 
- radius Number，半径，单位米
- level Number，级数，一次有几个圆扩散
- point LngLat Object，位置position即中心点
- style Object{fillColor: String, fillOpacity: Number} 样式对象，设置圆形的填充颜色以及扩散边缘的透明度
## 方法
- start(distance|Number, t0|Number) 开始动画
- - distance 播放完成一轮动画（所有层全部播放完毕）的时间
- - t0 从中心扩散到边界的时间
- stop 暂停
- remove 销毁
