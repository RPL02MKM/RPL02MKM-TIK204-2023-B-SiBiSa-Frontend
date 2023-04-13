import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <div className="text-sm font-medium">
            <p>&copy; 2023 SIBISA. All rights reserved.</p>
          </div>

          <div className="flex items-center">
            <Link href="/about">
              <p className="text-gray-500 hover:text-blue-500 mx-4">Tentang Kami</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="text-gray-500 hover:text-blue-500 mx-4">Kebijakan Privasi</p>
            </Link>
            <Link href="/terms-and-conditions">
              <p className="text-gray-500 hover:text-blue-500 mx-4">Syarat dan Ketentuan</p>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  )
}

