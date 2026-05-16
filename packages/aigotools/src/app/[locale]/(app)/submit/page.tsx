import Container from "@/components/common/container";
import NavBar from "@/components/common/nav-bar";

export default function Page() {
  return (
    <Container>
      <NavBar name={["Submit"]} />
      <div className="p-6">Submit Page</div>
    </Container>
  );
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cn" }];
}
