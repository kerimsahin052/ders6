import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="bulunamadi">
      <h2 className="sayfa-baslik">Sayfa bulunamadı</h2>
      <p>Aradığınız sayfa ya da etkinlik yok.</p>
      <Link className="buton" to="/">
        Ana sayfaya dön
      </Link>
    </section>
  );
}

export default NotFoundPage;
