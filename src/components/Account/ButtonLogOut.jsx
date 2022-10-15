import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ButtonLogOut = () => {
    const {logout} = useAuth0()
  return (
    <>
    <button onClick={() => logout({returnTo: window.location.origin})}> Log Off</button>
    </>
  )
}

export default ButtonLogOut