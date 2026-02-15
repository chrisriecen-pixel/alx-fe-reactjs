function UserProfile() {
  return (
    /* 1. Responsive Container Adjustments:
       - Mobile: p-4, max-w-xs
       - Tablets (sm): p-8 (from previous task)
       - Desktops (md): p-8, max-w-sm
       - Shared: shadow-lg, rounded-lg, hover:shadow-2xl transition-shadow */
    <div className="user-profile bg-gray-100 p-4 sm:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      
      {/* 2. Responsive Image Sizing:
         - Mobile: w-24 h-24
         - Tablets (sm): w-24 h-24 (scaling starts at md)
         - Desktops (md): w-36 h-36
         - Interaction: hover:scale-110 transition-transform */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" 
      />
      
      {/* 3. Responsive Typography:
         - Heading: text-lg on mobile, sm:text-lg, md:text-xl on medium/large screens
         - Paragraph: text-sm on small screens, md:text-base on medium/large screens */}
      <h1 className="text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;