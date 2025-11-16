import Nav from './Nav'
const Home = () => {
  return (
      <div className="flex flex-col bg-neutral-white items-center p-4 shadow-2xl  w-3xl rounded-2xl  h-[700px] overflow-x-hidden overflow-y-scroll">
            <h1 className="text-3xl font-['Lexend_Deca']">Todo List</h1>
          <div className='mt-5'>
            <Nav />
          </div>
      </div>
  )
}
export default Home