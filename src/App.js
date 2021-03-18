import {useState, useEffect} from 'react';
import './App.css';
import Login from './components/Login';
import 'react-dropdown/style.css';
import { queryAllByDisplayValue } from '@testing-library/react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';

const options = [
  'capsules', 'company', 'cores' , 'crew' , 'dragons' ,'landpads' , 'launchpads' , 'payloads' ,'fairings' ,
  'roadster' , 'rockets' , 'ships' , 'starlink' , 'history'
];

function App() {
  const  [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [loggedIn , setLoggedIn] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const dataFromAPI = await fetchTask();
      setData(dataFromAPI);
    }

    getData();
  }, [])

  const onSelect = ({label,value}) =>{
    //setSelectedOption(value);
    fetchTask(value);

    //setTasks(flightsFromServer);
  }

  const fetchTask = async (value) => {
    setSelectedOption(value);
    const res = await fetch(`https://api.spacexdata.com/v4/${selectedOption}`);
    const data = await res.json();
    setData(data);
    return data;
  }

  const displayDashboard = async({firstName, lastName, email}) => {
        const res = await fetch("https://run.mocky.io/v3/ffac8361-a9ae-4bd0-9373-ea9370aa4671");
        const data = await res.json();
        if(data.identity[0].login === firstName){
          setLoggedIn(true);
        } 
  }

  // Below is the json response form mocky.io
  /*
  {
  "identity": [
    {
    "id" : 1,
    "login" : "admin" ,
    "permissions":{
    "roles" : [
    "admin"
    ]
    }
  },
  {
    "id" : 2,
    "login" : "user" ,
    "permissions":{
    "roles" : [
    "user"
    ]
    }
  }
  ]
}
  */
  

  return (
    <Router>
    <div>      
        { 
          loggedIn ?
              <Dashboard options={options} onSelect={onSelect} selectedOption={selectedOption} data={data}/>
             :
          <Route path="/" exact render={() => (
            <>
              <Login onLogin={displayDashboard}/>
            </>
        )}/>
        }
        
        
        
    </div>
    </Router>
  );
}

export default App;
