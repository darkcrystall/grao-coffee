// card de Testimonial de cliente

function Testimonial({ texto, autor, cargo, foto }) {
  return (
    <div className="bg-creme-claro rounded-2xl p-8 border border-cafe-900/10">
      <p className="font-display text-lg italic text-cafe-900 leading-relaxed">
        "{texto}"
      </p>

      <div className="mt-6 flex items-center gap-3">
        <img
          src={foto}
          alt={`Foto de ${autor}`}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-semibold text-cafe-900">{autor}</p>
          <p className="text-xs text-cafe-600">{cargo}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;