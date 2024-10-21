import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Topbar from "@/components/Topbar";


export default function Home() {
  return (
    <div>
      <main>
        <Topbar/>
        <Navbar/>
        <Slider/>
        <Footer/>
      </main>
    </div>
  );
}
