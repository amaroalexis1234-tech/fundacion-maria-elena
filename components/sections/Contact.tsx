"use client";

import { useId, useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { contact } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FacebookIcon } from "@/components/ui/SocialIcons";

type Status = "idle" | "loading" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const infoRows = [
  { icon: Mail, label: "Correo", value: contact.info.email, href: `mailto:${contact.info.email}` },
  { icon: FacebookIcon, label: "Facebook", value: "Fundación María Elena Moreno", href: contact.info.facebook },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const formId = useId();

  const validate = (data: { name: string; email: string; message: string }): FieldErrors => {
    const errors: FieldErrors = {};
    if (!data.name.trim()) errors.name = "Cuéntanos tu nombre.";
    if (!EMAIL_PATTERN.test(data.email.trim())) errors.email = "Ingresa un correo válido.";
    if (!data.message.trim()) errors.message = "Escribe tu mensaje.";
    return errors;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const errors = validate(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      setStatusMessage(contact.form.notConfiguredMessage);
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("success");
      setStatusMessage(contact.form.successMessage);
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setStatusMessage(contact.form.errorMessage);
    }
  };

  return (
    <section id="contacto" className="bg-fme-white py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />

          <dl className="mt-10 space-y-5">
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fme-offwhite text-fme-blue">
                  <row.icon className="h-[18px] w-[18px]" />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-fme-muted">{row.label}</dt>
                  <dd className="mt-0.5 text-[15px] text-fme-ink">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="transition-colors hover:text-fme-blue"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-[24px] border border-fme-line bg-fme-offwhite/50 p-6 sm:p-8">
          <div className="space-y-5">
            <div>
              <label htmlFor={`${formId}-name`} className="text-sm font-semibold text-fme-ink">
                {contact.form.nameLabel}
              </label>
              <input
                id={`${formId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? `${formId}-name-error` : undefined}
                className="mt-2 w-full rounded-xl border border-fme-line bg-white px-4 py-3 text-[15px] text-fme-ink placeholder:text-fme-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fme-blue"
              />
              {fieldErrors.name ? (
                <p id={`${formId}-name-error`} className="mt-1.5 text-sm text-fme-magenta">
                  {fieldErrors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-email`} className="text-sm font-semibold text-fme-ink">
                {contact.form.emailLabel}
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? `${formId}-email-error` : undefined}
                className="mt-2 w-full rounded-xl border border-fme-line bg-white px-4 py-3 text-[15px] text-fme-ink placeholder:text-fme-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fme-blue"
              />
              {fieldErrors.email ? (
                <p id={`${formId}-email-error`} className="mt-1.5 text-sm text-fme-magenta">
                  {fieldErrors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-message`} className="text-sm font-semibold text-fme-ink">
                {contact.form.messageLabel}
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows={4}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? `${formId}-message-error` : undefined}
                className="mt-2 w-full resize-none rounded-xl border border-fme-line bg-white px-4 py-3 text-[15px] text-fme-ink placeholder:text-fme-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fme-blue"
              />
              {fieldErrors.message ? (
                <p id={`${formId}-message-error`} className="mt-1.5 text-sm text-fme-magenta">
                  {fieldErrors.message}
                </p>
              ) : null}
            </div>
          </div>

          <Button type="submit" disabled={status === "loading"} className="mt-6 w-full">
            {status === "loading" ? contact.form.loadingLabel : contact.form.submitLabel}
          </Button>

          <div role="status" aria-live="polite" className="mt-4">
            {status === "success" ? (
              <p className="text-sm font-medium text-fme-blue">{statusMessage}</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm font-medium text-fme-magenta">{statusMessage}</p>
            ) : null}
          </div>
        </form>
      </Container>
    </section>
  );
}
