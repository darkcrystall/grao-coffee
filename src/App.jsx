// componente raiz: importa os componentes e os dados, e monta a página

import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import ProductCard from "./components/ProductCard";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

import { linksNav, produtos, depoimentos } from "./data/content";

// placeholder de imagem do hero
import heroImagem from "./assets/grao-coffee-logo.png";
import cafeteria from "./assets/cafeteria.jpg";

function App() {
  return (
    <div className="font-body">
      <Header links={linksNav} />

      <Hero
        titulo="Café especial, torrado com cuidado"
        subtitulo="Grãos selecionados diretamente de produtores parceiros, torrados em pequenos lotes para preservar cada nota de sabor."
        imagem={heroImagem}
      />

      {/* seção sobre */}
      <section id="sobre" className="py-24 px-6 bg-creme-claro">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-80 md:h-105 overflow-hidden rounded-2xl">
            <img
              src={cafeteria}
              alt="Interior da cafeteria"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-lg">
            <span className="font-body text-sm uppercase tracking-widest text-musgo font-medium">
              Nossa história
            </span>

            <h2 className="font-display text-4xl font-semibold text-cafe-900 mt-3">
              Do produtor à xícara
            </h2>

            <p className="mt-4 text-cafe-600 leading-relaxed">
              A Grão nasceu da vontade de aproximar quem produz café de quem o
              aprecia. Trabalhamos direto com pequenos produtores, acompanhando
              cada etapa da torra até o preparo final na loja.
            </p>
          </div>
        </div>
      </section>

      {/* seção cardápio */}
      <section id="cardapio" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Cardápio"
            titulo="O que preparamos"
            descricao="Uma seleção enxuta, pensada para valorizar cada grão."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {produtos.map((produto) => (
              <ProductCard
                key={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                imagem={produto.imagem}
              />
            ))}
          </div>
        </div>
      </section>

      {/* seção depoimentos */}
      <section className="py-24 px-6 bg-creme-claro">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Depoimentos" titulo="Quem já provou" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {depoimentos.map((depoimento) => (
              <Testimonial key={depoimento.autor} {...depoimento} />
            ))}
          </div>
        </div>
      </section>

      <Footer ano={new Date().getFullYear()} links={linksNav} />
    </div>
  );
}

export default App;
