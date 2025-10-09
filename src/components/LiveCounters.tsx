const CommunityCounters = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-wett-gold">1,234+</p>
          <p className="text-xl">Community Members</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-wett-gold">5,678+</p>
          <p className="text-xl">Items Traded</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-wett-gold">100+</p>
          <p className="text-xl">Events Hosted</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityCounters;
