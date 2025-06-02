'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import pb from '@/lib/pocketbase';

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = pb.authStore.model;

    if (!currentUser || !currentUser.isadmin) {
      router.push('/login');
    } else {
      setUser(currentUser);
    }
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👑 Admin Panel</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Admin:</strong> ✅</p>
      <button onClick={() => {
        pb.authStore.clear();
        router.push('/login');
      }}>Logout</button>
    </div>
  );
}
