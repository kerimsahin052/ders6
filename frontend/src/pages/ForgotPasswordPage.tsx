import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const found = email.includes("@") ? "" : "Geçerli bir e-posta girin.";

    setError(found);
    setSent(found === "");
  }

  return (
    <section className="auth-kart">
      <h2 className="sayfa-baslik">Şifremi Unuttum</h2>
      <p>
        Kayıtlı e-posta adresinizi yazın, şifre yenileme bağlantısı gönderelim.
      </p>

      {sent && (
        <p className="mesaj basari-kutusu">
          Bağlantı {email} adresine gönderildi (demo).
        </p>
      )}

      <form noValidate onSubmit={handleSubmit}>
        <div className="form-alan">
          <label htmlFor="forgot-email">E-posta</label>
          <input
            id="forgot-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={error ? true : undefined}
          />
          {error && <span className="hata-metni">{error}</span>}
        </div>

        <button className="buton auth-buton" type="submit">
          Bağlantı gönder
        </button>
      </form>

      <p className="auth-linkler">
        <Link to="/login">← Girişe dön</Link>
      </p>
    </section>
  );
}

export default ForgotPasswordPage;
