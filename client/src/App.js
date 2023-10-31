import { BrowserView, MobileView } from 'react-device-detect';
import MobilePage from './Mobile/MobilePage';

function App() {
  return (
    <div className="App">
      <BrowserView>
        <MobilePage/>
      </BrowserView>
      <MobileView>
        <MobilePage/>
      </MobileView>
    </div>
  );
}

export default App;
