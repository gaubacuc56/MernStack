import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import './i18next';
import { routes } from './routes';
import { gapi } from 'gapi-script'
import { REACT_APP_GOOGLE_CLIENT_ID } from './config/config'
function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: { REACT_APP_GOOGLE_CLIENT_ID },
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  }, [])
  const router = useRoutes(routes);
  return <>{router}</>;
}

export default App;
