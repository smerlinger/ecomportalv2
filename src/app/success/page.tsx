'use client';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const params = useSearchParams();
  const sessionId = params.get('session_id');

  return (
    <div>
      <h1>Success</h1>
      <p>Your payment was successful. Your session ID is {sessionId}</p>
    </div>
  );
}
