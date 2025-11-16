import Link from 'next/link';

export default function MorePage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-6">More</h1>

        <div className="grid gap-4 max-w-md">
          <Link href="/awards" className="card p-4">Awards & Honors</Link>
          <Link href="/certifications" className="card p-4">Certifications</Link>
          <Link href="/resume" className="card p-4">Resume</Link>
          <Link href="/contact" className="card p-4">Contact</Link>
        </div>
      </div>
    </div>
  );
}
