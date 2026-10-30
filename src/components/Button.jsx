// botão reutilizável. a prop "variante" controla a aparência

function Button({ texto, variante = "primario", href }) {
  // guarda as classes de cada variante num objeto, evita um monte de if/else
  const estilosPorVariante = {
    primario: "bg-terracota text-creme-claro hover:bg-terracota-escuro",
    secundario:
      "bg-transparent text-cafe-900 border-2 border-cafe-900 hover:bg-cafe-900 hover:text-creme-claro",
  };

  return (
    <a
      href={href}
      className={`inline-block px-6 py-3 rounded-full font-body font-medium
                  transition duration-300 ${estilosPorVariante[variante]}`}
    >
      {texto}
    </a>
  );
}

export default Button;