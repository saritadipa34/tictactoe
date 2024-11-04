
import './App.css';
import Box from './components/Box';

function App() {
  return (
   
    <div className="flex flex-col h-60  w-60 mx-auto my-40 left-0 right-0">

    <div className='flex h-20 w-60'>
    <Box />
    <Box />
    <Box />
    </div>
    
    <div className='flex h-20 w-60'>
    <Box />
    <Box />
    <Box />
    </div>

    <div className='flex h-20 w-60'>
    <Box />
    <Box />
    <Box />
    </div>

    </div>
  );
}

export default App;
