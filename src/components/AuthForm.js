import {
    Form,
    Link,
    useSearchParams,
    useActionData,
    useNavigation,
} from 'react-router-dom';

function AuthForm() {
    const data = useActionData();
    const navigation = useNavigation();

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = navigation.state === 'submitting';

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <Form method="post" className="space-y-6">
                    {/* Form Title */}
                    <h1 className="text-2xl font-bold text-center text-gray-800">
                        {isLogin ? 'Log in' : 'Create a new user'}
                    </h1>

                    {/* Error Messages */}
                    {data && data.errors && (
                        <ul className="bg-red-100 text-red-800 p-4 rounded">
                            {Object.values(data.errors).map((err) => (
                                <li key={err}>{err}</li>
                            ))}
                        </ul>
                    )}

                    {data && data.message && (
                        <p className="text-center text-green-600">{data.message}</p>
                    )}

                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                        />
                    </div>

                    {/* Toggle Login/Signup */}
                    <div className="text-center">
                        <Link
                            to={`?mode=${isLogin ? 'signup' : 'login'}`}
                            className="text-blue-500 hover:underline"
                        >
                            {isLogin ? 'Create a new user' : 'Log in'}
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                            isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Save'}
                    </button>
                </Form>
            </div>
        </div>
    );
}

export default AuthForm;

