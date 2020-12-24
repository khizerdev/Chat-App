import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {

    const [{user} , dispatch] = useStateValue()

   const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user
        })
    })
    .catch((error) => {
        alert(error.message)
    })
   }

    return (
            <div className="login__container">
               
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" alt=""/>

                <div className="login__text">
                    <h1>Sign In to Whatsapp</h1>
                </div>

                <Button
                    onClick={signIn}
                    variant="contained"
                    endIcon={<ExitToAppIcon/>}
                >
                    Sign In with Google
                </Button>
        </div>
    )
}

export default Login
