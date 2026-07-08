"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { contactPage } from "@/data/constants";

type FormState = "idle" | "loading" | "success" | "error" | "validation";

export function ContactForm() {
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const [status, setStatus] = useState<FormState>("idle");

  function toggleProgram(program: string) {
    setSelectedPrograms((current) =>
      current.includes(program) ? current.filter((item) => item !== program) : [...current, program]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      parentName: String(formData.get("parentName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || ""),
      childAge: String(formData.get("childAge") || "").trim(),
      programs: selectedPrograms,
      message: String(formData.get("message") || "").trim(),
    };

    if (!payload.parentName || !payload.email || !payload.childAge || !payload.message) {
      setStatus("validation");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Sikertelen küldés");
      }

      setStatus("success");
      setSelectedPrograms([]);
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          Szülő neve *
          <input name="parentName" type="text" placeholder="Név" aria-required="true" />
        </label>

        <label>
          E-mail cím *
          <input name="email" type="email" placeholder="email@pelda.com" aria-required="true" />
        </label>

        <label>
          Telefonszám
          <input name="phone" type="tel" placeholder="+36 30 123 4567" />
        </label>

        <label>
          Gyermek / gyermekek kora *
          <input
            name="childAge"
            type="text"
            placeholder="pl. 4 éves, 6 éves"
            aria-required="true"
          />
        </label>
      </div>

      <fieldset className="program-select">
        <legend>Melyik oktatás érdekel?</legend>

        <div className="program-options">
          {contactPage.programs.map((program) => (
            <button
              key={program.value}
              type="button"
              className={selectedPrograms.includes(program.value) ? "selected" : ""}
              onClick={() => toggleProgram(program.value)}
            >
              {program.label}
            </button>
          ))}
        </div>

        <input type="hidden" name="programs" value={selectedPrograms.join(", ")} />
      </fieldset>

      <label>
        Üzenet *
        <textarea
          name="message"
          rows={6}
          placeholder="Írd meg, melyik foglalkozás érdekel, van-e már korcsolyatudás, illetve bármilyen fontos információt."
          aria-required="true"
        />
      </label>

      <button className="btn primary form-submit" type="submit" disabled={status === "loading"}>
        <Send size={18} />
        {status === "loading" ? "Küldés..." : "Üzenet küldése"}
      </button>

      {status === "success" && (
        <p className="form-status success">Köszönjük, az üzenetet sikeresen elküldtük!</p>
      )}

      {status === "validation" && (
        <p className="form-status error">Kérjük, töltsd ki a csillaggal jelölt mezőket.</p>
      )}

      {status === "error" && (
        <p className="form-status error">
          Valami hiba történt a küldés közben. Kérjük, próbáld újra, vagy írj közvetlenül e-mailt.
        </p>
      )}
    </form>
  );
}
