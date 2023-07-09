import img from '../../assets/Group 12.png'
const Home = () => {
    
    return (
      <div className="flex justify-center items-center mt-20 gap-24">
        <div>
          <p className="font-sans text-[#FF9900] text-xl">Sale up to 70% off</p>
          <h1 className="font-sans text-text mt-8">New Collection For Fall</h1>
          <p className="font-sans text-text text-xl mb-8">
            Discover all the new arrivals of ready-to-wear collection.
          </p>
          <button className="bg-[#FF9900] text-text p-2">SHOP NOW</button>
        </div>
        <img src={img} alt="" />
      </div>
    );
};

export default Home;