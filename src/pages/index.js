import Navbar from '../components/Navbar';
import MainBody from '../components/MainBody';
import Manifesto from '../components/Manifesto';
import SelfAwarenessTest from '../components/SelfAwarenessTest';
import WorkWithUs from '../components/WorkWithUs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <MainBody />
      <Manifesto />
      <SelfAwarenessTest />
      <WorkWithUs />
      <Footer />
    </div>
  );
}
