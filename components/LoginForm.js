export default function LoginForm({ onLogin }) {
    async function handleSubmit(event) {
        event.preventDefault();
        onLogin(event.target.username.value, event.target.password.value)
    }
    return (
        <form onSubmit={handleSubmit} className="mx-auto m-4 w-1/2 bg-green-200 p-3 rounded">
            <fieldset autoComplete='off'>
                <legend className='mx-auto p-3'>Log In Please</legend>
                <label className='m-3' htmlFor='username'>Username:</label>
                <input className='m-3' name="username" /><br></br>
                <label className='m-3' htmlFor='password'>Password:</label>
                <input className='mx-auto mb-4' type='password' name='password' /><br></br>
                <button className="bg-green-400 rounded py-2 px-10">Log In</button>
            </fieldset>
        </form>

    )
}