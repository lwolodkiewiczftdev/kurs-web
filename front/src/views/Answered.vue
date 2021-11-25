<template>
 <div class="box">
   <div class="text">
     Połączenie zakończone.
   </div>
   <div class="call-button-bottom"  @click="$router.push('/')">
     Spróbuj ponownie
   </div>
 </div>
</template>

<script>
import ViewManager from '../services/ViewManager'

export default {
 mounted() {
   ViewManager.stopPolling();
 }
}
</script>


