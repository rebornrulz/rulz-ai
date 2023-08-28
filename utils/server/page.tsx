import { sql } from "@vercel/postgres";
import { kv } from "@vercel/kv";

export default async function Cart({ params }: { params: { user: string } }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;
  const cart = await kv.get<{ id: string; quantity: number }[]>(params.user);

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
      {cart?.map((item) => (
        <div key={item.id}>
          {item.id} - {item.quantity}
        </div>
      ))}
    </div>
  );
}