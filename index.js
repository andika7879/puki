
/*─────────────────────────────────────────
  Tele : t.me/GitzzVyn
 whatsapp : wa.me/6282228095170
 
 channel
 https://whatsapp.com/channel/0029Vay2AJM2phHThRkxrT1w/470
──────────────────────────────────────────*/

const { spawn } = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, './start/run.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
