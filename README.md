# scratchpad

Site pessoal minimalista, sem build e sem CMS. Você escreve, o navegador renderiza.

## Como colocar no ar (primeira vez)

1. **Crie o repositório**
   No GitHub, clique em **New repository**.
   - Nome: `scratchpad` (ou o que preferir)
   - Visibilidade: **Public** (obrigatório para GitHub Pages gratuito em conta pessoal)
   - Não marque "Add a README" — você já vai subir os arquivos

2. **Suba os 4 arquivos**
   Na tela do repositório recém-criado, clique em **uploading an existing file** e arraste:
   - `index.html`
   - `style.css`
   - `app.js`
   - `entries.js`

   Clique em **Commit changes**.

3. **Ative o GitHub Pages**
   - Vá em **Settings** (aba do repositório) → **Pages** (menu lateral esquerdo)
   - Em **Source**, selecione **Deploy from a branch**
   - Branch: `main`, pasta: `/ (root)` → **Save**

4. **Espere ~1 minuto**
   O GitHub vai te dar uma URL do tipo:
   `https://SEU-USUARIO.github.io/scratchpad/`

   Isso é seu site. Pronto — não precisa mexer em mais nada de configuração.

## Como publicar uma entrada nova (rotina)

Você só edita **um arquivo**: `entries.js`.

1. No repositório, clique em `entries.js` → ícone de lápis (**Edit**)
2. Copie um bloco de entrada existente, cole no topo do array `ENTRIES`, e mude:
   ```js
   {
     date: "2026-07-28",       // formato AAAA-MM-DD
     title: "Título da nota",  // opcional — pode remover a linha
     body: `Seu texto aqui.

   Linha em branco = novo parágrafo. **negrito**, *itálico*, [link](https://...)`,
   },
   ```
3. Role até o fim da página → **Commit changes**
4. Em ~30 segundos o site atualiza sozinho na mesma URL

Nenhum outro arquivo precisa ser tocado no dia a dia. `index.html`, `style.css` e `app.js` são a "casca" — só volte neles se quiser mudar o visual.

## Domínio próprio (opcional, depois)

Se um dia quiser algo como `lucasfazia.com` em vez de `.github.io`, é só comprar o domínio (Registro.br, Namecheap etc.) e apontar um registro CNAME para `SEU-USUARIO.github.io` — o GitHub Pages tem um campo para isso em Settings → Pages → Custom domain. Não precisa decidir isso agora.
