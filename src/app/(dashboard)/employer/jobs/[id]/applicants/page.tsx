import EmployerApplicantsClient from "./employer-applicants-client";
import { mockJobs } from "@/features/jobs/types/mock-jobs";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EmployerApplicantsPage({ params }: PageProps) {
  const { id } = await params;
  return <EmployerApplicantsClient jobId={id} />;
}

export async function generateStaticParams() {
  return mockJobs.map((job) => ({
    id: job.id,
  }));
}
