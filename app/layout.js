import './globals.css';

export const metadata = {
  title: 'Nextgen Expense App',
  description: 'Gestion des notes de frais - Nextgen Expense App'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold">Nextgen Expense App</h1>
          </div>
        </header>
        <main className="flex-1 p-4 max-w-4xl mx-auto">{children}</main>
        <footer className="bg-gray-100 text-center p-4 text-sm">
          © {new Date().getFullYear()} Nextgen Expense App
        </footer>
      </body>
    </html>
  );
}
