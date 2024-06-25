import { useEffect, useState } from "react"
import {auth,googleProvider} from '../../Configs/firebase'
import { createUserWithEmailAndPassword,signInWithPopup,signOut } from "firebase/auth";

function SignUp() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const [isLogin,setLogin] = useState(false)

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setLogin(true)
            } else {
                setLogin(false)
            }
        })
    },[])
    const signup = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        } catch (err){
            console.error(`Error While Login ${err}`)
        }
    }

    const signinWithGoogle = async () => {
        try{
            await signInWithPopup(auth,googleProvider);
        } catch (err){
            console.error(`Error While Login ${err}`)
        }
    }

    const logout = async () => {
        try{
            await signOut(auth);
        } catch (err){
            console.error(`Error While Login ${err}`)
        }
    }
  return (
    <div className="signup">
      <input type="email" 
        placeholder="Enter Email..."
        onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" 
        placeholder="Enter Passowrd..."
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signup}>SignUp</button>
      <button onClick={signinWithGoogle}>Sign In With Goggle</button>
      {
        isLogin == true ? <button onClick={logout}>logout</button> : <></>
      }
    </div>
  )
}

export default SignUp
