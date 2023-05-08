import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { signInWithPopup } from 'firebase/auth'
// import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged } from 'firebase/auth'
import { signInWithRedirect, onAuthStateChanged } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
  const navigate = useNavigate();
  // This will just check if the user is logged in, if so, it returns the children
  // (which are passed as props - it's just whatever component is either protected
  // or not)
  // otherwise it sends them to the login route

  // added below line for signin popup everytime clicking submit for contact CRUD
  const signInOnClick = async () => {
    await signInWithRedirect(auth, Providers.google);
  }

  useEffect(() => {
      // added below for signin popup everytime clicking submit for contact CRUD
      const auth_state = onAuthStateChanged(auth, (user) => {
        if (!user) {
          // console.log(user)
          // setTimeout( () => { window.location.reload() }, 50000)
          signInOnClick()
          navigate('/dashboard');
          
        }
      });
      return () => auth_state();
    }, [auth, navigate]);


  // useEffect(() => {
  //     if (!auth.currentUser) {
  //         navigate("../")
  //         signInWithPopup(auth, Providers.google)
  //     }
  // }, [])


  return (
    <>{children}</>
  )
}

export default AuthChecker