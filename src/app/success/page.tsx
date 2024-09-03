'use client';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const sessionId = params.sessionId as string;

  return (
    <div>
      <h1>Success</h1>
      <p>Your payment was successful. Your session ID is {sessionId}</p>
    </div>
  );
}
