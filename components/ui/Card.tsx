export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
      {children}
    </div>
  );
}
