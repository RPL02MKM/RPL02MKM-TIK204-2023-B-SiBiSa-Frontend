export const metadata = {
  title: "Profile",
  description: "Learn more about the team behind SiBiSa",
};

// This is a Server Component
export default function Layout({ children }) {
  return <div className="min-h-screen py-40">{children}</div>;
}