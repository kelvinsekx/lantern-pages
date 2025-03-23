import { Footer } from "@/components/footer";
import { NavigationTop } from "@/components/nav";

export default function Home() {
  return (
    <div>
      <NavigationTop />
      <Home.Main />
      <Footer />
    </div>
  );
}

Home.Main = function Main() {
  return (
    <div>
      <h1>
        Grow, learn and build your skills into world renowned in a battle
        tested, fun and collaborative platform.
      </h1>
      <p>
        Join the world&apos;s modern, open source, one stop learning platofmr
      </p>
      <div>
        <div>
          <form action="">
            <input type="text" placeholder="Enter your email..." />
            <button>Sign up for latern</button>
          </form>
        </div>
        <div>Test your skills</div>
      </div>
    </div>
  );
};
