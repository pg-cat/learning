class Circle{
    draw(){
        console.info('画一个圆形!')
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle;
    }
    draw(){//原有的功能仍然能用
        this.circle.draw();
        this.setRedBorder();
    }
    setRedBorder(){
        console.info('设置红色边框')
    }
}

let c = new Circle();
c.draw()
let d = new Decorator(c);
d.draw();