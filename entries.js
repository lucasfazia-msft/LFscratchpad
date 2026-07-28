// ============================================================
//  1) CONFIGURAÇÃO DO SITE — mexa aqui uma vez só.
// ============================================================

window.SITE = {
  title: "bloco-de-notas",
  author: "Lucas Fazia",
  tagline: "Notas de trabalho. Publicadas conforme escritas, não conforme prontas.",
  links: [
    // Cole suas URLs aqui. Deixe "" para o link não aparecer.
    { label: "LinkedIn", url: "" },
    { label: "X", url: "" },
  ],
};

// ============================================================
//  2) AS NOTAS
//
//  Cada nota é um objeto { }. Para publicar uma nova, copie um
//  bloco inteiro e cole logo abaixo do "window.ENTRIES = [".
//  A ordem no arquivo não importa — o site organiza por data.
//
//  Campos:
//    date  — obrigatório, no formato "AAAA-MM-DD"
//    title — obrigatório
//    deck  — opcional, uma linha de resumo abaixo do título
//    body  — o texto. Linha em branco = novo parágrafo.
//            **negrito**, *itálico*, [texto](https://link.com)
//
//  Atenção: o texto fica entre crases (`), não aspas.
// ============================================================

window.ENTRIES = [
  {
    date: "2026-07-27",
    title: "Três coisas para quem tem pressa",
    deck: "Inquietude não é defeito a corrigir. É energia à espera de endereço.",
    body: `Fui uma criança apressada. Li cedo, andei cedo, escrevi cedo. Essa foi uma constante na minha vida. Com o tempo entendi que o problema nunca foi a pressa, e sim a pressa sem endereço: essa não vira construção, vira ansiedade.

Três ideias que me ajudaram a endereçar.

**1. Antes do plano, os alicerces.**
Ray Dalio define princípios como "verdades fundamentais que servem de alicerce para o comportamento". O ponto dele é que quem não tem acaba agindo de forma inconsistente com os próprios objetivos e com a própria natureza. Meta você troca. Princípio é o que decide *por que* você trocou. Quem tem pressa tende a pular direto pro plano de ação; o trabalho mais lento é definir o que você quer e no que se apoia quando o plano falha.

**2. Perspectiva é fundamental. O mundo é enorme.**
Li uma entrevista do lutador de UFC Georges St-Pierre e como ele lidava com a ansiedade pré-luta: saindo para longos passeios de carro, observando pessoas comuns tocando a vida; encontrava alívio em perceber que cada uma tinha os próprios problemas e afazeres, e esse recuo de si mesmo era o que ele precisava antes de entrar no octógono. Ter outras frentes na vida — esporte, família, um projeto sem retorno financeiro — não é dispersão. É o que impede uma única frente de virar o mundo inteiro.

**3. Reconheça o poder do acaso e prepare-se de acordo.**
Nassim Taleb é um dos meus escritores favoritos e ele resume assim: "o acaso terá a última palavra". Ele argumenta que sistematicamente creditamos à habilidade o que veio de sorte, e subestimamos o peso de eventos raros. A conclusão prática não é abandonar o plano, é construir um plano que sobreviva ao imprevisto. Plano travado demais não protege você do acaso; só garante que cada desvio seja vivido como fracasso pessoal. Isso desgasta, e desgasta rápido.

Princípios dão direção. Perspectiva tira o peso. Flexibilidade evita a frustração.

Pressa não é o problema. Pressa sem endereço é.

**Para ler**
— [Principles: Life and Work](https://a.co/d/0ejx9BBW), Ray Dalio
— [Iludido pelo Acaso](https://a.co/d/02k6klQz), Nassim Taleb
— [Sobre a ansiedade pré-luta de GSP](https://sportskeeda.com/mma/3-ufc-fighters-suffer-pre-fight-anxiety)`,
  },
];
