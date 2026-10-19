"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitch({ label }: { label: string }) {
  const pathname = usePathname();
  const [, current, ...rest] = pathname.split("/");
  const target = current === "vi" ? "en" : "vi";

  return (
    <Link
      href={`/${[target, ...rest].join("/")}`}
      hrefLang={target}
      className="rounded-full border border-ink/20 px-3 py-2 text-sm font-medium hover:border-coral"
    >
      {label}
    </Link>
  );
}
