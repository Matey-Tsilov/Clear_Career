import style from "./Login.module.css"

export const Login = () => {
    return (<section id="login">
    <div className={style.form}>
      <h2>Login</h2>
      <form className={style["login-form"]}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p className={style.message}>
          Not registered? <a href="#">Create an account</a>
        </p>
      </form>
    </div>
  </section>)
}