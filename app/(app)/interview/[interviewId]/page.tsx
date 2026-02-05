import { headers } from 'next/headers';
import { App } from '@/components/app/app';
import { getAppConfig } from '@/lib/utils';

interface PageProps {
  params: Promise<{ interviewId: string }>;
}

export default async function InterviewPage({ params }: PageProps) {
  const { interviewId } = await params;
  const hdrs = await headers();
  const appConfig = await getAppConfig(hdrs);

  return <App appConfig={appConfig} interviewId={interviewId} />;
}
