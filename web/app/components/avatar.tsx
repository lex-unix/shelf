interface AvatarProps {
  src: string
  alt: string
}

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-10 w-10 object-cover"
      />
    </div>
  )
}
