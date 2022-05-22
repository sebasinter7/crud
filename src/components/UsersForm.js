import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersForm = ( { getUsers, userSelect, rejectUser } ) => {

    const [ firstName, setFirstName ] = useState( " " )
    const [ lastName, setLastName ] = useState( " " )
    const [ email, setEmail ] = useState( " " )
    const [ password, setPassword ] = useState( "" )
    const [ birthday, setBirthday ] = useState( " " )

    useEffect( ( ) => {
        
        if ( userSelect !== null ) {
            setFirstName( userSelect.first_name )
            setLastName( userSelect.last_name )
            setEmail( userSelect.email )
            setPassword( userSelect.password )
            setBirthday( userSelect.birthday )
        } else {
            setFirstName( " " )
            setLastName( " " )
            setEmail( " " )
            setPassword( " " )
            setBirthday( " " )
        }
    }, [ userSelect ] )

    const submit = e => {
        e.preventDefault( )
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday
        }

        if ( userSelect !== null ) {
            axios.put( `https://users-crud1.herokuapp.com/users/${ userSelect.id }/`, newUser )
            .then( ( ) => {
                getUsers( );
                rejectUser( )
            } )
        } else {
            
            axios.post( 'https://users-crud1.herokuapp.com/users/', newUser )
                .then( ( ) => getUsers( ) )
                .catch( error => console.log( error.response ) )
        }
    }

    return (
        <form className='form' onSubmit={ submit }>
            <div className='name'>
                <div className="mb-3">
                    <label 
                        htmlFor="first-name" 
                        className="form-label size">
                            First name
                    </label>
                    <input 
                        type="text" 
                        className="form-control input-size" 
                        id="first-name" 
                        onChange={ e => setFirstName( e.target.value ) }
                        value= { firstName }
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="last-name" 
                        className="form-label size">
                            Last name
                    </label>
                    <input 
                        type="text" 
                        className="form-control input-size" 
                        id="last-name" 
                        onChange={ e => setLastName( e.target.value ) }
                        value= { lastName }
                    />
                </div>
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="email" 
                    className="form-label size">
                        Email address
                </label>
                <input 
                    type="email" 
                    className="form-control input-size" 
                    id="email"
                    onChange={ e => setEmail( e.target.value ) }
                    value= { email }
                />
            </div>
            <div className="mb-3">
                <label 
                htmlFor="password" 
                className="form-label size">
                    Password
                </label>
                <input 
                    type="password" 
                    className="form-control input-size" 
                    id="password"
                    onChange={ e => setPassword( e.target.value ) }
                    value= { password }
                />
            </div>
            <div className="mb-3">
                <label 
                htmlFor="birthday" 
                className="form-label size">
                    Birthday date
                </label>
                <input 
                    type="date" 
                    className="form-control input-size" 
                    id="birthday"
                    onChange={ e => setBirthday( e.target.value ) }
                    value= { birthday }
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary">
                    Submit
            </button>
        </form>
    );
};

export default UsersForm;