"use server"

export async function createFood(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const price = Number(formData.get("price"))
  const category = formData.get("category") as string
  const image = formData.get("image") as File | null

  console.log({
    title,
    description,
    price,
    category,
    image,
  })

  // 👉 Example: save to DB here
  // 👉 Example: upload image to cloud storage

  return { success: true }
}
