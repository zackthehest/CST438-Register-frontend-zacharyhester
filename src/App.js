import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SchedList from './components/SchedList';
import Semester from './components/Semester';
import Student from './components/Student';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
           <Typography variant="h6" color="inherit">
            Course Registration
           </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
       <Switch>
        <Route exact path='/' component={Semester} />
        <Route path='/schedule' component={SchedList} />
        <Route path='/student' component={Student} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;