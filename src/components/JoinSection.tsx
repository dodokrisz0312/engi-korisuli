import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type JoinButton = {
  href: string;
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
};

type JoinSectionProps = {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  buttons: JoinButton[];
};

export function JoinSection({
  image,
  imageAlt,
  title,
  titleAccent,
  subtitle,
  buttons,
}: JoinSectionProps) {
  return (
    <section className="join-section section-shell">
      <div className="join-section-image-wrap">
        <Image src={image} width={420} height={260} alt={imageAlt} className="join-section-image" />
      </div>

      <div className="join-section-copy">
        <h2>
          {title}
          {titleAccent ? <span>{titleAccent}</span> : null}
        </h2>
        <p>{subtitle}</p>
      </div>

      <div className="join-section-actions">
        {buttons.map(({ href, label, icon: Icon, variant = "primary" }) => (
          <Link
            href={href}
            className={`btn ${variant} join-section-button`}
            key={`${href}-${label}`}
          >
            <Icon size={20} aria-hidden="true" />
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
