import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Container from "@/components/common/container";
import NavBar from "@/components/common/nav-bar";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "categories",
  });

  return {
    title: t("metadata.title"),
  };
}

export default async function Page() {
  return (
    <Container>
      <NavBar name={["Categories"]} />
      <div className="p-6">Categories Page</div>
    </Container>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cn" }];
}
