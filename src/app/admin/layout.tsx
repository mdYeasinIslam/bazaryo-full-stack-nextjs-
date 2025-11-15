import WithLayout from "@/@base/layouts/WithLayout";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <WithLayout>{children}</WithLayout>
    </main>
  );
}
