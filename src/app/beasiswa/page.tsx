import { cookies } from "next/headers";

export default async function BeasiswaPage() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken");

  const profile = await fetch(
    "https://api-sdm.bmkg.go.id/api-sup/user/v1/sdm/profil",
    {
      headers: {
        Authorization: `Bearer ${accessToken?.value}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
    });

  console.log("This is beasiswa page in submodule");

  return <div>This is beasiswa page in submodule</div>;
}
