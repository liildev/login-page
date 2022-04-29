import React, {useState} from "react"
import PasswordChecklist from "react-password-checklist"

const SignUp = () => {
	const [password, setPassword] = useState("")
	const [passwordAgain, setPasswordAgain] = useState("")
	return (
		<div>
            <form>
                <label>Password:</label>
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <label>Password Again:</label>
                <input type="password" onChange={e => setPasswordAgain(e.target.value)} />

                <PasswordChecklist
                    rules={["minLength","specialChar","number","capital","match"]}
                    minLength={5}
                    value={password}
                    valueAgain={passwordAgain}
                    onChange={(isValid) => {}}
                />
		    </form>
        </div>
	)
}

export default SignUp