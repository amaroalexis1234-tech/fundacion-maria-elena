// Construye la URL de WhatsApp de forma segura a partir de la variable de entorno
// pública NEXT_PUBLIC_WHATSAPP_NUMBER. El número real nunca se hardcodea.

export function getWhatsAppUrl(message?: string): string | null {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!rawNumber) return null;

  const digits = rawNumber.replace(/[^\d]/g, "");
  if (!digits) return null;

  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}
