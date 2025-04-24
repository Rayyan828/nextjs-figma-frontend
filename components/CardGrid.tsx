import { cards } from "../data/cards";

export default function CardGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-12">
      {cards.map((item, idx) => (
        <div key={idx} className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}
