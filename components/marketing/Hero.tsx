import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Rang & Mall
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">
            A global venture ecosystem building durable digital infrastructure
            across real estate, engineering, collaboration, and emerging
            markets.
          </p>

          <div className="mt-12 flex gap-6">
            <a
              href="/ventures"
              className="bg-black text-white px-8 py-3 rounded-md text-sm font-medium"
            >
              Explore Ventures
            </a>

            <a
              href="/workspace"
              className="border border-gray-300 px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-50 transition"
            >
              Open Workspace
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
