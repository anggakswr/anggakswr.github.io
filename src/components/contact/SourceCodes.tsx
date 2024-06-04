export default function SourceCodes() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border border-white">
        <img src="/img/source-codes/crud-fullstack.jpg" alt="CRUD Fullstack" />

        <div className="p-4">
          <p className="font-bold text-xl mb-1">CRUD Fullstack</p>
          <p className="text-lg mb-4">
            CRUD fullstack project using Next.js pages router, TypeScript,
            Tailwind, NextUI, and react-icons.
          </p>

          <a
            href="https://t.me/anggakswr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black py-2 px-6 mr-4"
          >
            Order
          </a>

          <a
            href="https://crud-fullstack.daudweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white py-2 px-6"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
