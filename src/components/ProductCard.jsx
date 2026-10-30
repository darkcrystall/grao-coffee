
function ProductCard({ nome, descricao, preco, imagem }) {
  return (
    <div className="bg-creme-claro rounded-2xl p-6 border border-cafe-900/10 hover:border-terracota/40 transition">

      <div className="w-full h-40 rounded-xl overflow-hidden mb-5">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className="font-display text-xl font-semibold text-cafe-900">
        {nome}
      </h3>

      <p className="mt-2 text-sm text-cafe-600">{descricao}</p>

      <span className="mt-4 inline-block font-body font-semibold text-terracota">
        {preco}
      </span>
    </div>
  );
}

export default ProductCard;