function UserProfile() {
  return (
    /* Container requirements: cool gray bg, padding 8, max-width 400px, 
       centered (mx-auto, my-20), rounded-lg, and shadow-lg */
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      
      {/* Image requirements: circular, 150px size, centered */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto" 
      />
      
      {/* Heading requirements: font size text-xl, color blue-800, vertical margin */}
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      
      {/* Paragraph requirements: color gray-600, font size text-base */}
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;