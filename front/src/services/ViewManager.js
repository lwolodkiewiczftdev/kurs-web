import router from '../router'
import io from 'socket.io-client';

class ViewManager {
 constructor () {
   this.interval = null;
   this.status = null;
 }
  changeView() {
   switch(this.status) {
     case 'CONNECTED':
       router.push({name: 'connected'});
       break;
     case 'FAILED':
       router.push({name: 'failed'});
       break;
     case 'ANSWERED':
       router.push({name: 'answered'})
   }
 }
 checkStatus() {
    io('http://localhost:3000', {
        reconnection: false,
        transports: ["websocket", "polling"]
    });
   this.interval = setInterval(async () => {
     let responseStream = await fetch(`http://localhost:3000/status`, {
       method: "GET"
     });
     let response = await responseStream.json();
     if(response.status !== this.status) {
       this.status = response.status;
       this.changeView();
     }
     this.status = response.status;
    }, 500);
 }
 stopPolling () {
   clearInterval(this.interval)
 }

}

export default new ViewManager()

