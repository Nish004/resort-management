'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import pb from '@/lib/pocketbase';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = pb.authStore.model;
    if (!currentUser) {
      router.push('/login');
    } else {
      setUser(currentUser);
    }
  }, [router]);

  const handleLogout = () => {
    pb.authStore.clear();
    router.push('/login');
  };

  const handlePasswordChange = async () => {
    const newPassword = prompt('Enter new password');
    if (!newPassword) return;

    try {
      await pb.collection('users').update(user.id, {
        password: newPassword,
        passwordConfirm: newPassword,
      });
      alert('✅ Password updated');
    } catch (error: any) {
      alert('❌ Failed: ' + error.message);
    }
  };

  if (!user) return null;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, {user.name}!</h1>
      <p><strong>Email:</strong> {user.email}</p>
      {user.avatar ? (
        <img
          src={`http://127.0.0.1:8090/api/files/users/${user.id}/${user.avatar}`}
          alt="Avatar"
          width={100}
          height={100}
        />
      ) : (
        <p>No avatar uploaded</p>
      )}
      <br />
      <button onClick={handlePasswordChange}>Change Password</button>
      <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
