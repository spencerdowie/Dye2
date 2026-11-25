export default function Login() {
  return (
    <div>
      <main>
        <form className="border border-3 rounded-4 border-light p-5 m-auto w-25">
          <h2>Login</h2>
          <div className="d-flex flex-column">
            <label>
              Email: <input />
            </label>
            <label>
              Password: <input />
            </label>
          </div>
        </form>
      </main>
    </div>
  );
}
