const Catagories = () => {
  const CatagoriesItems = [
    { id: 0, title: "Break fast", cound: "(15 item)", img: "/images/brakefast.png" },
    { id: 1, title: "Dinner", cound: "(25 item)", img: "/images/dinner.png" },
    { id: 2, title: "Junk food", cound: "(30 item)", img: "/images/junk.png" },
    { id: 3, title: "Desert", cound: "(96 item)", img: "/images/desert.png" },
  ];
  return (
    <section className='sitesize py-16'>
        <p className='sub-title'>Customers choices</p>
        <h3 className='title'>popular Catagories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8  text-black py-14  ">
            {
              CatagoriesItems.map((item,index) => {
                return (
                  <div key={index} className='flex flex-col justify-center items-center  p-3 transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-xl md:h-72 hover:bg-slate-50 rounded-xl'>
                    <img src={item.img} alt={item.title} className="bg-yellow h-40 w-40 p-px rounded-full" />
                    <h4 className="text-xl font-secondary mt-3">{item.title}</h4>
                    <p>{item.cound}</p>
                  </div>
                );
              })
            }
        </div>
    </section>
  )
}

export default Catagories