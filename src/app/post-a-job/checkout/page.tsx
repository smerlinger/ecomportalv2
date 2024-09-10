'use client';

import React, { useEffect, useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { stripePromise } from '@/service/stripe';

interface PageProps {
  amount: number;
}
export default function Page(/*{ amount }: PageProps*/) {
  const amount = 49.99;

  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
}
