import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-10">
      {/* Cover Image */}
      <div className="relative w-full h-64 bg-cover bg-center" 
           style={{ backgroundImage: 'url(https://via.placeholder.com/1500x500)' }}>
        <button className="absolute right-4 bottom-4 bg-blue-600 py-1 px-3 rounded-md flex items-center text-sm">
          <span className="mr-2">Edit</span>
          <i className="fas fa-camera"></i> {/* Using FontAwesome for icons */}
        </button>
      </div>

      {/* Profile Section */}
      <div className="relative -mt-16">
        <div className="w-32 h-32 rounded-full border-4 border-gray-900 overflow-hidden">
          <img src="https://via.placeholder.com/300" alt="Profile" />
        </div>
        <button className="absolute -bottom-2 right-0 bg-blue-600 p-2 rounded-full">
          <i className="fas fa-camera text-white"></i> {/* Icon for changing profile */}
        </button>
      </div>

      {/* Name and Title */}
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold">Danish Helium</h1>
        <p className="text-gray-400">UI/UX Designer</p>
      </div>

      {/* Stats */}
      <div className="mt-6 flex justify-center space-x-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold">259</h2>
          <p className="text-gray-400">Posts</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold">129K</h2>
          <p className="text-gray-400">Followers</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold">2K</h2>
          <p className="text-gray-400">Following</p>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-8 max-w-xl text-center">
        <h3 className="text-lg font-semibold mb-4">About Me</h3>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, 
          eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultrices. 
          Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-dribbble"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-behance"></i>
        </a>
      </div>
    </div>
  );
};

export default Profile;
