import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

interface RegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
}

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const found: RegisterErrors = {};

    if (name.trim().length < 3) {
      found.name = "Ad soyad en az 3 karakter olmalı.";
    }
    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }
    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }
    if (password2 !== password) {
      found.password2 = "Şifreler aynı değil.";
    }

    setErrors(found);
    setSent(Object.keys(found).length === 0);
  }

  return (
    <section className="auth-kart">
      <h2 className="sayfa-baslik">Kayıt Ol</h2>
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-alan">
          <label htmlFor="register-name">Ad Soyad</label>
          <input
            id="register-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={errors.name ? true : undefined}
          />
          {errors.name && <span className="hata-metni">{errors.name}</span>}
        </div>

        <div className="form-alan">
          <label htmlFor="register-email">E-posta</label>
          <input
            id="register-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={errors.email ? true : undefined}
          />
          {errors.email && <span className="hata-metni">{errors.email}</span>}
        </div>

        <div className="form-alan">
          <label htmlFor="register-password">Şifre</label>
          <input
            id="register-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={errors.password ? true : undefined}
          />
          {errors.password && (
            <span className="hata-metni">{errors.password}</span>
          )}
        </div>

        <div className="form-alan">
          <label htmlFor="register-password2">Şifre (tekrar)</label>
          <input
            id="register-password2"
            type="password"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
            aria-invalid={errors.password2 ? true : undefined}
          />
          {errors.password2 && (
            <span className="hata-metni">{errors.password2}</span>
          )}
        </div>

        <button className="buton auth-buton" type="submit">
          Kayıt ol
        </button>
      </form>

      {sent && <p className="mesaj basari-kutusu">Gerçek kayıt Sprint 10'da</p>}

      <p className="auth-linkler">
        <Link to="/login">Zaten hesabın var mı? Giriş yap</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
