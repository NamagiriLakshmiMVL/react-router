import './App.css';
import Context1 from './Context1'
import Context2 from './Context2'
import Context3 from './Context3'
import Context4 from './Context4'
import Context5 from './Context5'
import { Link, Route, Routes } from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <div>
      <div className='headCont'>
        <h1>GUVI BLOGS</h1>
      </div>
      <div className='btncls'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar sx={{    display:"flex", justifyContent:"center" , gap:"30px"}} >
    <Link to={"/all"}><Button variant="text" color="inherit">ALL</Button></Link>
    <Link to={"/fsd"}><Button variant="text"color="inherit">FULL STACK DEVELOPMENT</Button></Link>
    <Link to={"/datascience"}><Button variant="text"color="inherit">DATA SCIENCE</Button></Link >
    <Link to={"/cybersecurity"}><Button variant="text"color="inherit">CYBER SECURITY</Button></Link >
    <Link to={"/career"}><Button variant="text"color="inherit">CAREER</Button></Link >
    </Toolbar>
      </AppBar>
    </Box>
    </div>
    <Routes>
    <Route path="/" element={<Context1 />}> </Route>
      <Route path="/all" element={<Context1 />}> </Route>
      <Route path="/fsd" element={<Context2 />}> </Route>
      <Route path="/datascience" element={<Context3 />}> </Route>
      <Route path="/cybersecurity" element={<Context4 />}> </Route>
      <Route path="/career" element={<Context5 />}> </Route>
    </Routes>

    </div >
  );
}



export default App;
