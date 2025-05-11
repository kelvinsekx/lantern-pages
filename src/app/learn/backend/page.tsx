import cuid2 from "@paralleldrive/cuid2";
import { LibraryBig } from "lucide-react";

const IKEA_STAGES = [
  {
    title: "Introduction to backend development",
    description: "An overview and introduction to coding in Node",
  },
  {
    title: "Hosting (cdn, https, domains, networking)",
    description: "Learn how to deploy and host your backend services",
  },
  {
    title: "Authentication (custom, social logins)",
    description: "Implement secure user authentication methods",
  },
  {
    title: "Blob storage (file uploads, urls, cdn-backed)",
    description: "Store and serve user-uploaded files efficiently",
  },
  {
    title: "Email",
    description: "Integrate email sending and receiving functionality",
  },
  {
    title: "Payments",
    description: "Process payments and handle financial transactions",
  },
  {
    title: "Monitoring",
    description: "Track system performance and detect issues",
  },
  {
    title: "Analytics",
    description: "Collect and analyze user behavior data",
  },
  {
    title: "Dev tools (CI/CD, staging)",
    description: "Set up development workflows and deployment pipelines",
  },
  {
    title: "Secrets",
    description: "Manage sensitive configuration and API keys securely",
  },
  {
    title: "Push Notifications",
    description: "Send real-time notifications to user devices",
  },
  {
    title: "Caching",
    description: "Improve performance with data caching strategies",
  },
];

export default function LearnBackendPage() {
  return (
    <div>
      <div className="sekx__banner bg-green flex justify-between py-20 px-12">
        <div className="space-y-5 text-[#fff] tracking-tight">
          <div>
            <p className="font-extrabold text-4xl">
              Learn backend Development <span className="text-xs">Node</span>
            </p>
          </div>
          <div>An indepth and production ready guide</div>
        </div>
        <div className="border bg-[#fff] border-muted rounded-2xl px-5 py-10 mr-20">
          <div className="text-black-400 font-semibold text-xl">
            <span className="text-black">0%</span> Completed
          </div>
          <p className="text-black-250">
            <span className="text-green-350 font-semibold">sign in</span> to
            save your progress
          </p>
        </div>
      </div>
      <div className="sekx__list-stages">
        <ul>
          {IKEA_STAGES.map((stage, index) => (
            <li
              key={cuid2.createId()}
              className="bg-muted-200 pt-10 flex flex-col"
            >
              <div className="flex px-12">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-black text-[#fff] text-3xl">
                  {index + 1}
                </div>
                <section className="pl-10 space-y-2">
                  <header className="text-black-400 text-3xl font-semibold tracking-tight">
                    {stage.title}
                  </header>
                  <p className="text-black-250 text-lg">{stage.description}</p>
                  <p className="text-black-250 mt-8 flex items-baseline gap-2">
                    <LibraryBig />
                    <span className="relative bottom-0.5">Articles...</span>
                  </p>
                </section>
              </div>
              <div className="h-[1px] w-full bg-black mt-10"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
