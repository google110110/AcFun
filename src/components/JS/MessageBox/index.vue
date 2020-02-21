<template>
    <div class="message">
        <h2>{{title}}</h2>
        <h3>{{content}}</h3>
        <div>
            <div @click="handleCancel">{{cancel}}</div>
            <div @click="handleOk">{{ok}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'MesssageBox'
    }
</script>

<style lang="scss" scoped>
.message{cursor: pointer;width: 200px;height: 115px; position: absolute;top: 30%;left: 50%; border: 1px solid wheat;border-radius: 5px; box-shadow:3px 3px 3px 3px wheat;padding: 0;}
.message h2{text-align: center; width: 200px; font-size: 20px;line-height: 30px; margin:5px 0;height: 30px;}
.message h3{text-align: center; width: 200px; font-size: 15px;line-height: 30px; margin:5px 0;height: 30px;}
.message >div{display:flex;width: 200px;height: 40px; border-top: 1px solid #ffffff;border-top: 1px solid #ccc;margin: 0;}
.message div div{text-align: center;flex: 1;font-size: 15px;line-height: 40px; height: 40px}
.message div :first-child{border-right: 1px solid #ccc;}
</style>