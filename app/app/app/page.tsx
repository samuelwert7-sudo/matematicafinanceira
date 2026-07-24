export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white border-b">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">HP Academy</h1>
          <div className="flex gap-4">
            <button className="text-gray-700 hover:text-blue-600">Login</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Registrar
            </button>
          </div>
        </nav>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Domine a Matemática Financeira com a HP 12C
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Aprenda de forma interativa com simulador visual, lições estruturadas e desafios práticos.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg font-semibold">
          Começar Agora →
        </button>
      </section>
    </div>
  );
}
