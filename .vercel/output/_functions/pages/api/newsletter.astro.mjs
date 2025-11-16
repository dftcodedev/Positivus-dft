import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const supabaseUrl = "https://jsffimudphrimrghctql.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzZmZpbXVkcGhyaW1yZ2hjdHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMDA2NTYsImV4cCI6MjA3ODg3NjY1Nn0.8NxE8y_gNkcAudJKzIhk9UiEczLxCDSUeT6V6JN1Fo8";
    if (!supabaseUrl || !supabaseKey) ;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase.from("newsletter_signups").insert([{
      email: data.email,
      source: data.source || "footer"
    }]);
    if (error) {
      if (error.code === "23505") {
        return new Response(JSON.stringify({ error: "already_subscribed" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
      console.error("Supabase error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
