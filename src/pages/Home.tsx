import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RingStorySection from "../components/RingStorySection";
import EditorialSection from "../components/EditorialSection";
import CollectionSection from "../components/CollectionSection";
import CraftsmanshipSection from "../components/CraftsmanshipSection";
import MaterialsSection from "../components/MaterialsSection";
import CategorySection from "../components/CategorySection";
import ClosingSection from "../components/ClosingSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main className="bg-[#090909] text-white">
            <Navbar />
            
            <HeroSection />
            <RingStorySection />
            <EditorialSection />
            <CollectionSection />
            <CraftsmanshipSection />
            <MaterialsSection />
            <CategorySection />
            <ClosingSection />
            <Newsletter />
            <Footer />
        </main>
    );
}