/**
 * Created by IntelliJ IDEA.
 * User: Altanai ( @altanai)
 * Date: 2020
 * Time: 12:54 PM
 * Ample Chats ( www.amplechat.com)
 */
var remotetimer_interval = null;

addEventListener('message', (e) => {
    try{
        // console.log(" timeobj EventListener ========= ", e.data);
        for (x in e.data) {
            let ptimeobj = e.data[x];
            if (ptimeobj && ptimeobj.zone && ptimeobj.userid && ptimeobj.remotetime) {
                clearInterval(remotetimer_interval);
                remotetimer_interval = null;
                remotetimer_interval = setInterval(timetracker, 5000, ptimeobj);
            }
        }
    }catch(e){
        console.error("errorin timekeeper ", e);
    }
});

function timetracker(ptobj) {
    let options = {
        //year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
        timeZone: ptobj.zone
    };
    postMessage({
        time: new Date().toLocaleString('en-US', options),
        remotetime: ptobj.remotetime
    });
}