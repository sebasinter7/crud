import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

function App() {

    const [ users, setUsers ] = useState( [ ] )
    const [ userSelect, setUserSelect ] = useState( null )

    useEffect( ( ) => {
        axios.get( 'https://users-crud1.herokuapp.com/users/' )
            .then( res => setUsers( res.data ) )
    }, [ ] )

    const getUsers = ( ) => {
        axios.get( 'https://users-crud1.herokuapp.com/users/' )
            .then( res => setUsers( res.data ) )
    }

    const deleteUser =  id  =>{
        axios.delete( `https://users-crud1.herokuapp.com/users/${ id }/` )
        .then( ( ) => getUsers( ) )
        .catch( error => console.log( error.response ) )
    }

    const selectUser = user => setUserSelect( user )
    const rejectUser = ( ) => setUserSelect( null )

  return (
    <div className="App">
        
        <UsersForm 
            getUsers = { getUsers } 
            userSelect = { userSelect }
            rejectUser = { rejectUser } 
        />
        
        <UsersList 
            users = { users } 
            selectUser = { selectUser }
            deleteUser = { deleteUser }
        />
    </div>
  );
}

export default App;
