import { education } from '@/data/portfolio';

export default function EducationPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-6">Education</h1>

        <div className="grid gap-6">
          {education.map((e) => (
            <article key={e.id} className="card p-6">
              <h2 className="text-xl font-semibold">{e.degree}</h2>
              <div className="text-sm text-gray-500">{e.institution} • {e.duration}</div>
              {e.location ? <div className="text-sm text-gray-600 mt-2">{e.location}</div> : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
