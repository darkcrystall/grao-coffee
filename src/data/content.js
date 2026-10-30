// guarda todo o conteúdo textual do site separado dos componentes. assim, para editar um texto, não é preciso mexer em nenhum arquivo .jsx

import cafeCoado from "../assets/cafe-coado.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import prensaFrancesa from "../assets/prensa-francesa.jpg";

export const linksNav = [
  { texto: "Início", href: "#inicio" },
  { texto: "Sobre", href: "#sobre" },
  { texto: "Cardápio", href: "#cardapio" },
  { texto: "Contato", href: "#contato" },
];

export const produtos = [
  {
    id: 1,
    nome: "Café Coado",
    descricao:
      "Grãos 100% arábica, torra média, notas de caramelo e frutas vermelhas.",
    preco: "R$ 12,00",
    imagem: cafeCoado,
  },
  {
    id: 2,
    nome: "Cappuccino",
    descricao:
      "Espresso encorpado com leite vaporizado e uma fina camada de espuma.",
    preco: "R$ 15,00",
    imagem: cappuccino,
  },
  {
    id: 3,
    nome: "Prensa Francesa",
    descricao:
      "Extração lenta que realça o corpo do café, servida em porção individual.",
    preco: "R$ 14,00",
    imagem: prensaFrancesa,
  },
];

export const depoimentos = [
  {
    id: 1,
    texto:
      "O melhor café coado que já tomei na cidade. Virou parada obrigatória de manhã.",
    autor: "Marina Costa",
    cargo: "Cliente desde 2023",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    texto:
      "Ambiente aconchegante e atendimento atencioso. Cada xícara é preparada com cuidado.",
    autor: "Rafael Nunes",
    cargo: "Cliente desde 2024",
     foto: "https://randomuser.me/api/portraits/men/32.jpg"
  },
];