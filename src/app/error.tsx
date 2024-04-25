'use client'

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <h2>Um erro aconteceu</h2>
      <p>{error.name}</p>
      <p>{error.message}</p>

      <Link href="/categorias">
        <Button color="primary">voltar</Button>
      </Link>
    </main>
  );
}
