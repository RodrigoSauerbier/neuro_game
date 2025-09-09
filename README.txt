# Jogo — Online (online-v3) com Cloudflare Workers (BACKEND)

## Visão
- Frontend: GitHub Pages (estes arquivos).
- Backend: Cloudflare Workers + KV (script `worker.js`).
- Sem depender da sua máquina ou do Wi‑Fi da faculdade.

## Como publicar o BACKEND (Cloudflare Workers)
1. Crie uma conta em https://dash.cloudflare.com/ (grátis).
2. Menu **Workers & Pages** → **Create** → **Create Worker**.
3. Clique em **Quick edit** e **substitua** o código pelo conteúdo de `worker.js`.
4. Clique **Save and deploy**.
5. Na lateral, em **Settings → Variables & Bindings → KV Namespace Bindings**:
   - Clique **Add binding**
   - **Variable name:** `VOTES`
   - **KV namespace:** **Create new** → nomeie `votes`
   - **Save**.
6. Copie a URL do seu worker (ex.: `https://seu-jogo.muka.workers.dev`).

## Conectar o FRONTEND ao Worker
1. Edite `index.html` e `results.html` **no GitHub** (botão ✏️).
2. Procure por:
   ```
   const API_BASE = "https://YOUR-SUBDOMAIN.workers.dev";
   ```
   Troque pelo seu endereço do passo 6 (sem barra no final).
3. Salve os arquivos. Aguarde ~1 min e teste:
   - Público: `https://SEU-USUARIO.github.io/neuro_game/`
   - Painel:  `https://SEU-USUARIO.github.io/neuro_game/results.html`

## Notas
- Namespace usado: `muka_7d832cb81995` (padrão deste pacote). Pode deixar assim.
- Para reiniciar, use o botão **Zerar** no painel (token: `muka2025`).
