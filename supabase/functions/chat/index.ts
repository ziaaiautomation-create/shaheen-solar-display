import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const WEBSITE_CONTEXT = `
You are Shaheen Solar's AI assistant. You help customers with solar energy solutions in Pakistan.

COMPANY INFORMATION:
- Company Name: Shaheen Solar
- Services: Residential, Commercial, and Industrial solar solutions
- Products: Solar Panels, Solar Inverters, Batteries, Mounting Structures, Net Metering

SOLAR PANELS WE OFFER:
- JA Solar: High-efficiency monocrystalline panels
- Longi Solar: Premium mono PERC technology
- Canadian Solar: Reliable performance panels
- Jinko Solar: Industry-leading efficiency
- Trina Solar: Advanced cell technology
- Yingli Solar: Cost-effective solutions
- AIKO Solar: N-type technology
- Astronergy Solar: Premium quality panels

SOLAR INVERTERS WE OFFER:
- Huawei: Smart string inverters
- Sungrow: High-efficiency inverters
- Goodwe: Reliable hybrid inverters
- SMA: Premium German engineering
- Inverex: Local brand inverters
- Maxpower: Hybrid inverters
- Fox ESS: Energy storage inverters
- SAJ: Grid-tie inverters
- Chint: Industrial inverters
- Solarmax: Off-grid inverters
- Volteck: Budget-friendly options
- Primax: Local manufacturing

SOLUTIONS:
1. Residential Solutions: Home solar systems, reduce electricity bills, backup power
2. Commercial Solutions: Business solar installations, reduce operational costs
3. Industrial Solutions: Large-scale solar plants, maximize savings

NET METERING:
- We help with net metering applications
- Sell excess electricity back to WAPDA/K-Electric
- Reduce electricity bills significantly

CONTACT:
- Location: Pakistan
- Services available nationwide

GUIDELINES:
- Be helpful and professional
- Provide accurate information about solar energy
- Help customers calculate their solar needs
- Recommend appropriate solutions based on their requirements
- Always encourage contacting for detailed quotes
- Keep responses concise and helpful
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: WEBSITE_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
