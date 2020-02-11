const clock = document.querySelector('.clock')
const tick = () => {
    const now = new Date()

    const h = now.getHours()
    const m = now.getMinutes()
    const s = now.getSeconds()
    const d = now.getDate()
    const m2 = now.getMonth()
    const y = now.getFullYear()
    const html = `
    <span>${h}</span> : 
    <span>${m}</span> :
    <span>${s}</span>
    <h5>Today Date is ${d}:${m2+1}:${y}</h5> 
    `;
    clock.innerHTML = html

    // const m2 = function(m1){
    //     m1+=1
    // }
    

};
setInterval(tick, 1000);