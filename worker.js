export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const ns = url.searchParams.get("ns");
    const key = url.searchParams.get("key");
    const value = url.searchParams.get("value");
    const keys = url.searchParams.get("keys"); // comma list for init
    const headers = {
      "content-type": "application/json;charset=UTF-8",
      "access-control-allow-origin": "*",
      "access-control-allow-headers": "*",
      "access-control-allow-methods": "GET,OPTIONS",
      "cache-control": "no-store",
    };
    if (request.method === "OPTIONS") return new Response("", { headers });

    function k(k){ return `${ns}:${k}`; }

    if (!ns) return new Response(JSON.stringify({ error: "missing ns" }), { headers, status: 400 });

    if (url.pathname === "/init" && keys) {
      const arr = keys.split(",").map(s=>s.trim()).filter(Boolean);
      for (const kk of arr) {
        const existing = await env.VOTES.get(k(kk));
        if (existing === null) await env.VOTES.put(k(kk), "0");
      }
      return new Response(JSON.stringify({ ok: true }), { headers });
    }

    if (url.pathname === "/get" && key) {
      const v = await env.VOTES.get(k(key));
      const n = v === null ? 0 : parseInt(v, 10) || 0;
      return new Response(JSON.stringify({ value: n }), { headers });
    }

    if (url.pathname === "/hit" && key) {
      const v = await env.VOTES.get(k(key));
      const n = (v === null ? 0 : (parseInt(v,10)||0)) + 1;
      await env.VOTES.put(k(key), String(n));
      return new Response(JSON.stringify({ value: n }), { headers });
    }

    if (url.pathname === "/set" && key) {
      const n = parseInt(value, 10) || 0;
      await env.VOTES.put(k(key), String(n));
      return new Response(JSON.stringify({ value: n }), { headers });
    }

    return new Response(JSON.stringify({ error: "not found" }), { headers, status: 404 });
  }
}