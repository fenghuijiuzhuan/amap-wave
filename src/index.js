/*
 * @path        : \amap-wave\src\index.js
 * @message     : 
 * @Author      : yvangod
 */

/*地图水波扩散特效 Start*/
let requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
let cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
/**
 * sos告警圆形范围绘制(只有存在map对象时才可以使用)
 * @param map 添加特效的地图实例
 * @param radius 半径
 * @param level 层数
 * @param point 高德位置对象，LngLat
 * @param color  颜色对象，包含{fillColor,fillOpacity}
 * @constructor
 */

class ShowWave {
  constructor(map, radius, level, point, color) {

    this.radius = radius;
    this.level = new Number(level);
    this.point = point;
    this.color = color;
    this.map = map;
    if (Number.isNaN(this.level)) {
      this.level = 1;
    } //至少1层

    if (!this.color || !this.color.fillColor) {
      this.color = {
        fillColor: "blue",
        fillOpacity: 0.3 //默认初始透明度0.3
      };
    }

    //计算平均每段扩展距离的透明度
    this.endOpacity = 0; //终止透明度设置为0
    this.speedOpacity = (this.color.fillOpacity - this.endOpacity) / this.radius; //每米的透明度


    //按层数循环构造覆盖物，并加在图片上
    this.circles = new Array();
    for (let i = 0; i < this.level; i++) {
      var circle = new AMap.Circle({
        center: point,
        icon: 'direct.png',
        radius: radius,
        fillColor: this.color.fillColor,
        fillOpacity: this.color.fillOpacity,
        strokeWeight: 0,
        strokeColor: this.color.fillColor, //线条颜色，为了保证感觉无线条，和填充颜色一致即可
        strokeOpacity: this.color.fillOpacity, //线条透明度，为了保证感觉无线条，和填充颜色透明度一致即可
        zIndex: 50
      });
      this.circles.push(circle);
      circle.setMap(this.map);
    }

    this.clock = new Array(this.level);
  }
  /**
   * 动画启动
   * @param distance 每轮动画播放总时间（单位ms）
   * @param t0 扩散一次所需的时间
   */
  start(distance, t0) {
    let _self = this;

    /**
     * 定义动画函数
     * @param startTime 启动的初始时间
     * @param circle 圆形覆盖物对象
     * @param index 序号
     */
    function animateStart(startTime, circle, index) {
      //计算时间差
      let time = new Date().getTime() - startTime;

      if (time < 0) {
        circle.setOptions({
          radius: 0,
          strokeOpacity: 0,
          fillOpacity: 0
        })
        //如果未达到执行实现则直接等待
      } else if (time >= t0) {
        // //达到运行时间之后
        // //设置圆形覆盖物的样式
        circle.setOptions({
          radius: 0,
          strokeOpacity: 0,
          fillOpacity: 0
        }); //透明度

        startTime = new Date().getTime(); //起始时间设置为当前时间加上1倍的时间间隔
      } else {
        //计算当前半径
        //匀减速运动下，每隔t时间，应该扩散的半径:
        //r=r0*(2*t*t0-t*t)/t0
        //其中，r0为最终的扩散半径，即this.radius
        let r = Math.floor(_self.radius * (2 * time / t0 - time * time / t0 / t0))
        //计算透明度
        let opacity = parseFloat((_self.color.fillOpacity - _self.speedOpacity * r).toFixed(5))

        //设置圆形覆盖物的样式
        circle.setOptions({
          radius: r,
          strokeOpacity: opacity,
          fillOpacity: opacity
        });

      }
      _self.clock[index] = window.requestAnimationFrame(animateStart.bind(null, startTime, circle, index));
    }

    //循环每一层执行动画
    for (let [index, circle] of this.circles.entries()) {
      animateStart(new Date().getTime() + index / this.level * distance, circle, index);
    }
  }
  /**
   * 停止动画.
   */
  stop() {
    for (let caf of this.clock) {
      window.cancelAnimationFrame(caf);
    }

    //重置覆盖物样式
    for (let circle of this.circles) {
      circle.setOptions({
        radius: 0,
        strokeOpacity: this.color.fillOpacity,
        fillOpacity: this.color.fillOpacity
      });
    }
  }
  /**
   * 移除覆盖物.
   */
  remove() {
    //停止动画
    for (let caf of this.clock) {
      window.cancelAnimationFrame(caf);
    }

    for (let circle of this.circles) {
      this.map.remove(circle);
    }
  }
}

export default ShowWave
