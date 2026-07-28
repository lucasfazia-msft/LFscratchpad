# scratchpad

Site pessoal minimalista. Sem build, sem CMS, sem dependências — você edita um arquivo de texto e o site atualiza sozinho.

Cada nota ganha uma página própria com link compartilhável, do tipo:
`https://SEU-USUARIO.github.io/scratchpad/#/tres-coisas-para-quem-tem-pressa`

---

## Colocar no ar (primeira vez)

1. **Crie o repositório**
   No GitHub: **New repository**.
   - Nome: `scratchpad`
   - Visibilidade: **Public** (obrigatório para o GitHub Pages gratuito)
   - Não marque "Add a README file"

2. **Suba os 5 arquivos**
   Na tela do repositório vazio, clique em **uploading an existing file** e arraste:
   `index.html`, `style.css`, `app.js`, `entries.js`, `README.md`
   Depois clique em **Commit changes**.

3. **Ative o GitHub Pages**
   **Settings** → **Pages** → em Source escolha **Deploy from a branch** → branch `main`, pasta `/ (root)` → **Save**

4. **Espere ~1 minuto** e recarregue a página de Settings → Pages. A URL do site aparece lá.

---

## Publicar uma nota nova (rotina)

Você só edita **`entries.js`**.

No repositório: clique em `entries.js` → ícone de lápis (**Edit**) → copie um bloco de nota inteiro, cole logo abaixo de `window.ENTRIES = [`, troque o conteúdo → **Commit changes**. Em ~30 segundos o site atualiza.

Formato de uma nota:

```js
{
  date: "2026-08-15",
  title: "Título da nota",
  deck: "Uma linha de resumo. Opcional — pode apagar esta linha.",
  body: `Primeiro parágrafo. Este é o trecho que aparece na home.

Linha em branco cria um novo parágrafo.

**negrito**, *itálico* e [links](https://exemplo.com) funcionam.`,
},
```

**Cuidado com um detalhe:** o texto do `body` fica entre crases (`` ` ``), não entre aspas. É o que permite quebrar linha livremente.

### Configuração do site

No topo do `entries.js` há um bloco `window.SITE`. É onde ficam o título, sua assinatura, a frase de descrição e os links de redes sociais do rodapé. Deixe a `url` vazia (`""`) para um link não aparecer.

---

## Os outros arquivos

Você não precisa tocar neles no dia a dia:

- `index.html` — a estrutura da página
- `style.css` — todo o visual (cores e fontes ficam no topo, em `:root`)
- `app.js` — monta a home e as páginas de cada nota

---

## Domínio próprio (opcional)

Se um dia quiser `lucasfazia.com` no lugar do endereço `.github.io`: compre o domínio (Registro.br, Namecheap etc.), aponte um CNAME para `SEU-USUARIO.github.io` e preencha o campo **Custom domain** em Settings → Pages. Nada no código precisa mudar.
