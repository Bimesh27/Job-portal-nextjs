import { currentUser } from "@clerk/nextjs/server";
import Header from "./Header";

async function CommonLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <Header user={user} />
      <main>{children}</main>
    </div>
  );
}

export default CommonLayout;
