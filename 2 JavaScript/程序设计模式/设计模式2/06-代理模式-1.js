class Target{
    constructor(filename){
        this.filename = filename;
        this.loadDisk()
    }

    loadImg(){
        console.info('loadImg...'+this.filename)
    }
    loadDisk(){
        console.info('loading...'+this.filename);
    }
}

class Proxy{
    constructor(filename){
        this.target = new Target(filename);
    }
    loadImg(){
        this.target.loadImg();
    }
}

let p = new Proxy('1.png')
p.loadImg();