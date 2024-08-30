import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
        <p className="text-xl text-gray-600 mb-8">Check out the Messages page!</p>
        <Link 
          to="/messages" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go to Messages
        </Link>
      </div>
    </div>
  );
};

export default Index;
