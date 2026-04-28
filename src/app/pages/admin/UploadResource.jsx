import { Navigate } from 'react-router';
import { useAuth } from '@/app/context/AuthContext';

export default function UploadResource() {
  const { getUrlSafeName, getUrlSafeEmail } = useAuth();

  return (
    <Navigate
      to={`/Learnx/Admin/${getUrlSafeName()}/${getUrlSafeEmail()}/Resource-Management`}
      replace
    />
  );
}

