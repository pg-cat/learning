# flex 布局

	flex 布局，只适用于前后台分离的单页面 app ，不适用于多页面 app

	他和浮动的作用类似，都是用来排列页面的元素的

	一般将父级元素转化为弹性盒子之后，里面子元素会水平排列，并且默认宽度为 0 ，默认高度为 100%

## flex-direction 内部子元素的排列方式

	row  从左向右排列

	row-reverse  从右向左排列

	column  从上向下排列

	column-reverse 从下向上排列

## flex-wrap  弹性盒子内部元素是否换行

	nowrap   不换行，如果宽度不够，压缩内部元素

	wrap   换行，正常排列

	wrap-reverse 换行，逆向排列

## justify-content 弹性盒子的内部排列对齐方式

	flex-start   靠左对齐

	flex-end     靠右对齐

	center       居中对齐

	space-between 两端对齐

	space-around  平均分布

## align-items 垂直排列方式

	flex-start  靠上对其

	flex-end    靠下对其

	center      居中对其

	baseline    靠中轴线对其

	stretch     自动拉伸子元素，垂直为100%

