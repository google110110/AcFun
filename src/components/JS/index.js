import Vue from 'vue';
import MessageBox from './MessageBox'
export var messageBox=(function(){
    var defaults={    //默认值
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handleCancel:null,
        handleOk:null
    }
    var MyMessageBox=Vue.extend(MessageBox);
    return function(opts){//配置参数
        for(var ater in opts){
           defaults[ater]=opts[ater];
        }
        //等于: this.defaults.title=opts.title,
        // this.defaults.content=opts.content,
        // this.defaults.cancel=opts.cancel,
        // this.defaults.ok=opts.ok
        var vm=new MyMessageBox({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content:defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok
            },
            methods:{
                handleCancel(){
                     defaults.handleCancel&&defaults.handleCancel.call(this)
                     document.body.removeChild(vm.$el)
                 },
                 handleOk(){
                     defaults.handleOk&&defaults.handleOk.call(this)
                     document.body.removeChild(vm.$el)
                 }

            }
        });
        document.body.appendChild(vm.$el);
    }

})()