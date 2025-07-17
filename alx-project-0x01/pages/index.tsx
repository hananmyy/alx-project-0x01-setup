import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <div className="mt-6">
            <Button label="Get Started" onClick={() => console.log("Get Started clicked")} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;