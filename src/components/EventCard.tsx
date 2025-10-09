export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold text-wett-gold">{event.title}</h3>
      <p className="text-gray-400">{event.date} @ {event.location}</p>
      <p className="mt-4 text-sm">{event.description}</p>
      <button className="mt-4 bg-wett-gold text-deep-black font-bold py-2 px-4 rounded hover:bg-yellow-500">Book Now</button>
    </div>
  );
};

export default EventCard;
