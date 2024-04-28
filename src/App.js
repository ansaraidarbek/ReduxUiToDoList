import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TodoList from './TodoList';
import Register from './Register';
import { toggleTheme } from './themeSlice';

function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(state => state.theme.isDarkTheme);
  const [selectedTab, setSelectedTab] = React.useState(0);

  useEffect(() => {
    const theme = createTheme({
      palette: {
        mode: isDarkTheme ? 'dark' : 'light',
      },
    });
    dispatch(toggleTheme(isDarkTheme));
  }, [dispatch, isDarkTheme]);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <ThemeProvider theme={createTheme({
      palette: {
        mode: isDarkTheme ? 'dark' : 'light',
      },
    })}>
      <CssBaseline />
      <Container>
        <h1>Todo List</h1>
        <Button onClick={() => dispatch(toggleTheme(!isDarkTheme))}>
          {isDarkTheme ? 'Light theme' : 'Dark theme'}
        </Button>
        <Tabs value={selectedTab} onChange={handleChangeTab}>
          <Tab label="Todos" />
          <Tab label="SignUp" />
        </Tabs>
        <div role="tabpanel" hidden={selectedTab !== 0}>
          <TodoList setSelectedTab = {setSelectedTab}/>
        </div>
        <div role="tabpanel" hidden={selectedTab !== 1}>
          <Register setSelectedTab = {setSelectedTab}/>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
