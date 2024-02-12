function Body() {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="bg-gray-800 text-white rounded-lg py-8 px-4">
        <img
          src="image/coach-1.png"
          class="mx-auto mb-4 w-3/5"
          alt="Coach Image"
        />
        <a
          href="login.html"
          class="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-2"
        >
          Login as Coach
        </a>
        <a
          href="signup.html"
          class="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          Join as Coach
        </a>
      </div>
      <div class="bg-gray-800 text-white rounded-lg py-8 px-4">
        <img
          src="image/man_key.png"
          class="mx-auto mb-4 w-2/5"
          alt="User Image"
        />
        <a
          href="login.html"
          class="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-2"
        >
          Login as User
        </a>
        <a
          href="signup.html"
          class="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          Join as User
        </a>
      </div>
    </div>
  );
}

export default Body;
