import {useSelector} from 'react-redux';

import createRoutes from './routes';

export default function App() {
  const singn = useSelector(state => state.auth.singned);

  const routes = createRoutes(singn);

  return routes;
}
