import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
  return (
    <article className={`detay-karti${event.image ? "" : " detay-afissiz"}`}>
      {event.image && (
        <figure className="afis-figure">
          <img
            className="afis-gorsel"
            src={event.image}
            alt={`${event.title} afişi`}
          />
          <figcaption>{event.title} afişi</figcaption>
        </figure>
      )}

      <div className="detay-icerik">
        <section className="kunye-karti">
          <h2>Etkinlik Künyesi</h2>
          <dl>
            <div>
              <dt>Tarih</dt>
              <dd>{formatDate(event.date)}</dd>
            </div>
            <div>
              <dt>Saat</dt>
              <dd>{event.time}</dd>
            </div>
            <div>
              <dt>Yer</dt>
              <dd>{event.location}</dd>
            </div>
            <div>
              <dt>Kategori</dt>
              <dd>{event.category}</dd>
            </div>
            <div>
              <dt>Kontenjan</dt>
              <dd>{event.capacity} kişi</dd>
            </div>
          </dl>
        </section>

        <section className="aciklama">
          <h2>Açıklama</h2>
          <p>{event.description}</p>
        </section>

        <div className="detay-butonlari">
          <Link className="buton ikincil" to="/events">
            ← Listeye dön
          </Link>
          <Link className="buton" to={`/admin/${event.id}/edit`}>
            Bu etkinliği güncelle
          </Link>
        </div>
      </div>
    </article>
  );
}

export default EventDetail;
