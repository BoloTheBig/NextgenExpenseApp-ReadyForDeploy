import './globals.css';
import './globals.css';

export const metadata = {
  title: 'Nextgen Expense App',
  description: 'Gérez vos dépenses facilement'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
