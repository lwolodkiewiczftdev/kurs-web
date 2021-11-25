<template>
<div class="box">
 <div class="text">
   Zaraz nastąpi połączenie z konsultantem.
 </div>
</div>
</template>
<script>
import ViewManager from '../services/ViewManager'

export default {
  mounted () {
    ViewManager.checkStatus()
  }
}
</script>
