import "./globals.css";

export const metadata = {
  title: "clone-tabnews-ia",
  description:
    "Implementação do TabNews para o curso.dev utilizando agentes de IA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
