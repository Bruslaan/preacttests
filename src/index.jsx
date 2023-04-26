import {h, render} from 'preact'
import "./index.css";
import Modal from './components/modal/modal.jsx'


const Widged = (
  <div>
    { <Modal/> }
  </div>
)


render(Widged, document.body);

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime')

  runtime.install({
    onUpdateReady: () => {
      // Tells to new SW to take control immediately
      runtime.applyUpdate()
    },
    onUpdated: () => {
      // Reload the webpage to load into the new version
      window.location.reload()
    },
  })
}
