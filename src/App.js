import { RouterProvider } from 'react-router-dom';
import Routes from './components/Routes/Routes';
import {Provider} from "react-redux";
import store from './components/redux/store';

function App() {
  return (
    <div className="">

<Provider store={store}>
<RouterProvider router={Routes} />
</Provider>


    </div>
  );
}

export default App;
