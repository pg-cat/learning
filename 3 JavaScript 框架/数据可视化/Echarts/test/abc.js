option = {
  visualMap: [
    {
      ...,
      inRange: {          // 选中范围中的视觉配置
        colorLightness: [0.2, 1], // 映射到明暗度上。也就是对本来的颜色进行明暗度处理。
        // 本来的颜色可能是从全局色板中选取的颜色，visualMap组件并不关心。
        symbolSize: [30, 100]
      },
      ...
      },
    ...
  ]
};