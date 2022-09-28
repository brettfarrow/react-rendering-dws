import Link from "next/link"

export default function SlideButton({
  slideDisplayNumber,
  slideNumber,
  prefix,
}) {
  return (
    <div className="mx-10 mt-20 inline-block text-center">
      <Link href={`/slide-${slideNumber}`}>
        <a className="text-sky-400">
          {prefix} Slide: {slideDisplayNumber}
        </a>
      </Link>
    </div>
  )
}
