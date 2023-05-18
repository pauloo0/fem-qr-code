import QrCode from './assets/images/image-qr-code.png'

function App() {
  return (
    <div className='min-h-screen bg-light_gray grid place-items-center'>
      <main className='bg-white p-4 rounded-xl w-[300px] shadow-xl'>
        <img src={QrCode} alt='QR Code' className='rounded-lg w-full' />
        <section className='p-1 my-6 text-center font-outfit leading-5'>
          <h1 className='text-xl text-dark_blue font-bold mb-4'>
            Improve your front-end skills by building projects
          </h1>
          <p className='text-paragraph text-gray-500'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
