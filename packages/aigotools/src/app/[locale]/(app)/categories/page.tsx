import Container from "@/components/common/container";
import NavBar from "@/components/common/nav-bar";

// 强制动态渲染，彻底避开预渲染错误
export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <Container>
      <NavBar name={["Categories"]} />
      <div className="p-6">Categories Page</div>
    </Container>
  );
}
