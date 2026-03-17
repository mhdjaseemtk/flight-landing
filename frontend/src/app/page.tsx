import { CircularGallery } from "@/components/CircularGallery";


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="pt-24 text-center">
        <h1 className="text-5xl font-semibold">
          Create Stunning Images
        </h1>
      </section>

      <div className="mt-20 h-[600px] w-full">
        <CircularGallery items={[
          { image: '/1.jpg', text: 'Nature', id: '1' },
          { image: '/2.jpg', text: 'City', id: '2' },
          { image: '/3.jpg', text: 'People', id: '3' },
          { image: '/4.jpg', text: 'Animals', id: '4' },
          { image: '/5.jpg', text: 'Nature', id: '5' },
          { image: '/6.jpg', text: 'City', id: '6' },
          { image: '/7.jpg', text: 'People', id: '7' }
        ]}
          gap={0.8} />
      </div>

    </main>
  );
} 