import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.css';
import Header from './components/header';
import NotFound from './components/NotFound';
import AlbumList from './features/Album';
import CounterFeature from './features/Counter/index';
import TodoList from './features/Todo';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';

function App() {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };

    return fetchProducts();
  }, []);

  const showNoti = () => {
    enqueueSnackbar('Register successfully', { variant: 'error' });
  };

  return (
    <>
      <Header />
      <Button onClick={showNoti}>Thong bao</Button>
      <Switch>
        <Redirect from="/home" to="/" />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoList} />
        <Route path="/albums" component={AlbumList} />
        <Route path="*" component={NotFound} />
      </Switch>
      Footer
    </>
  );
}

export default App;
