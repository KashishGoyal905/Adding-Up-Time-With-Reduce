const node = Array.from(document.querySelectorAll('[data-time]'));


const seconds = node
                .map(node1 => node1.dataset.time)
                .map(node2 => {
                    const [min,sec] = node2.split(':').map(parseFloat)
                    return (min*60) + sec;
                })
                .reduce((total,vidsecond) =>total +vidsecond);


secondsleft = seconds;
const hours =  Math.floor(secondsleft/3600);
secondsleft = secondsleft%3600;
const mins = Math.floor(secondsleft/60)
secondsleft = secondsleft%60;

console.log(hours,secondsleft,mins);