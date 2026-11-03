import { Link } from "react-router-dom";
import EventList from "../components/events/EventList";
import { useEvents } from "../context/EventsContext";

function HomePage() {
  const { events } = useEvents();
  const upcoming = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  return (
    <>
      <section className="intro">
        <h2 className="sayfa-baslik">Yaklaşan 2 Etkinlik</h2>
      </section>
      <EventList events={upcoming} />
      <p className="sayfa-aksiyon">
        <Link className="buton" to="/events">
          Tüm etkinlikleri gör
        </Link>
      </p>
    </>
  );
}

export default HomePage;
