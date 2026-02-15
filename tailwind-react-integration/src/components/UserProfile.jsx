function UserProfile() {
  return (
    /* 1. Enhanced Shadows on Card Hover:
       - Apply hover:shadow-xl to create a lifting effect.
       - Include transition-shadow for a smooth change. */
    <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      
      {/* 2. Hover Effects on Profile Image:
         - Add hover:scale-110 to make it grow slightly.
         - Use transition-transform duration-300 ease-in-out for smoothness. */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" 
      />
      
      {/* 3. Text Emphasis on Hover:
         - Change heading color to a lighter shade on hover (hover:text-blue-500). */}
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300">
        John Doe
      </h1>
      
      <p className="text-gray-600 text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;