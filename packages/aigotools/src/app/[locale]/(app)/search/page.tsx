import Container from "@/components/common/container";
import NavBar from "@/components/common/nav-bar";

export default function Page({
  searchParams,
}: {
  searchParams: { s?: string; c?: string };
}) {
  return (
    <Container>
      <NavBar name={["Search"]} />
      <div className="p-6">Search Page</div>
    </Container>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cn" }];
}
