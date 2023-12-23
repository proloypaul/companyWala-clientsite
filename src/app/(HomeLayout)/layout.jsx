import Navbar from "@/Components/Shared/Navbar/Navbar"

export const metadata = {
  title: 'Home | CompanyWala',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
        <Navbar/>
        <div>{children}</div>
    </>

  )
}