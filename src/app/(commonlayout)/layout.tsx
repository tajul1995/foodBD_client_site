import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";





const CommonLayout =async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  
  return (
    <div className="max-w-7xl mx-auto p-8">
        <Navbar></Navbar>
      {children}
       <Footer></Footer>
    </div>
  )
}

export default CommonLayout
