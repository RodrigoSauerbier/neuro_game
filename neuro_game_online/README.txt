# Jogo — Decisão sob pressão (Hospedagem Online – online-v1)

Este pacote funciona **direto no GitHub Pages** (ou Netlify). Não precisa Python/servidor.
Os votos são somados usando **CountAPI** (serviço gratuito na nuvem).

- Namespace CountAPI: `muka_54500a589b747420`
- Token para zerar (no painel): `muka2025`

## Como publicar no GitHub Pages
1. Crie um repositório (ex.: `neuro_game`).
2. Envie **todos os arquivos desta pasta** (`index.html`, `results.html`, `style.css`, `chart.png`, etc.).
3. No GitHub → **Settings → Pages** → Source: `main` e Folder: `/ (root)` → **Save**.
4. Aguarde ~1 min. Seu link ficará assim:
   `https://SEU-USUARIO.github.io/neuro_game/`
5. O QR deve apontar para:
   `https://SEU-USUARIO.github.io/neuro_game/index.html`

## Dicas
- Para reiniciar entre rodadas, clique **Zerar** no painel e informe o token (`muka2025`).
- Se quiser trocar o token, altere o valor em `results.html` (const `RESET_TOKEN`).

Boa apresentação!
