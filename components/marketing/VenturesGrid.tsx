import Container from "@/components/ui/Container";
import Link from "next/link";

export default function VenturesGrid() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <h2 className="text-4xl font-semibold mb-16">Our Ventures</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Link
            href="/products/dwell/usa"
            className="group border rounded-xl p-8 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">Dwell USA</h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Workflow-first rent payments and resident experience platform.
            </p>
          </Link>

          <Link
            href="/products/dwell/india"
            className="group border rounded-xl p-8 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">Dwell India</h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              AI-powered property intelligence and verification platform.
            </p>
          </Link>

          <Link
            href="/products/builderstudio"
            className="group border rounded-xl p-8 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">Builder Studio</h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Contractor and project operations management system.
            </p>
          </Link>

          <Link
            href="/products/freedomlabs"
            className="group border rounded-xl p-8 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-3">FreedomLabs</h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Engineering infrastructure and internal tooling platform.
            </p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
