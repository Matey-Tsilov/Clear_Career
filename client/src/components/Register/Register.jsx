import style from "./Register.module.css"

export const Register = () => {
    return (<section id="register">
    <div className={style.form}>
      <h2>Register</h2>
      <form className={style["login-form"]}>
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p className={style.message}>
          Already registered? <a href="#">Login</a>
        </p>
      </form>
    </div>
  </section>)
}