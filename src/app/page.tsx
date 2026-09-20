import Link from "next/link";
import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function RootPage() {
  redirect(`/${siteConfig.defaultLocale}`);
  return (
    <div>
      Redirecting to <Link href={`/${siteConfig.defaultLocale}`}>{siteConfig.name}</Link>…
    </div>
  );
}
