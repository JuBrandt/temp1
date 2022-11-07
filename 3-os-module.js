const os = require("os")
const user = os.userInfo()
console.log(user)
console.log(`Work uptime ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)

