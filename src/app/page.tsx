"use client"
import { Typography, Card, CardContent, Button } from "@mui/material";

import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Typography className="text-mediumPink text-5xl text-center p-8">
        elaSaúde
      </Typography>

      <div className="flex flex-col items-center justify-center w-full h-full bg-lightGray p-4">
        {/* Card de vídeo */}
        <Card className="w-1/2 flex items-center justify-center shadow-lg shadow-mediumPink mb-8">
          <CardContent>
            <Typography variant="h6" className="mb-2 text-center">
              Quer descobrir mais?
            </Typography>
            <div className="w-full aspect-h-9">
            <iframe width="700" height="315" src="https://www.youtube.com/embed/wgFOfw5MdKs?si=zyaCTrhvF-nd3_aB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            {/* Botão para a página de perguntas */}
            <Link
              href="/saiba-mais"
              className="flex justify-center self-center p-4"
              passHref
            >
              <Button
                className="w-1/2 mx-auto bg-mediumPink text-white font-medium"
              >
                Saiba Mais
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
