export default function GuidePage() {
  return (
    <div className="space-y-10 pb-32">
      <div>
        <h1 className="text-5xl font-semibold">
          Lantern Guide & Contribution Template
        </h1>
        <p className="text-black-200 font-medium mt-2">
          Whether you want to help improve Lantern or join a focused cohort,
          you&#39;ll find everything you need below.
        </p>
      </div>

      <section>
        <header className="font-bold text-lg mb-2">
          1. Contributing to Lantern
        </header>
        <p>
          We welcome contributions of all kinds—content corrections, new
          articles, code improvements, or feedback. To contribute:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            If you spot an error or have a suggestion, please{" "}
            <a
              href="https://github.com/kelvinsekx/lantern-pages/issues"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              open an issue on GitHub
            </a>
            .
          </li>
          <li>
            For major changes, open a discussion first to ensure alignment with
            project goals.
          </li>
        </ul>
      </section>

      <section>
        <header className="font-bold text-lg mb-2">
          2. Opt-In for One-on-One Learning
        </header>
        <p>
          Interested in a more personalized learning journey? You can apply to
          join my teaching cohort for a one-on-one experience, or book a private
          consultation session.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            <strong>Backend Teaching Cohort:</strong> Small group, 3 semesters
            (5 weeks per semester), $100 per semester. Includes access to a
            private forum and direct mentorship.
          </li>
          <li>
            <strong>Consultation:</strong> $500 for a 4-hour live session
            tailored to your needs (career, code review, project guidance,
            etc.).
          </li>
        </ul>
        <p className="mt-2">
          <strong>Note:</strong> Most Lantern content is free to use. Joining
          the cohort or booking a consultation is entirely optional.
        </p>
      </section>

      <section>
        <header className="font-bold text-lg mb-2">3. How to Apply</header>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            For the teaching cohort, send an email to{" "}
            <a href="mailto:kelvinsekx@gmail.com" className="text-blue-600">
              kelvinsekx @ gmail . com
            </a>{" "}
            with a brief introduction and title of{" "}
            {"Application to Backend Cohort"}.
          </li>
          <li>
            For consultation, email the same address with your preferred topics.
          </li>
        </ul>
      </section>

      <section>
        <header className="font-bold text-lg mb-2">
          4. Community & Support
        </header>
        <p>
          Join our community discussions, ask questions, or share your progress.
          We value every learner and contributor!
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>For quick help, open a GitHub issue or reach out via email.</li>
          <li>Stay tuned for upcoming community events and forums.</li>
        </ul>
      </section>
    </div>
  );
}
