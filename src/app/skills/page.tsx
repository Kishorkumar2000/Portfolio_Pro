import { skills } from '@/data/portfolio';

export default function SkillsPage() {
  const grouped: Record<string, typeof skills> = {} as any;
  skills.forEach((s) => {
    const cat = s.category || 'other';
    if (!grouped[cat]) grouped[cat] = [] as any;
    grouped[cat].push(s);
  });

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-6">Skills</h1>

        <div className="grid gap-6">
          {Object.entries(grouped).map(([cat, items]) => (
            <section key={cat} className="card p-6">
              <h2 className="text-lg font-semibold mb-3">{cat}</h2>
              <div className="flex flex-wrap gap-2">
                {items.map((it: any) => (
                  <span key={it.id} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {it.name} {it.proficiency ? `• ${it.proficiency}%` : ''}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
