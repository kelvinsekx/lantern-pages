import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lantern Guide",
  description: "Lantern Pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className={`px-5`}>
        <div className="pt-20 max-w-[60ch]">{children}</div>
      </main>
    </div>
  );
}
