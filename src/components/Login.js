import React , {useState} from 'react';

function Login({onLogin}) {
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(!firstName){
            alert('Please Add a FirstName');
            return;
        }else if(! lastName){
            alert('Please Add a LastName');
            return;
        }

        onLogin({firstName, lastName, email})

        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return (
        <div className="text-center login">
            <form action="/" className="form-signin" method="POST" onSubmit={onSubmit}>
                <img className="round-img mb-4" src="https://highxtar.com/wp-content/uploads/2020/05/highxtar-spacex-elon-musk-occupy-mars2.jpg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <input type="text" name="fName" className="form-control top" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required autoFocus />
                <input type="text" name="lName" className="form-control middle" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                <input type="email" name="email" className="form-control bottom" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                <p className="mt-5 mb-3 text-muted">&copy; 91 Socials</p>
            </form>
        </div>
    )
}

export default Login
