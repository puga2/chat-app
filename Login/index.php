<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Login & Signup</title>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">

    <div class="w-full max-w-md space-y-8">
        <!-- Login Form -->
        <div class="bg-white p-8 rounded shadow">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
                <div class="mb-4">
                    <label class="block mb-1 font-medium" for="login-email">Email</label>
                    <input class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" type="email" id="login-email" placeholder="Enter your email" required>
                </div>
                <div class="mb-6">
                    <label class="block mb-1 font-medium" for="login-password">Password</label>
                    <input class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" type="password" id="login-password" placeholder="Enter your password" required>
                </div>
                <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
            </form>
        </div>

        <!-- Signup Form -->
        <div class="bg-white p-8 rounded shadow">
            <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form>
                <div class="mb-4">
                    <label class="block mb-1 font-medium" for="signup-name">Name</label>
                    <input class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" type="text" id="signup-name" placeholder="Enter your name" required>
                </div>
                <div class="mb-4">
                    <label class="block mb-1 font-medium" for="signup-email">Email</label>
                    <input class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" type="email" id="signup-email" placeholder="Enter your email" required>
                </div>
                <div class="mb-6">
                    <label class="block mb-1 font-medium" for="signup-password">Password</label>
                    <input class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" type="password" id="signup-password" placeholder="Create a password" required>
                </div>
                <button class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Sign Up</button>
            </form>
        </div>
    </div>

</body>
</html>