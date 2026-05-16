import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "common",
  });

  return {
    title: t("notFound.pageTitle"),
  };
}

export default function NotFound() {
  return redirect("/");
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cn" }];
}
