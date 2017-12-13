<template>
  <div class="index-container">
    <section class="ad-container">
      <img src="../assets/img/ad.jpg"/>
    </section>
    <section class="content">
      <h3>index</h3>
      <span>{{msg}}</span>
    </section>
    <section class="border-demo-container">
      <div class="border-wrap">
        <span>测试border</span>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style type="text/css">
@import url('../assets/css/common.css');
.index-container {
  position: relative;
  width: 100%;
  overflow-x: hidden;
  background: #ccc;
}
.ad-container {
  position: relative;
  width: 100%;
}
.ad-container img {
  display: block;
  width: 80%;
  margin: 0 auto;
}
.content {
  font-size: 20px;
}
.border-demo-container {
  height: 5rem;
  background: #dfdfdf;
}
.border-demo-container .border-wrap{
  width: 80%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  margin: 0 auto;
  border: solid 1px green;
}

/*文字通过媒体查询来设置大小*/
@media all and (max-width: 600px) {
  .content span {
    font-size: 37.5px;
  }
}

@media all and (max-width: 540px) {
  .content span {
    font-size: 33.75px;
  }
}

@media all and (max-width: 480px) {
  .content span {
    font-size: 30px;
  }
}

@media all and (max-width: 420px) {
  .content span {
    font-size: 26.25px;
  }
}

@media all and (max-width: 384px) {
  .content span {
    font-size: 24px;
  }
}

@media all and (max-width: 360px) {
  .content span {
    font-size: 22.5px;
  }
}

@media all and (max-width: 320px) {
  .content span {
    font-size: 20px;
  }
}
</style>
