exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    if (event.httpMethod === "GET") {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ok: true, messaggio: "Backend attivo!" })
      };
    }

    if (event.httpMethod === "POST") {
      const dati = JSON.parse(event.body || "{}");

      // Qui andrà la logica del tuo backend

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ok: true, ricevuto: dati })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Metodo non consentito" })
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message })
    };
  }
};