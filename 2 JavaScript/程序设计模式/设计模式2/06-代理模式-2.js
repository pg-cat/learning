const star = {
    name:'吴京',
    age:48,
    phone:'star:13544030212',
    price:'12000'
}

const agent = new Proxy(star,{
    get:function(target,key){
        if(key == 'phone'){
            return 'agent:354321';
        }
        if(key == 'price'){
            return '15000'
        }
        return star[key]
    },
    set:function(target,key,val){
        if(key == 'customePrice'){
            if(val<1000){
                throw new Error('价格过低')
            }else{
                target[key] = val;
                return true;
            }
        }
    }
})

console.info(agent.name)
console.info(agent.age)
console.info(agent.phone)
console.info(agent.price)
agent.customePrice = '20000';
console.info(agent.customePrice);
agent.customePrice = '200'
