import { resolve } from "core-js/fn/promise"

const state={
    name:'',
    userInfo:(sessionStorage.getItem('userInfo')&&JSON.parse(sessionStorage.getItem('userInfo')))||{},
}
const mutations={
    SET_NAME:(state,name)=>{
        state.name=name
    },
    SET_USERINFO(state,userInfo){
        state.userInfo=userInfo
    }
}
const actions={
    login({commit},userInfo){
        const {password,username}=userInfo
        return new Promise((resolve,reject)=>{
            // 登录以form-data的形式登录
            const formData=new FormData()
            formData.set('username',username)
            formData.set('password',password)
            
         })
    }
}