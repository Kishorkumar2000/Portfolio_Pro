import { awards } from '@/data/portfolio';

export default function AwardsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-6">Awards & Honors</h1>

        <div className="grid gap-6">
          {awards.map((a) => (
            <article key={a.id} className="card p-6">
              <h2 className="text-xl font-semibold">{a.title}</h2>
              <div className="text-sm text-gray-500">{a.date} • {a.category}</div>
              <p className="mt-3 text-gray-700">{a.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
