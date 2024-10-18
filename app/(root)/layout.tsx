import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import Image from "@/node_modules/next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const loggedIn = { firstName: 'Braxton', lastName: 'Johnson '};

  return (
      <main className="flex h-secreen w-full font-inter">
          <Sidebar user={loggedIn}/>
          <div className="flex size-full flex-col">
              <div className="root-layout">
                <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
                <div>
                  <MobileNav
                  user={loggedIn}
                  />                    
                </div>
              </div>
              {children}
          </div>
          
      </main>
  );
}