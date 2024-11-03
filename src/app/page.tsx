import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface ProfileInfo {
  _id: string;
}

async function Home() {
  const user = await currentUser();
  console.log(user);

  const profileInfo : ProfileInfo | null = null;

  // idk how to fix this for now
  if (user && !profileInfo?._id) {
    redirect("/onboard");
  }

  return <section>Main content</section>;
}

export default Home;
