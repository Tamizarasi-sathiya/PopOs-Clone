"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export function MeetPopOsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "SrWw2LeZ21U";

  return (
    <section className="py-20 bg-background px-4">
      <div className="mx-auto text-center">
        <h2 className="font-body text-4xl font-normal text-foreground tracking-widest">
          MEET POP!_OS
        </h2>
        <div className="mt-8">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer aspect-video">
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Pop!_OS Video Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="shadow-xl rounded-lg"
                  data-ai-hint="operating system interface"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center rounded-lg">
                  <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white transition-colors" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 border-0">
              <DialogTitle className="sr-only">Meet Pop!_OS Video</DialogTitle>
              <DialogDescription className="sr-only">An embedded YouTube video about Pop!_OS.</DialogDescription>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
