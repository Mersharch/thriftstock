import SingleShoot from "@/app/(site)/_components/SingleShoot";
import { getSingleShoot } from "@/sanity/services/getSingleShoot";

export default async function ShootPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const singleShoot = await getSingleShoot(slug);
  return <SingleShoot shoot={singleShoot} />;
}
