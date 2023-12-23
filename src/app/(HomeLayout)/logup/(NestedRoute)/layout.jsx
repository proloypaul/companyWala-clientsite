import Navbar from "@/Components/Shared/Navbar/Navbar"
import LogUp from "../page"

export const metadata = {
  title: 'Register | CompanyWala',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
        <LogUp/>
        <div className="font-serif">{children}</div>
    </>

  )
}