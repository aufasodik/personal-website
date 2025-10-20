export default function HomePage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        Hi, I’m Your Name 👋
      </h1>
      <p className="text-muted-foreground">
        I build useful things with code and tell stories with data.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <a
          href="/projects"
          className="rounded-xl border p-4 no-underline transition hover:shadow-sm"
        >
          <h3 className="text-base font-medium">Projects →</h3>
          <p className="text-sm text-muted-foreground">
            Selected work, experiments, and school projects.
          </p>
        </a>
        <a
          href="/about"
          className="rounded-xl border p-4 no-underline transition hover:shadow-sm"
        >
          <h3 className="text-base font-medium">About me →</h3>
          <p className="text-sm text-muted-foreground">
            What I’m learning and where to find me.
          </p>
        </a>
      </div>
    </section>
  );
}
