import { supabase } from './components/SupabaseClient';

const Login = () => {
  const handleLogin = async () => {
    try {
      await supabase.auth.signIn({
        provider: 'github',
      });
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
};

export default Login;
