export default {
  async fetch(request, env) {
    const url = "https://api.github.com/repos/Schooluser982/Schooluser982.github.io/actions/workflows/update-counter.yml/dispatches";

    await fetch(url, {
      method: "POST",
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${env.GITHUB_TOKEN}`
      },
      body: JSON.stringify({
        ref: "main",
        inputs: { trigger: "yes" }
      })
    });

    return new Response("OK");
  }
};
