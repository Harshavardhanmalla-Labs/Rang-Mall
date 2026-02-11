export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="container-custom py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} FreedomLabs. All rights reserved.
      </div>
    </footer>
  );
}
