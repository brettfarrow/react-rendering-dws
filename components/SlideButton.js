import Link from "next/link";

export default function SlideButton({
  slideDisplayNumber,
  slideNumber,
  prefix,
}) {
  return (
    <div className="mt-20 text-center">
      <Link href={`/slide-${slideNumber}`}>
        <a className="text-sky-400">
          {prefix} Slide: {slideDisplayNumber}
        </a>
      </Link>
    </div>
  );
}
