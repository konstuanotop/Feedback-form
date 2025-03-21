// import type { Route } from "./+types/home";
import type { MetaArgs } from "react-router";
import FeedbackForm from "~/components/FeedbackForm/FeedbackForm";
// import { Welcome } from "../welcome/welcome";

// export function meta({}: Route.MetaArgs) {
  export function meta({}: MetaArgs) {
  return [
    { title: "FeedbackForm" },
    { name: "description", content: "Practic FeedbackForm" },
  ];
}

export default function Home() {
  return <FeedbackForm />
  // return <Welcome />;
}
