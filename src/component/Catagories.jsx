

const Catagories = () => {
  const CatagoriesItems = [
    { id: 0, title: "Break fast", cound: "(15 item)", img: "/brakefast.png" },
    { id: 1, title: "Dinner", cound: "(25 item)", img: "/dinner.png" },
    { id: 2, title: "Junk food", cound: "(30 item)", img: "/junk.png" },
    { id: 3, title: "Desert", cound: "(96 item)", img: "/desert.png" },
  ];
  return (
    <body className='sitesize py-16'>
        <p className='sub-title'>Customers choices</p>
        <h3 className='capitalize font-heading text-black text-center py-4 font-semibold text-lg md:text-4xl'>popular Catagories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8  text-black py-14  ">
            {
              CatagoriesItems.map((item,index) => {
                return (
                  <div key={index} className='flex flex-col justify-center items-center transition p-3 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-slate-50 rounded-xl'>
                    <img src={item.img} alt={item.title} className="bg-yellow h-40 w-40 p-px rounded-full" />
                    <h4 className="text-xl font-secondary mt-3">{item.title}</h4>
                    <p>{item.cound}</p>
                  </div>
                );
              })
            }
        </div>
    </body>
  )
}

export default Catagories