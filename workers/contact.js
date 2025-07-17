export default {
  async fetch(request) {
    if (request.method === "POST") {
      const body = await request.json();
      const { name, email, message } = body;
      // You can integrate email APIs or KV storage here
      return new Response("Contact received. We'll be in touch!", { status: 200 });
    }
    return new Response("Method Not Allowed", { status: 405 });
  }
};
