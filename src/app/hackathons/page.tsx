import { hackathons } from '@/data/portfolio';

export default function HackathonsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-6">Hackathons & Competitions</h1>

        <div className="grid gap-6">
          {hackathons.map((h) => (
            <article key={h.id} className="card p-6">
              <h2 className="text-xl font-semibold">{h.title || h.name}</h2>
              <div className="text-sm text-gray-500">{h.date} • {h.achievement}</div>
              <p className="mt-3 text-gray-700">{h.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
