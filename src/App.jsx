import { Suspense, lazy } from 'react';
import './App.css';
import Loading from './layouts/loading/Loading';
// import Routes from './routes/Route';

const Routes = lazy(()=>import("./routes/Route"))


function App() {


  return (
    <div className="App">
        <Suspense fallback={<Loading type = {0}/>}>
          <Routes/>
        </Suspense>
    </div>
  );
}

export default App;
