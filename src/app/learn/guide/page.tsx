import {
  GitBranch,
  GitMerge,
  Mail,
  MessageSquare,
  MoveRight,
  Pizza,
  Zap,
} from "lucide-react";

export default function GuidePage() {
  return (
    <div className="space-y-10 pb-32">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-pretty">
          Lantern Guide
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
          Whether you want to help improve Lantern or join a focused cohort,
          you&apos;ll find everything you need below.
        </p>
      </div>

      <section>
        <div className="flex gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg">
              <GitBranch className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Contributing to Lantern
            </h2>
            <p className="text-muted-foreground mb-4">
              We welcome contributions of all kinds. We take extra interest in
              identifying inconsistent sentences, code errors in examples,
              inaccurate logic, or code improvements.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1">
                  <MoveRight />
                </span>
                <div>
                  <p className="text-foreground">
                    Found an issue?{" "}
                    <a
                      href="https://github.com/kelvinsekx/lantern-pages/issues"
                      className="text-primary hover:underline font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open an issue on GitHub
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">
                  <MoveRight />
                </span>
                <p className="text-foreground">
                  For major changes, open a discussion first to ensure alignment
                  with project goals.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
              <GitMerge className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Opt-In Personalized Learning
            </h2>
            <p className="text-muted-foreground mb-6">
              Interested in a more personalized learning journey? Choose from
              our <b>paid</b> specialized programs.
            </p>

            <div className="grid md:min-w-[35rem] gap-4 md:grid-cols-2 mb-4">
              <div className="p-4 rounded-lg border-2 border-border">
                <div className="flex items-start gap-3 mb-2">
                  <Pizza className="h-5 w-5 mt-0.5" />
                  <h3 className="font-semibold text-foreground">
                    Backend Teaching Cohort
                  </h3>
                </div>
                <ul className="space-y-2 text-sm mb-3">
                  <li>• Small group learning</li>
                  <li>• 3 semesters (4 weeks each)</li>
                  <li>• $150 per semester</li>
                  <li>• Private forum access</li>
                  <li>• Direct mentorship</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border-2 border-border">
                <div className="flex items-start gap-3 mb-2">
                  <Zap className="h-5 w-5 mt-0.5" />
                  <h3 className="font-semibold text-foreground">
                    Private Consultation
                  </h3>
                </div>
                <ul className="space-y-2 text-sm mb-3">
                  <li>• 1-on-1 guidance</li>
                  <li>• 4-hour live session</li>
                  <li>• $500 per session</li>
                  <li>• Career guidance</li>
                  <li>• Code review & mentorship</li>
                </ul>
              </div>
            </div>

            <p className="text-sm bg-muted/30 p-3 rounded">
              <strong>Note:</strong> Most Lantern content is free. Joining the
              cohort or booking a consultation is entirely optional.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              How to Apply
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  For the Teaching Cohort
                </h3>
                <p className="text-muted-foreground mb-2">
                  Send an email with:
                </p>
                <div className="bg-background border border-border rounded p-3 font-mono text-sm">
                  <p className="text-primary">To: kelvinsekx@gmail.com</p>
                  <p className="text-primary">
                    Subject: Application to Backend Cohort
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Include a brief introduction about yourself
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  For Consultation
                </h3>
                <p className="text-muted-foreground">
                  Email the same address with your preferred topics and
                  availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg">
              <MessageSquare className="h-6 w-6" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Community & Support
            </h2>
            <p className="text-muted-foreground mb-4">
              Join our community discussions, ask questions, and share your
              progress. We value every learner and contributor!
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1">
                  <MoveRight />
                </span>
                <p className="text-foreground">
                  For quick help, open a GitHub issue or reach out via email.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-1">
                  {" "}
                  <MoveRight />
                </span>
                <p className="text-foreground">
                  Stay tuned for upcoming community events and forums.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <p className="text-black-100 font-sm mt-4">
        written and edited by Kelvinsekx, 2026
      </p>
    </div>
  );
}
