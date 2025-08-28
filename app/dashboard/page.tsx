import { redirect } from 'next/navigation';

export default function DashboardPage() {
  // For now, redirecting to student dashboard as an example
  // In a real app, you would check the user's role and redirect accordingly
  redirect('/dashboard/student');
  
  // If you have authentication, you would do something like:
  // const { user } = await getCurrentUser();
  // if (user.role === 'student') {
  //   redirect('/dashboard/student');
  // } else if (user.role === 'expert') {
  //   redirect('/dashboard/expert');
  // } else if (user.role === 'admin') {
  //   redirect('/dashboard/admin');
  // }
  
  return null;
}
