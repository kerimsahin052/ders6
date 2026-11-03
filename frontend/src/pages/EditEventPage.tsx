import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/forms/EventForm";
import { useEvents } from "../context/EventsContext";
import { findEventById } from "../utils/filter-events";
import NotFoundPage from "./NotFoundPage";

function EditEventPage() {
  const { id } = useParams();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();
  const event = findEventById(events, id ?? "");

  const initialData = useMemo(
    () =>
      event
        ? {
            title: event.title,
            category: event.category,
            date: event.date,
            time: event.time,
            location: event.location,
            capacity: String(event.capacity),
            description: event.description,
          }
        : null,
    [event],
  );

  if (!event || !initialData) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h2 className="sayfa-baslik">Etkinlik Güncelle</h2>
      <EventForm
        initialData={initialData}
        submitText="Güncelle"
        onSubmit={(data) => {
          updateEvent(event.id, data);
          navigate("/admin");
        }}
      />
    </>
  );
}

export default EditEventPage;
