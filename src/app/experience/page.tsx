import { experiences } from '@/data/portfolio';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-6">Experience</h1>

        <div className="grid gap-6">
          {experiences.map((exp) => (
            <article key={exp.id} className="card p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{exp.role} @ {exp.company}</h2>
                  <div className="text-sm text-gray-500">{exp.duration} • {exp.location}</div>
                </div>
                <div className="text-sm text-gray-600">{exp.type}</div>
              </div>

              <ul className="mt-4 list-disc list-inside text-gray-700">
                {exp.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {exp.techStack?.length ? (
                <div className="mt-4 text-sm text-gray-600">
                  Tech: {exp.techStack.join(', ')}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
