import Container from "@/components/common/container";
import NavBar from "@/components/common/nav-bar";

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <Container>
      <NavBar name={["Home"]} />
      <div className="p-6">Home Page</div>
    </Container>
  );
}
