import Container from "@/components/ui/Container";

export default function Philosophy() {
  return (
    <section className="py-28 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Built for long horizons
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We do not build tools for trends. We build systems designed to
              endure. Our ventures are engineered with operational clarity,
              disciplined architecture, and long-term governance.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Infrastructure mindset
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Whether in proptech, engineering systems, or collaborative
              platforms, we approach software as infrastructure — not as
              disposable applications.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
