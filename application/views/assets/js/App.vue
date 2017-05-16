// App.vue
<template>
  <div>
    {{msg}}
    <Success></Success>
  </div>
</template>

<script>
require('./bootstrap');
import Success from './components/Success.vue'

export default {
  data () {
    return {
      msg: '我可以像laravel一样写hah ',
      event:Event
    }
  },
  components:{
    Success
  }
}
</script>


