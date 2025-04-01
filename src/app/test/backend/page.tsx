"use client";
import CircularProgressTimer from "@/components/circular-progress";
import { cn } from "@/utilities/cn";
import { createId } from "@paralleldrive/cuid2";
import {
  ArrowLeft,
  ArrowRight,
  Cog,
  Infinity,
  Nut,
  Rabbit,
  Search,
  Share2,
  Tally5,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

const OPTION_CONFIG = {
  labels: ["A", "B", "C", "D", "E", "F"],
};

const QUIZ_SAMPLES = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 4,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
    correctAnswer: "Harper Lee",
  },
  {
    id: 5,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
  },
  {
    id: 6,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Pb", "Fe"],
    correctAnswer: "Au",
  },
  {
    id: 7,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    id: 8,
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    id: 9,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: "Japan",
  },
  {
    id: 10,
    question: "Which element is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Nitrogen",
  },
  {
    id: 11,
    question: "Which programming language is used for web development?",
    options: ["Python", "Java", "C++", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    id: 12,
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
    correctAnswer: "Mitochondria",
  },
  {
    id: 13,
    question: "Which sport is known as 'The Beautiful Game'?",
    options: ["Basketball", "Tennis", "Football (Soccer)", "Cricket"],
    correctAnswer: "Football (Soccer)",
  },
  {
    id: 14,
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 15,
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8",
  },
  {
    id: 16,
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Mars", "Earth"],
    correctAnswer: "Mercury",
  },
  {
    id: 17,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    id: 18,
    question: "Which famous ship sank after hitting an iceberg in 1912?",
    options: ["Titanic", "Queen Mary", "USS Arizona", "Britannic"],
    correctAnswer: "Titanic",
  },
  {
    id: 19,
    question: "Which desert is the largest in the world?",
    options: [
      "Gobi Desert",
      "Sahara Desert",
      "Kalahari Desert",
      "Antarctic Desert",
    ],
    correctAnswer: "Antarctic Desert",
  },
  {
    id: 20,
    question: "Which language has the most native speakers?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    correctAnswer: "Mandarin Chinese",
  },
];

export default function TestPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const prevIsRunning = useRef(isRunning);
  const [quizz_count, setQuizzCount] = useState(0);

  useEffect(() => {
    if (prevIsRunning.current && !isRunning) {
      setQuizzCount((prev) => prev + 1);
      setSelectedOption("");
    }
    prevIsRunning.current = isRunning;
  }, [isRunning]);

  const handleStartTimer = () => {
    setIsRunning(true);
  };

  const handleIsRunning = function (v: boolean) {
    setIsRunning(v);
  };

  const handleSubmittedAnswer = (i: number) => {
    setSelectedOption(OPTION_CONFIG.labels[i]);
    handleStartTimer();
  };

  if (quizz_count === QUIZ_SAMPLES.length - 1) {
    return (
      <div className="grid min-h-screen grid-cols-[3fr_1fr] text-black">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-3xl font-bold mb-4">Trivia Completed!</h1>
          <p className="text-lg">
            See your right side for areas of improvements and concentration
          </p>
        </div>
        <div className="border-l px-3 bg-muted-300 flex flex-col justify-center">
          <div className="min-h-6/7 flex flex-col justify-between">
            <header className="font-semibold">Remarks from your quizz</header>
            <div className="text-sm space-y-2">
              <p className="flex  gap-2">
                <Nut size={16} strokeWidth="3" className="pt-1" />
                <span className="w-6/7">scored: 3/10</span>
              </p>
              <p className="flex  gap-2">
                <Nut size={16} strokeWidth="3" className="pt-1" />
                <span className="w-6/7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione molestias, accusantium facilis!
                </span>
              </p>
              <p className="flex gap-2">
                <Nut size={16} strokeWidth="3" className="pt-1" />
                <span className="w-6/7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione molestias, accusantium facilis!
                </span>
              </p>
              <p className="flex gap-2">
                <Nut size={16} strokeWidth="3" className="pt-1" />
                <span className="w-6/7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione molestias, accusantium facilis!
                </span>
              </p>
              <p className="flex gap-2">
                <Nut size={16} strokeWidth="3" className="pt-1" />
                <span className="w-6/7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione molestias, accusantium facilis!
                </span>
              </p>
              <p className="flex gap-2">
                <Nut size={16} strokeWidth="3" className="pt-1" />
                <span className="w-6/7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione molestias, accusantium facilis!
                </span>
              </p>
            </div>
            <div>
              <Link
                className="bg-red py-3 px-2 text-muted-50 rounded-md font-semibold"
                href={"/"}
              >
                Start Our Backend Development
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-svh grid-cols-[5rem_1fr_1fr] grid-rows-[3rem_1fr_1fr] text-black">
      <div className="col-span-2 flex items-center justify-around border-b">
        <div></div>
        <div className="self-center flex items-center">
          <div className="flex items-center">
            <ArrowLeft size={18} />
            <ArrowRight size={18} />
          </div>
          <div>
            <div className="bg-muted text-black-450 rounded-full w-60 flex gap-2 items-center justify-center">
              <span>latern pages</span>{" "}
              <Search className="inline-block" size={16} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-red">
          <span className="text-green-350 font-semibold text-2xl">12</span>
          <Infinity className="text-red-400" />
          <span>24</span>
        </div>
      </div>
      <QuizzSandbox.SideBar />
      <div className="col-span-2 row-span-2">
        <div className="h-full w-full flex flex-col">
          <QuizzSandbox.QuestionInterface
            question={QUIZ_SAMPLES[quizz_count].question}
          />
          <div className="border-t">
            <div className="p-8 grid grid-cols-2 gap-4">
              {QUIZ_SAMPLES[quizz_count].options.map((_, i) => (
                <div
                  key={createId()}
                  onClick={() => handleSubmittedAnswer(i)}
                  className={cn(
                    "cursor-pointer border rounded-md border-muted text-green-500 flex items-center",
                    {
                      "bg-red-400": selectedOption == OPTION_CONFIG.labels[i],
                    }
                  )}
                >
                  <span
                    className={cn(
                      "h-10 w-10 mr-4 inline-flex items-center justify-center  rounded-md font-semibold text-2xl border-2",
                      {
                        "bg-muted": selectedOption == OPTION_CONFIG.labels[i],
                      }
                    )}
                  >
                    {OPTION_CONFIG.labels[i]}
                  </span>
                  <span className="flex items-center justify-between w-full">
                    <span
                      className={cn("flex font-medium text-lg", {
                        "text-[#fff] font-semibold":
                          selectedOption == OPTION_CONFIG.labels[i],
                      })}
                    >
                      {_}
                    </span>
                    {selectedOption == OPTION_CONFIG.labels[i] && (
                      <span className="w-10 h-10">
                        <CircularProgressTimer
                          handleIsRunning={handleIsRunning}
                          isRunning={isRunning}
                        />
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizzSandbox() {}

QuizzSandbox.SideBar = function SideBar() {
  return (
    <div className="border-r h-full justify-items-center col-span-1 row-span-full text-green-500 shadow-inner">
      <div className="flex flex-col justify-between h-full py-4">
        <div className="space-y-2">
          <div>
            <UserRound size={32} />
          </div>
          <div>
            <Cog size={32} />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Share2 size={32} />
          </div>
          <div>
            <Tally5 size={32} />
          </div>
          <div>
            <Rabbit size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

QuizzSandbox.QuestionInterface = function QuestionInterface<
  T extends ReactNode
>({ question }: { question: T }) {
  return (
    <div className="h-7/10 p-8 text-lg">
      <p>{question}</p>
    </div>
  );
};
