import React from 'react';

const UsersList = ( { users, selectUser, deleteUser } ) => {
    return (
        
            <ul className='list-group ul'>
                {
                    users.map( user => (
                        <li className='list-group-item li' key={ user.id }>
                            <div className='text-list'>
                                <h4>
                                    { user.first_name }  
                                    { user.last_name }
                                </h4>
                            
                                <p><b>Email: </b> { user.email }</p>
                                <p><b>Birthday: </b> { user.birthday }</p>
                            </div>
                            <div className='buttons'>
                                <button 
                                    className='btn btn-warning btn-size'
                                    onClick={ ( ) => selectUser( user ) }>
                                        Edit
                                </button>
                                <button 
                                    className='btn btn-danger btn-size'
                                    onClick={ ( ) => deleteUser( user.id ) }>
                                        Delete
                                </button>
                            </div>
                        </li>
                    ) )
                }
            </ul>
       
    );
};

export default UsersList;