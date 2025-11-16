import { projects } from '@/data/portfolio';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.id} className="card p-6">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-700 mb-3">{p.description}</p>
              {p.image ? (
                <img src={p.image} alt={p.title} className="rounded-md w-full h-40 object-cover mb-3" />
              ) : null}
              {p.techStack?.length ? (
                <div className="text-sm text-gray-600">Tech: {p.techStack.join(', ')}</div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
