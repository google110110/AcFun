<template>
    <div>
    </div>
</template>

<script>
    import {messageBox} from '@/components/JS'
    export default {
        name:"good",
        mounted(){
            messageBox({
                title:'自定义JS提示框',
                content:'你好啊!',
                cancel:'滚',
                ok:'你好',
                handleCancel(){
                    console.log("滚")
                },
                handleOk(){
                    console.log("你好")
                }
            })
        },
        mothods:{
        }
    }
</script>

<style lang="scss" scoped>

</style>