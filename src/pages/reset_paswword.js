import { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kode untuk mengirim permintaan reset password akan ditambahkan di sini
    console.log('Password berhasil direset');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{ backgroundColor: '#16A34A' }}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="green"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10s4.477 100 10-4.477 10-10S4.477 0 10 0zm1.67 14.952a7.48 7.48 0 01-3.37 1.048c-1.88 0-3.593-.663-4.933-1.757A7.494 7.494 0 012.51 10c0-2.04.825-3.895 2.157-5.23A7.494 7.494 0 0110 2.51a7.494 7.494 0 015.23 2.26A7.477 7.477 0 0115.49 10a7.477 7.477 0 01-1.11 3.918l1.28 1.28a1.5 1.5 0 11-2.122 2.122l-1.28-1.28zm-1.67-4.952c.92 0 1.778-.317 2.45-.846l1.464 1.463a3.503 3.503 0 00-4.414-.03l-1.263-1.264A4.96 4.96 0 008.17 9.733L9.633 8.27A3.47 3.47 0 0110 7.671c1.02 0 1.96.44 2.605 1.136l1.263 1.264a4.96 4.96 0 00-2.596.882l-1.464-1.463a2.482 2.482 0 013.308-.03l1.281 1.281c.62-.663.966-1.505.966-2.394a3.495 3.495 0 00-3.493-3.5 3.495 3.495 0 00-3.5 3.5 3.495 3.495 0 003.5 3.493z"
                    clipRule="evenodd"
                  />
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm0 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM8.75 11a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0v-2.5a.75.75 0 00-.75-.75zM10 11a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0v-2.5a.75.75 0 00-.75-.75zM11.25 11a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0v-2.5a.75.75 0 00-.75-.75z" />
                </svg>
              </span>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
