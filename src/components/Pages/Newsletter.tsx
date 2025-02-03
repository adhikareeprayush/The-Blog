
const Newsletter = () => {
  return (
    <>
     <div className="flex items-center w-full py-[30px]">
        <form className="flex flex-col gap-4 mx-auto">
            <h1 className="text-2xl font-bold">Subscribe to our newsletter</h1>
            <p className="text-gray-500">Get the latest posts delivered right to your inbox</p>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-500">Email Address</label>
                <input type="email" id="email" placeholder="
                    Enter your email address" className="border border-gray-200 p-2 rounded" />
            </div>
            <button className="bg-violet-500 text-white p-2 rounded cursor-pointer">Subscribe</button>    
        </form>    
    </div> 
    </>
  )
}

export default Newsletter
