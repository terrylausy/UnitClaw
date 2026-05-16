import { redirect } from "next/navigation";

export default function NotFound() {
  return redirect("/");
}
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}
