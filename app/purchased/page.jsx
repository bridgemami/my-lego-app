import Image from "next/image";
const apiKey = process.env.API_KEY;

async function getData() {
  const res = await fetch(`https://rebrickable.com/api/v3/lego/sets/?key=${apiKey}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function LegosPurchased() {
  const data = await getData()
  return (
    <>
    <h1>Legos Purchased</h1>
    <Image src={data.results[0].set_img_url} 
    alt={data.results[0].name}
    height={500}
    width={500} />
    </>
  )
}
