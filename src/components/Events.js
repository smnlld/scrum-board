import Event from "./Event";
const Events = ( event ) => {
  return (
    <>
      {event.map((info) => (
        <Event key={event.id} event={event} />
      ))}
    </>
  );
};

export default Events;
