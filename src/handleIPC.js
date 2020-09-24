const ipc = require("electron").ipcRenderer

const updateBtn = document.getElementById('exitApp')
const startBtn = document.getElementById('startApp')


updateBtn.addEventListener('click', function () {
    ipc.send('quit')
})

startBtn.addEventListener('click',function (){
    const mode =  document.querySelector('#mode').selectedIndex;
    const resetMode =  document.querySelector('#resetMode').selectedIndex;
    const UAfield =  document.querySelector('#UAfield').value;
    const delays =  document.querySelector('#delays').value;
    ipc.send('start',delays,mode,resetMode,UAfield )

})

ipc.on('updateUA', function (e,item){
document.getElementById('UAfield').value += item
})