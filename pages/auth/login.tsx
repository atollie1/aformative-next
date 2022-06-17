import {NextPage} from "next";
import {SyntheticEvent, useState} from "react";

const Login: NextPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logUserIn = (event: SyntheticEvent) => {
        event.preventDefault()
        console.log({email, password})
    }

    return (
        <div className="container-fluid">
            <form className="row col-4 mt-5 mx-auto">
                <div className="form-group mb-2">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="email address, ex: john.snow@stark.com"
                        onChange={(evt) => setEmail(evt.target.value)}
                    />
                </div>

                <div className="form-group mb-2">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="your password"
                        onChange={(evt) => setPassword(evt.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button
                        className="btn btn-primary"
                        onClick={logUserIn}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login