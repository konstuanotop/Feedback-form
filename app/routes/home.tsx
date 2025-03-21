import type { MetaArgs } from "react-router";
import FeedbackForm from "~/components/FeedbackForm/FeedbackForm";

  export function meta({}: MetaArgs) {
  return [
    { title: "FeedbackForm" },
    { name: "description", content: "Practic FeedbackForm" },
  ];
}

export default function Home() {
  return <FeedbackForm />
}
