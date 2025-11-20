import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {resumes} from '../../constants';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumAI" },
    { name: "description", content: "Smart feedback for your career path!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track your Applications & Resume Ratings with AI</h1>
        <h2>Review your submissions and check AI-powered feedback</h2>
      </div>


    {resumes.length > 0 && (

    <div className="resumes-section">
       {resumes.map((resume) => (

       <ResumeCard key={resume.id} resume={resume} />

      ))}      
    </div>


)}
    </section>
  </main>;
}
