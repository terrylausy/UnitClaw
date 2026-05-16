import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Container from "@/components/common/container";
import Form from "@/components/submit/form";
import Title from "@/components/submit/title";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "submit",
  });

  return {
    title: t("metadata.title"),
  };
}

export default async function Submit() {
  const t = await getTranslations("submit");

  return (
    <Container>
      <Title />
      <Form />
    </Container>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cn" }];
}
