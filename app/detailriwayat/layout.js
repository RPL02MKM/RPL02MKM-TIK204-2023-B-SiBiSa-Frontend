export const metadata = {
    title: "Detail Riwayat",
    description: "Learn more about the team behind SiBiSa",
  };
  
  // This is a Server Component
  export default function Layout({ children }) {
    return (
      <div className="bg-white py-40 max-w-7xl flex mx-auto">{children}</div>
    );
  }
  