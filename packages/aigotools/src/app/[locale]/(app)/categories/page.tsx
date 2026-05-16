import Container from "@/components/common/container";
import NavBar from "@/components/common/nav-bar";

export default function Page() {
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
