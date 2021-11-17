import Mock from 'mockjs'
let obj=Mock.mock({
    // 得到随机的id，对象
    id:'@id()',
    username:'@cname()',
    date:'@date()',
    // avatar:'@image('200*200','red','#fff','avatar')',
    description:'@paragraph()',
    ip:'@ip()',
    email:'@email()'
})
console.log(obj);